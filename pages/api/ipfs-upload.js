import { uploadIpfs } from '../../lib/ipfs';

export default async function handler(req, res) {
    const data = req.body;

    const result = await uploadIpfs(data);

    res.status(200).json(result);
}
