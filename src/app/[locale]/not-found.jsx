import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h2 className="text-4xl font-bold mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8">Could not find requested resource</p>
      <Link href="/" className="px-4 py-2 bg-black text-white rounded-md hover:opacity-80 transition-opacity">
        Return Home
      </Link>
    </div>
  );
}