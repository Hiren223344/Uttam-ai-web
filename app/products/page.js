import Link from "next/link";
import { Star } from "lucide-react";

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto border-b border-gray-100">
        <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
          <Star className="w-5 h-5 fill-black" />
          <span>Uttam</span>
        </Link>
        <Link href="/" className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
          Explore Uttam
        </Link>
      </nav>
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-4">Coming soon</p>
        <h1 className="text-4xl font-medium text-gray-900 mb-4">Products launching soon.</h1>
        <p className="text-[15px] text-gray-500 max-w-sm mb-8">
          Evaluation tools, safety templates, and deployment guides — in progress.
        </p>
        <Link href="/" className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
          Back to home
        </Link>
      </div>
    </main>
  );
    }
