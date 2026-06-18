import Link from "next/link";
import { ChevronDown, Brain, Search, Plug, Zap } from "lucide-react";

function Navigation() {
  return (
    <nav className="px-6 py-4 flex items-center justify-between max-w-7xl mx-auto border-b border-gray-100">
      <Link href="/" className="flex items-center gap-2 text-lg font-semibold">
        <img src="/image.png" alt="Uttam" className="w-6 h-6 object-contain" />
        <span>Uttam</span>
      </Link>
      <div className="hidden md:flex items-center gap-8">
        <Link href="/research" className="flex items-center gap-1 text-sm text-gray-700 hover:text-black">
          Research <ChevronDown className="h-4 w-4" />
        </Link>
        <Link href="#" className="flex items-center gap-1 text-sm text-gray-700 hover:text-black">
          Safety <ChevronDown className="h-4 w-4" />
        </Link>
        <Link href="/products" className="text-sm font-medium text-black">Products</Link>
        <Link href="/news" className="text-sm text-gray-700 hover:text-black">Learn Hub</Link>
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
              <img src="/image.png" alt="Uttam" className="w-6 h-6 object-contain" />
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

const features = [
  { icon: Brain, title: "Memories", badge: "BETA", sub: "Persistent context across sessions" },
  { icon: Search, title: "Inbuilt web search", badge: null, sub: "Search the web from your terminal" },
  { icon: Plug, title: "MCP native", badge: null, sub: "Connect databases and local tools" },
  { icon: Zap, title: "Frenix powered", badge: null, sub: "Works with your Frenix master key" },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-3xl">
          <p className="text-[11px] font-medium uppercase tracking-widest text-gray-400 mb-3">
            Uttam AI · Products
          </p>
          <h1 className="text-4xl font-medium text-gray-900 mb-4">What we've built</h1>
          <p className="text-[15px] text-gray-500 leading-relaxed mb-12 max-w-md">
            Tools and agents for developers working with advanced AI — production ready.
          </p>

          <div className="border border-gray-100 rounded-2xl p-8 mb-4">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h2 className="text-xl font-medium text-gray-900">Uttam Code</h2>
              <span className="text-[11px] font-medium text-blue-900 bg-blue-50 px-3 py-1 rounded-full shrink-0">
                v0.11.0
              </span>
            </div>
            <p className="text-[14px] text-gray-500 leading-relaxed mb-6">
              A CLI coding agent with persistent memory, inbuilt web search, and MCP-native tool support. Built for developers who want a full perception agent in their terminal.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-7">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="flex items-start gap-3 p-3 bg-gray-50 rounded-xl">
                    <Icon className="w-4 h-4 text-blue-900 mt-0.5 shrink-0" />
                    <div>
                      <p className="text-[13px] font-medium text-gray-900">
                        {f.title}
                        {f.badge && (
                          <span className="ml-1.5 text-[9px] font-semibold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded-full align-middle">
                            {f.badge}
                          </span>
                        )}
                      </p>
                      <p className="text-[12px] text-gray-500 mt-0.5">{f.sub}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-[#0f172a] rounded-xl px-5 py-4 mb-5">
              <p className="text-[10px] font-medium uppercase tracking-widest text-slate-500 mb-2">Install</p>
              <code className="text-[13px] text-slate-200">
                <span className="text-sky-400">npm</span> install -g uttam-code --force
              </code>
            </div>

            
              href="https://npmjs.com/package/uttam-code"
              className="inline-flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors"
            >
              npm package →
            </a>
          </div>

          <div className="border border-dashed border-gray-200 rounded-2xl px-8 py-7 flex items-center justify-between">
            <div>
              <h3 className="text-[17px] font-medium text-gray-900 mb-1">Cael-1-Flash</h3>
              <p className="text-[13px] text-gray-500">Uttam AI's first model — fast, opinionated, built for developers.</p>
            </div>
            <span className="text-[10px] font-medium text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full shrink-0">
              Coming soon
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
