import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  _request: NextApiRequest,
  response: NextApiResponse
): void {
  return response
    .status(200)
    .json({ title: "Hello, <%= props.author %>!", message: "Have a nice coding!" });
}
