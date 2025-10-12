import type { NextApiRequest, NextApiResponse } from 'next'

// Temporarily disable the API route to avoid build-time imports of optional SDKs.
// The chat page will remain available and can be updated to call another endpoint.
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(410).json({ error: 'Chat API temporarily removed. Please use the page.' })
}

