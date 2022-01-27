import type { NextApiRequest, NextApiResponse } from 'next'
import { updatePage } from "../../../lib/notion";

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const { id, done } = req.body

        try {
            const page = await updatePage(id, done);

            return res.status(200).json(page);
        } catch {
            return res.status(500).json({
                error: '更新に失敗しました'
            })
        }
    } else {
        res.setHeader('Allow', ['POST'])
        return res.status(405).json({ error: `Method ${req.method} not allowed` })
    }
}