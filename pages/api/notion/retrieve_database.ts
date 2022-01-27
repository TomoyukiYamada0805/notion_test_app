import type { NextApiRequest, NextApiResponse } from 'next'
import { databaseId, getDatabase } from "../../../lib/notion";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        try {
            const database = await getDatabase(databaseId);

            return res.status(200).json(database)
        } catch (err) {
            return res.status(500).json({
                error: 'データベース取得に失敗しました'
            })
        }
    } else {
        res.setHeader('Allow', ['GET'])
        return res.status(405).json({ error: `Method ${req.method} not allowed` })
    }
}