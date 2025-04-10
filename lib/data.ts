// lib/data.ts
export interface User {
  id: number;
  username: string;
  passwordHash: string;
}
export interface Snippet {
  id: number;
  owner: string;
  title: string;
  code: string;
  createdAt: string;
}

export const users: User[] = [];
export const snippets: Snippet[] = [];
