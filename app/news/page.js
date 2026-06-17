import Link from "next/link";
import updates from "./data";

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold mb-6">News & Updates</h1>
        <p className="text-gray-600 mb-8">
          All lab-owned updates, notes, and learning resources — read the full posts below.
        </p>

        <div className="space-y-6">
          {updates.map((item) => (
            <article key={item.slug} className="p-6 border rounded-lg hover:shadow-md transition-shadow">
              <p className="text-xs font-semibold uppercase text-gray-500 mb-2">{item.label}</p>
              <h2 className="text-2xl font-medium mb-3">
                <Link href={`/news/${item.slug}`} className="text-gray-900 hover:underline">
                  {item.title}
                </Link>
              </h2>
              <p className="text-gray-700">{item.body}</p>
              <div className="mt-4">
                <Link href={`/news/${item.slug}`} className="text-sm font-medium text-blue-600 hover:underline">
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
