import type { NextApiRequest, NextApiResponse } from "next";
import { users } from "../../../../lib/data";
import bcrypt from "bcryptjs";
import cookie from "cookie";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { username, password } = req.body as {
    username: string;
    password: string;
  };
  const user = users.find((u) => u.username === username);
  const valid = user && (await bcrypt.compare(password, user.passwordHash));
  if (!valid) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  // Set HTTP‑only cookie
  res.setHeader(
    "Set-Cookie",
    cookie.serialize("user", JSON.stringify({ id: user.id, username }), {
      httpOnly: true,
      maxAge: 60 * 60 * 24,
      path: "/",
    })
  );

  return res.status(200).json({ message: "Logged in successfully" });
}
