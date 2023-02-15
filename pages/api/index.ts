import type { NextApiRequest, NextApiResponse } from "next";

interface Res {
  message: string;
  success: boolean;
}

/**
 * Mock server for sending email
 */
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Res>
) {
  if (req.method === "POST") {
    const email = req.body.email;
    res
      .status(201)
      .json({ success: true, message: `Message sent to ${email}` });
  }
}
