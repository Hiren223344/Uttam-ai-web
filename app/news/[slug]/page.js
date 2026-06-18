import { notFound } from "next/navigation";
import Link from "next/link";
import updates from "../data";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function generateStaticParams() {
  return updates.map((item) => ({ slug: item.slug }));
}

export default function ArticlePage({ params }) {
  const article = updates.find((u) => u.slug === params.slug);
  if (!article) return notFound();

  return (
    <main className="min-h-screen px-6 py-16 md:py-24">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/news"
          className="text-[11px] font-medium uppercase tracking-widest text-gray-400 hover:text-gray-600 transition-colors mb-10 inline-block"
        >
          ← News
        </Link>

        <p className="text-[11px] font-medium uppercase tracking-wider text-gray-400 mb-3">
          {article.label}
        </p>
        <h1 className="text-4xl font-medium text-gray-900 leading-snug mb-3">
          {article.title}
        </h1>
        <p className="text-sm text-gray-400 mb-10">
          {formatDate(article.publishedAt)}
        </p>

        <div className="h-px bg-gray-100 mb-10" />

        {article.imageSrc && (
          <img
            src={article.imageSrc}
            alt={article.title}
            className="w-full rounded-xl mb-10 object-cover"
          />
        )}

        <div className="space-y-5">
          {article.content?.map((p, i) => (
            <p key={i} className="text-[15px] text-gray-600 leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}
