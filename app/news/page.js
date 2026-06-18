import Link from "next/link";
import updates from "./data";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export default function NewsPage() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs font-medium uppercase tracking-widest text-gray-400 mb-3">
          Section 2 · News
        </p>
        <h1 className="text-4xl font-medium text-gray-900 mb-4">
          Latest from Uttam
        </h1>
        <p className="text-[15px] text-gray-500 leading-relaxed mb-12 max-w-md">
          Lab-owned updates, notes, and learning resources — not fabricated press releases or dated announcements.
        </p>

        <div className="border-t border-gray-100">
          {updates.map((item) => (
            <Link
              key={item.slug}
              href={`/news/${item.slug}`}
              className="group flex items-center gap-6 py-5 border-b border-gray-100 hover:pl-1.5 transition-all duration-150"
            >
              <span className="text-[11px] font-medium uppercase tracking-wider text-gray-400 w-36 shrink-0">
                {item.label}
              </span>
              <span className="flex-1 text-[15px] font-medium text-gray-900">
                {item.title}
              </span>
              <span className="text-xs text-gray-400 shrink-0">
                {formatDate(item.publishedAt)}
              </span>
              <span className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all duration-150">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
