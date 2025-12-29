import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="text-gray-600 mt-2 mb-6">Page not found</p>

        <Link href="/" className="px-5 py-2 bg-[#0E7A80] text-white rounded-md">
          Go Home
        </Link>
      </div>
    </div>
  );
}
