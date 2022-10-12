import type { NextApiRequest, NextApiResponse } from 'next'
import claimsData from '../../../../../data/claims.json'

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const { claimId, categorieId } = req.query
  res.status(200).json(claimsData[claimId].categories[categorieId])
}

export default handler