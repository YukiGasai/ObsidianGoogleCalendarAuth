/*
    This is the callback api Endpoint for the public OAuth flow. It obtains the access and refresh token
    encrypts them and redirects them with the obsidian protocol to the obsidian app.
*/
import { scopeTest } from '@/helper/scopeTest';
import crypto from 'crypto';

export default async function handler(req, res) {

  // Only allow GET requests to this route
  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }
  // Make sure that the request contains the required parameters
  let { code, state, scope } = req.query;
  if (!code || !state || !scope || !scopeTest(scope)) {
    res.status(400).send({ message: 'Request denied' })
    return
  }
  
  // Exchange the authorization code for an access and refresh token
  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "code": code,
      "client_id": process.env.GOOGLE_CLIENT_ID, // get secrets from the environment variables using dotenv
      "client_secret": process.env.GOOGLE_CLIENT_SECRET,
      "redirect_uri": process.env.GOOGLE_REDIRECT_URI,
      "grant_type": "authorization_code"
    })
  })

  //convert the response to json
  let token = await tokenResponse.json();
  // create a payload array for the encryption with only the access and refresh token
  // the payload has to be minimal to abide by the 2048 byte limit of RSA-OAEP
  let payload = [token.access_token, token.refresh_token];

  // Import the public key from the state parameter
  const rsaPublicKey = await crypto.subtle.importKey(
    "spki", 
    new Uint8Array(state.match(/.{1,2}/g).map((byte) => parseInt(byte, 16))),
    {
      name: "RSA-OAEP",
      hash: "SHA-256",
    },
    true,
    ["encrypt"]
  );

  // Encrypt the payload with the public key
  const text = await crypto.subtle.encrypt("RSA-OAEP", rsaPublicKey, Buffer.from(JSON.stringify(payload)));

  // Redirect the the browser to the callback page to redirect the token to the obsidian app
  res.redirect(`../../callback?token=${Buffer.from(text).toString('base64url')}&scope=${token.scope}`)
}

