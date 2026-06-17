import { notFound } from "next/navigation";
import updates from "../data";

export default function ArticlePage({ params }) {
  const article = updates.find((u) => u.slug === params.slug);
  if (!article) return notFound();

  return (
    <main className="min-h-screen bg-white text-gray-900 px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase text-gray-500 mb-2">{article.label}</p>
        <h1 className="text-3xl font-semibold mb-4">{article.title}</h1>

        {article.imageSrc && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={article.imageSrc} alt={article.title} className="w-full rounded-lg mb-6 object-cover" />
        )}

        <div className="prose max-w-none text-gray-700">
          {article.content?.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-8">
          <a href="/news" className="text-sm text-blue-600 hover:underline">← Back to News</a>
        </div>
      </div>
    </main>
  );
}
