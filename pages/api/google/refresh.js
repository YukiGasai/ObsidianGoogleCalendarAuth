// Token refresh endpoint to get a new access token from a refresh token
export default async function handler(req, res) {
    // Only allow POST requests to make sure the refresh token is not exposed
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }

    // Check if the request has a key query parameter for the encryption of the token
    if (!req.body.refresh_token) {
        res.status(400).send({ message: 'Request denied' })
        return
    }
    let refreshUrl = `https://oauth2.googleapis.com/token`

    const tokenRequest = await fetch(refreshUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "refresh_token": req.body.refresh_token,
            "client_id": process.env.GOOGLE_CLIENT_ID,
            "client_secret": process.env.GOOGLE_CLIENT_SECRET,
            "grant_type": "refresh_token"
        })
    })

    const token = await tokenRequest.json();

    return res.status(200).json(token)
}
