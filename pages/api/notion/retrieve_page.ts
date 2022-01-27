import type { NextApiRequest, NextApiResponse } from 'next'
import { getPage } from "../../../lib/notion";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        const { id } = req.query

        try {
            const page = await getPage(id);

            return res.status(200).json(page)
        } catch (err) {
            return res.status(500).json({
                error: 'ページ取得に失敗しました'
            })
        }
    } else {
        res.setHeader('Allow', ['GET'])
        return res.status(405).json({ error: `Method ${req.method} not allowed` })
    }
}