import type { NextApiRequest, NextApiResponse } from 'next'
import claimsData from '../../../data/claims.json'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'GET') return res.status(500).json({ message: 'Error - Only accept GET method.' })
  res.status(200).json(claimsData)
}

export default handler
