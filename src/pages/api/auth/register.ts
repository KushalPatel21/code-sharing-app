import type { NextApiRequest, NextApiResponse } from "next";
import { users } from "../../../../lib/data";
import bcrypt from "bcryptjs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") return res.status(405).end();

  const { username, password } = req.body as {
    username: string;
    password: string;
  };
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password required" });
  }

  if (users.find((u) => u.username === username)) {
    return res.status(400).json({ error: "User already exists" });
  }

  // Hash password and store user
  const passwordHash = await bcrypt.hash(password, 10);
  users.push({ id: Date.now(), username, passwordHash });
  return res.status(201).json({ message: "Registered successfully" });
}
