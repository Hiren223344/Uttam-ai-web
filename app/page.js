"use client";

import { useEffect, useState } from "react";
import {
  BarChart3,
  BookOpen,
  Check,
  ChevronDown,
  Circle,
  Rocket,
  Star,
  Users,
} from "lucide-react";

const tabs = [
  { id: "analyse", label: "Analyse", icon: BarChart3 },
  { id: "train", label: "Train", icon: BookOpen },
  { id: "testing", label: "Testing", icon: Users },
  { id: "deploy", label: "Deploy", icon: Rocket },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("analyse");

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = tabs.findIndex((tab) => tab.id === current);
        return tabs[(currentIndex + 1) % tabs.length].id;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-white text-black">
      <Navigation />
      <section className="px-6 pt-24 pb-32 max-w-7xl mx-auto text-center">
        <div
          className="animate-fade-in-up inline-flex items-center gap-2 mb-8 opacity-0"
          style={{ animationDelay: "0.2s" }}
        >
          <span className="flex h-6 w-6 items-center justify-center rounded border border-gray-300">
            <Star className="h-3.5 w-3.5 fill-black" />
          </span>
          <span className="text-sm font-medium text-black">Research, safety, and responsible AI products</span>
        </div>

        <h1
          className="animate-fade-in-up opacity-0 text-6xl md:text-7xl lg:text-[80px] font-normal leading-[1.1] tracking-tight mb-5"
          style={{ animationDelay: "0.3s" }}
        >
          AI Lab for Safer Systems.
          <br />
          <span className="bg-gradient-to-r from-black via-gray-500 to-gray-400 bg-clip-text text-transparent">
            Research Powers Progress.
          </span>
        </h1>

        <p
          className="animate-fade-in-up opacity-0 text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
          style={{ animationDelay: "0.4s" }}
        >
          Uttam builds evaluation-driven tools, safety practices, and learning resources for teams working with advanced AI.
        </p>

        <button
          className="animate-fade-in-up opacity-0 bg-black text-white px-8 py-3 rounded-full text-base font-medium hover:bg-gray-800 transition-colors mb-12"
          style={{ animationDelay: "0.5s" }}
        >
          Explore Uttam
        </button>

        <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
        <VideoShowcase activeTab={activeTab} />
        <LabFocusStrip />
      </section>
      <NewsSection />
      <Footer />
    </main>
  );
}
function Navigation() {
  return (
    <nav
      className="animate-fade-in-up opacity-0 px-6 py-4 flex items-center justify-between max-w-7xl mx-auto"
      style={{ animationDelay: "0.1s" }}
      aria-label="Main navigation"
    >
      <a href="/" className="flex items-center gap-2 text-lg font-semibold" aria-label="Uttam home">
        <Star className="w-5 h-5 fill-black" />
        <span>Uttam</span>
      </a>

      <div className="hidden md:flex items-center gap-8">
        <a href="/research" className="flex items-center gap-1 text-sm text-gray-700 hover:text-black">
          Research <ChevronDown className="h-4 w-4" />
        </a>
        <a href="#" className="flex items-center gap-1 text-sm text-gray-700 hover:text-black">
          Safety <ChevronDown className="h-4 w-4" />
        </a>
        <a href="/products" className="text-sm text-gray-700 hover:text-black">Products</a>
        <a href="/news" className="text-sm text-gray-700 hover:text-black">Learn Hub</a>
      </div>

      <div className="flex items-center gap-5">
        <a href="#contact" className="hidden sm:inline text-sm text-gray-700 hover:text-black">Contact</a>
        <a href="#start" className="bg-black text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors">
          Explore Uttam
        </a>
      </div>
    </nav>
  );
        }

function TabBar({ activeTab, setActiveTab }) {
  return (
    <div
      className="animate-fade-in-up opacity-0 mx-auto mb-8 w-full max-w-xl bg-gray-100 rounded-lg p-1"
      style={{ animationDelay: "0.6s" }}
      role="tablist"
      aria-label="Workflow stages"
    >
      <div className="grid grid-cols-2 gap-1 md:hidden">
        {tabs.map((tab) => (
          <TabButton key={tab.id} tab={tab} isActive={activeTab === tab.id} onClick={() => setActiveTab(tab.id)} />
        ))}
      </div>

      <div className="hidden md:flex items-center justify-center">
        {tabs.map((tab, index) => (
          <div key={tab.id} className="flex items-center">
            <TabButton tab={tab} isActive={activeTab === tab.id} onClick={() => setActiveTab(tab.id)} />
            {index < tabs.length - 1 && <span className="w-px h-5 bg-gray-300" aria-hidden="true" />}
          </div>
        ))}
      </div>
    </div>
  );
}

function TabButton({ tab, isActive, onClick }) {
  const Icon = tab.icon;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      className={`flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition-all ${
        isActive ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"
      }`}
    >
      <Icon className="h-4 w-4" />
      {tab.label}
    </button>
  );
}

function VideoShowcase({ activeTab }) {
  return (
    <div
      className="animate-fade-in-up opacity-0 relative rounded-3xl overflow-hidden h-[400px] md:h-[500px]"
      style={{ animationDelay: "0.7s" }}
    >
      <video
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_165750_358b1e72-c921-48b7-aaac-f200994f32fb.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
      {activeTab === "analyse" && <AnalyseOverlay />}
      {activeTab === "train" && <TrainOverlay />}
      {activeTab === "testing" && <TestingOverlay />}
      {activeTab === "deploy" && <DeployOverlay />}
    </div>
  );
}

