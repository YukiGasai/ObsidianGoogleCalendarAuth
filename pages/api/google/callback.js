/*
    This is the callback page for the public OAuth flow. It obtains the access and refresh token
    encrypts them and redirects them with the obsidian protocol to the obsidian app.
*/
import { scopeTest } from '@/helper/scopeTest';
import crypto from 'crypto';

export default async function handler(req, res) {

  if (req.method !== 'GET') {
    res.status(405).send({ message: 'Only GET requests allowed' })
    return
  }

  let { code, state, scope } = req.query;

  if (!code || !state || !scope || !scopeTest(scope)) {
    res.status(400).send({ message: 'Request denied' })
    return
  }

  const tokenResponse = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "code": code,
      "client_id": process.env.GOOGLE_CLIENT_ID,
      "client_secret": process.env.GOOGLE_CLIENT_SECRET,
      "redirect_uri": process.env.GOOGLE_REDIRECT_URI,
      "grant_type": "authorization_code"
    })
  })

  let token = await tokenResponse.json();
  let payload = [token.access_token, token.refresh_token];

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
  const text = await crypto.subtle.encrypt("RSA-OAEP", rsaPublicKey, Buffer.from(JSON.stringify(payload)));
  res.redirect(`../../callback?token=${Buffer.from(text).toString('base64url')}&scope=${token.scope}`)
}

