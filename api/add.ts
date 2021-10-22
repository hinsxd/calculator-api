import { VercelRequest, VercelResponse } from "@vercel/node";

const add = (req: VercelRequest, res: VercelResponse) => {
  const nums = (req.query.nums || "") as string;
  const sum = nums
    .split(",")
    .map((num) => parseInt(num, 10))
    .reduce((s, num) => s + num, 0);
  res.status(200).json({ sum });
};

export default add;
