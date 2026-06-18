import Link from "next/link";
import { Star } from "lucide-react";
import updates from "./data";

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

 function Navigation() {
  return (
    <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto border-b border-gray-100">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
        <Star className="w-5 h-5 fill-black" />
        <span>Uttam</span>
      </Link>

      <div className="hidden md:flex items-center gap-8">
        <Link href="/research" className="flex items-center gap-1 text-sm text-gray-700 hover:text-black">
          Research <ChevronDown className="h-4 w-4" />
        </Link>
        <Link href="#" className="flex items-center gap-1 text-sm text-gray-700 hover:text-black">
          Safety <ChevronDown className="h-4 w-4" />
        </Link>
        <Link href="/products" className="text-sm text-gray-700 hover:text-black">Products</Link>
        <Link href="/news" className="text-sm font-medium text-black">Learn Hub</Link>
      </div>

      <div className="flex items-center gap-5">
        <Link href="#" className="hidden sm:inline text-sm text-gray-700 hover:text-black">Contact</Link>
        <Link href="/" className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
          Explore Uttam
        </Link>
      </div>
    </nav>
  );
    }
function Footer() {
  const columns = [
    { title: "Research", links: ["Alignment studies", "Model evaluations", "Safety cases", "Lab notes"] },
    { title: "Build", links: ["Developer docs", "Responsible patterns", "Evaluation templates", "Deployment guide"] },
    { title: "Lab", links: ["About the lab", "Commitments", "Governance", "Contact"] },
  ];

  return (
    <footer className="bg-white px-6 py-16 text-gray-900 border-t border-gray-100">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 grid gap-10 md:grid-cols-[1.2fr_1.8fr] md:items-start">
          <div>
            <div className="mb-4 flex items-center gap-2 text-xl font-semibold">
              <Star className="h-5 w-5 fill-black" />
              Uttam
            </div>
            <p className="max-w-md leading-7 text-gray-600">
              An AI lab focused on research, safe deployment, and practical learning resources.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {columns.map((column) => (
              <div key={column.title}>
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-gray-700">{column.title}</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition-colors hover:text-gray-900">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-gray-200 pt-6 text-sm text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Uttam. Research, safety, and responsible AI products.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="px-6 py-16 md:py-24">
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
                <span className="text-[10px] font-medium uppercase tracking-wider text-[#1e3a5f] bg-blue-50 px-2 py-1 rounded w-36 shrink-0 text-center">
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
      </div>
      <Footer />
    </main>
  );
}