function OverlayShell({ children }) {
  return (
    <div className="animate-fade-in-overlay absolute inset-0 bg-black/25 opacity-0">
      <div className="animate-slide-up-overlay absolute left-1/2 top-1/2 w-[90%] max-w-md rounded-3xl bg-white p-6 text-left shadow-2xl opacity-0">
        {children}
      </div>
    </div>
  );
}

function AnalyseOverlay() {
  const steps = ["Connect data sources", "Map workflows", "Identify bottlenecks", "Generate AI plan"];

  return (
    <OverlayShell>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold">Set Up Your AI Lab Workspace</h2>
        <span className="text-sm font-medium text-purple-600">25%</span>
      </div>
      <div className="mb-5 h-2 overflow-hidden rounded-full bg-gray-100">
        <div className="h-full w-1/4 rounded-full bg-purple-500" />
      </div>
      <div className="space-y-3">
        {steps.map((step, index) => (
          <div key={step} className="flex items-center gap-3 rounded-xl border border-gray-100 p-3">
            {index === 0 ? <Check className="h-5 w-5 text-purple-600" /> : <Circle className="h-5 w-5 text-gray-300" />}
            <span className="text-sm font-medium text-gray-700">{step}</span>
          </div>
        ))}
      </div>
    </OverlayShell>
  );
}

function TrainOverlay() {
  const metrics = [
    ["Accuracy", "94%"],
    ["Data synced", "1.8M"],
    ["Signals learned", "46K"],
    ["Time saved", "31h"],
  ];

  return (
    <OverlayShell>
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-xl font-semibold">AI Safety Training</h2>
        <span className="text-sm font-medium text-orange-600">67%</span>
      </div>
      <div className="mb-5 h-2 overflow-hidden rounded-full bg-gray-100">
        <div className="h-full w-2/3 rounded-full bg-orange-500" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        {metrics.map(([label, value]) => (
          <div key={label} className="rounded-2xl bg-orange-50 p-4">
            <div className="text-2xl font-semibold text-orange-700">{value}</div>
            <div className="mt-1 text-xs font-medium uppercase tracking-wide text-orange-500">{label}</div>
          </div>
        ))}
      </div>
    </OverlayShell>
  );
}

function TestingOverlay() {
  return (
    <OverlayShell>
      <div className="mb-5 flex items-center gap-3">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <Check className="h-6 w-6 text-green-600" />
        </span>
        <div>
          <h2 className="text-xl font-semibold">Test Suite Results</h2>
          <p className="text-sm text-gray-500">All automation checks passed</p>
        </div>
      </div>
      <div className="rounded-2xl bg-green-50 p-5 text-center">
        <div className="text-5xl font-semibold text-green-700">127/127</div>
        <div className="mt-2 text-sm font-medium text-green-600">Tests successful</div>
      </div>
    </OverlayShell>
  );
}

function DeployOverlay() {
  const items = ["Production variables ready", "Security policy verified", "Rollback plan generated", "Team notifications queued"];

  return (
    <OverlayShell>
      <h2 className="mb-5 text-xl font-semibold">Deploy to Production</h2>
      <div className="mb-6 space-y-3">
        {items.map((item) => (
          <div key={item} className="flex items-center gap-3 text-sm font-medium text-gray-700">
            <Check className="h-5 w-5 text-blue-600" />
            {item}
          </div>
        ))}
      </div>
      <button className="w-full rounded-full bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800">
        Deploy Now
      </button>
    </OverlayShell>
  );
}

function LabFocusStrip() {
  const focusAreas = ["Alignment", "Evaluation", "Safety", "Deployment", "Policy", "Education"];

  return (
    <div
      className="animate-fade-in-up opacity-0 mt-24 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 text-sm font-semibold uppercase tracking-[0.22em] text-gray-400"
      style={{ animationDelay: "0.8s" }}
      aria-label="AI lab focus areas"
    >
      {focusAreas.map((area) => (
        <span key={area}>{area}</span>
      ))}
    </div>
  );
}

function NewsSection() {
  const updates = [
    {
      label: "Research note",
      title: "Evaluation-first model development",
      body: "How the lab reviews model behavior before broader release, with emphasis on reliability, safeguards, and measurable risk reduction.",
    },
    {
      label: "Safety practice",
      title: "Human review for high-impact workflows",
      body: "A practical overview of where human oversight remains required when AI systems assist planning, analysis, or operational decisions.",
    },
    {
      label: "Learning resource",
      title: "Build with responsible AI patterns",
      body: "Guidance for teams adopting AI tools while documenting assumptions, monitoring outputs, and preserving user control.",
    },
  ];

  return (
    <section id="news" className="border-t border-gray-100 bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-gray-500">Section 2 · News</p>
            <h2 className="text-4xl font-normal tracking-tight text-black md:text-5xl">Latest from Uttam</h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-gray-600 md:justify-self-end">
            These are lab-owned update categories and evergreen research topics, not fabricated press releases or dated announcements.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {updates.map((item) => (
            <article key={item.title} className="rounded-3xl border border-gray-200 bg-white p-6 text-left shadow-sm transition-shadow hover:shadow-md">
              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">{item.label}</p>
              <h3 className="mb-4 text-2xl font-medium leading-tight tracking-tight text-black">{item.title}</h3>
              <p className="leading-7 text-gray-600">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const columns = [
    {
      title: "Research",
      links: ["Alignment studies", "Model evaluations", "Safety cases", "Lab notes"],
    },
    {
      title: "Build",
      links: ["Developer docs", "Responsible patterns", "Evaluation templates", "Deployment guide"],
    },
    {
      title: "Lab",
      links: ["About the lab", "Commitments", "Governance", "Contact"],
    },
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

        <div className="flex justify-center mb-6">
          <a
            href="/news"
            className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Read all news
          </a>
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
