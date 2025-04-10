import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1 className="text-2xl font-bold">Welcome!</h1>
      <nav className="mt-4 space-x-4">
        <Link href="/register">Sign Up</Link>
        <Link href="/login">Login</Link>
      </nav>
    </div>
  );
}
