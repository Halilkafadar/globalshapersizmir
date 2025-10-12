import type { NextApiRequest, NextApiResponse } from 'next'

// This file replaces pages/api/chat.ts to disable the route without deleting history.
// It's intentionally named *.disabled.ts so Next.js won't treat it as an API route.
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(410).json({ error: 'Chat API temporarily disabled. Use the page.' })
}
