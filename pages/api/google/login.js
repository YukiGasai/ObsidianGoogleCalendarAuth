// Login API endpoint to start the PKCE Authorization Code Flow with Google
export default async function handler(req, res) {
    // Only allow GET requests to make sure the user is using a browser
    if (req.method !== 'GET') {
        res.status(405).send({ message: 'Only GET requests allowed' })
        return
    }

    // Check if the request has a key query parameter for the encryption of the token
    if (!req.query.key) {
        res.status(400).send({ message: 'Request denied' })
        return
    }

    // Build the authorization URL
    let authUrl = `https://accounts.google.com/o/oauth2/v2/auth`
    authUrl += `?scope=https://www.googleapis.com/auth/calendar`
    authUrl += `&access_type=offline`
    authUrl += `&include_granted_scopes=true`
    authUrl += `&response_type=code`
    authUrl += `&state=${req.query.key}`
    authUrl += `&redirect_uri=${process.env.GOOGLE_REDIRECT_URI}`
    authUrl += `&client_id=${process.env.GOOGLE_CLIENT_ID}`

    // Redirect the user to the authorization URL
    res.redirect(authUrl);
}
