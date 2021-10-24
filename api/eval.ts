import { VercelRequest, VercelResponse } from "@vercel/node";
import { allowCors } from "../allowCors";
import evalMath from "math-expression-evaluator";
const evalulate = (req: VercelRequest, res: VercelResponse) => {
  const expr = (req.query.expr || "") as string;

  try {
    const result = evalMath.eval(expr);

    res.status(200).json({ result });
  } catch (e: any) {
    res.status(200).json({ error: e.message });
  }
};

export default allowCors(evalulate);
