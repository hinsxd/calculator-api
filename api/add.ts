import { VercelRequest, VercelResponse } from "@vercel/node";

const add = (req: VercelRequest, res: VercelResponse) => {
  const nums = req.query.nums;
  res.status(200).send(nums);
};

export default add;
