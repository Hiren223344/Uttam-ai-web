"use client";

import { useState, useEffect } from "react";
import { FlaskConical, Wrench, Microscope, ArrowUpRight, Star } from "lucide-react";

const team = [
  {
    name: "Hiren Ahlawat",
    role: "Founder & CEO, Uttam — Owner, Frenix",
    bio: "Hiren Ahlawat is the owner of Frenix and the founder and CEO of Uttam, Frenix's dedicated AI research subsidiary. He built Uttam to bring rigorous safety practices, evaluation frameworks, and lab notes that help teams ship safer AI.",
    initials: "HA",
  },
];

const pillars = [
  {
    Icon: FlaskConical,
    title: "Research",
    desc: "We publish alignment studies, model evaluations, safety cases, and lab notes — open work that advances the broader AI safety ecosystem.",
  },
  {
    Icon: Wrench,
    title: "Build",
    desc: "Developer docs, responsible deployment patterns, evaluation templates, and step-by-step deployment guides for teams shipping AI responsibly.",
  },
  {
    Icon: Microscope,
    title: "Lab",
    desc: "A living workspace for testing ideas. Our test suite runs 127/127 automated checks — every deployment is verified before it ships.",
  },
];

const stats = [
  { value: "127/127", label: "Tests passing" },
  { value: "4", label: "Core focus areas" },
  { value: "2024", label: "Founded" },
  { value: "India", label: "Headquartered" },
];

export default function AboutPage() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <div style={styles.root}>
      {/* Hero */}
      <section
        style={{
          ...styles.hero,
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(18px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <div style={styles.eyebrow}>
          <Star size={11} strokeWidth={2.5} />
          Research, safety, and responsible AI products
        </div>
        <h1 style={styles.heroHeading}>
          AI Lab for
          <br />
          <span style={styles.heroFade}>Safer Systems.</span>
        </h1>
        <p style={styles.heroSub}>
          Uttam builds evaluation-driven tools, safety practices, and learning
          resources for teams working with advanced AI.
        </p>
        <div style={styles.heroBadge}>
          A subsidiary of{" "}
          <a
            href="https://frenix.sh"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.frenixLink}
          >
            Frenix
          </a>
        </div>
      </section>

      {/* Stats bar */}
      <section style={styles.statsBar}>
        {stats.map((s) => (
          <div key={s.label} style={styles.statItem}>
            <span style={styles.statValue}>{s.value}</span>
            <span style={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </section>

      {/* Mission */}
      <section style={styles.section}>
        <p style={styles.sectionEyebrow}>MISSION</p>
        <h2 style={styles.sectionHeading}>Why Uttam exists</h2>
        <p style={styles.bodyText}>
          Most AI tooling optimises for speed. Uttam optimises for trust. We believe
          the teams deploying large language models today need rigorous evaluation
          frameworks, practical safety guidance, and open research — not just APIs.
        </p>
        <p style={styles.bodyText}>
          Named after the Sanskrit word for <em>"excellent"</em> or{" "}
          <em>"best,"</em> Uttam sets a quality bar for how AI systems should be
          built, tested, and shipped.
        </p>
      </section>

      {/* Pillars */}
      <section style={styles.section}>
        <p style={styles.sectionEyebrow}>WHAT WE DO</p>
        <h2 style={styles.sectionHeading}>Three pillars</h2>
        <div style={styles.pillarsGrid}>
          {pillars.map(({ Icon, title, desc }) => (
            <div key={title} style={styles.pillarCard}>
              <div style={styles.pillarIcon}>
                <Icon size={22} strokeWidth={1.8} color="#0f0f0f" />
              </div>
              <h3 style={styles.pillarTitle}>{title}</h3>
              <p style={styles.pillarDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section style={styles.section}>
        <p style={styles.sectionEyebrow}>LEADERSHIP</p>
        <h2 style={styles.sectionHeading}>Founded by</h2>
        {team.map((m) => (
          <div key={m.name} style={styles.teamCard}>
            <div style={styles.avatar}>{m.initials}</div>
            <div>
              <div style={styles.memberName}>{m.name}</div>
              <div style={styles.memberRole}>{m.role}</div>
              <p style={styles.memberBio}>{m.bio}</p>
            </div>
          </div>
        ))}
      </section>

      {/* Parent company */}
      <section style={{ ...styles.section, ...styles.frenixSection }}>
        <p style={{ ...styles.sectionEyebrow, color: "rgba(255,255,255,0.4)" }}>
          PARENT COMPANY
        </p>
        <h2 style={{ ...styles.sectionHeading, color: "#fff" }}>Part of Frenix</h2>
        <p style={{ ...styles.bodyText, color: "rgba(255,255,255,0.72)" }}>
          Uttam operates as a dedicated AI research subsidiary of{" "}
          <a
            href="https://frenix.sh"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.frenixLinkLight}
          >
            Frenix
          </a>
          , owned and founded by Hiren Ahlawat. Frenix provides the infrastructure,
          operational backbone, and broader product ecosystem that lets Uttam focus
          entirely on AI safety research and tooling.
        </p>
        <a
          href="https://frenix.sh"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.frenixBtn}
        >
          Visit frenix.sh
          <ArrowUpRight size={14} style={{ marginLeft: 6 }} />
        </a>
      </section>

      {/* Focus areas */}
      <section style={styles.section}>
        <p style={styles.sectionEyebrow}>FOCUS AREAS</p>
        <div style={styles.tagsRow}>
          {["Alignment", "Evaluation", "Safety", "Deployment"].map((t) => (
            <span key={t} style={styles.tag}>
              {t}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

const styles = {
  root: {
    fontFamily: "'Inter', -apple-system, sans-serif",
    background: "#fff",
    color: "#0f0f0f",
    maxWidth: 720,
    margin: "0 auto",
    padding: "0 24px 80px",
  },
  hero: {
    paddingTop: 64,
    paddingBottom: 48,
    borderBottom: "1px solid #e8e8e8",
  },
  eyebrow: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: "0.04em",
    color: "#666",
    marginBottom: 28,
    textTransform: "uppercase",
  },
  heroHeading: {
    fontSize: "clamp(40px, 8vw, 72px)",
    fontWeight: 700,
    lineHeight: 1.08,
    letterSpacing: "-0.03em",
    margin: "0 0 20px",
  },
  heroFade: { color: "#aaa" },
  heroSub: {
    fontSize: 18,
    lineHeight: 1.6,
    color: "#444",
    maxWidth: 520,
    margin: "0 0 28px",
  },
  heroBadge: {
    display: "inline-block",
    fontSize: 13,
    color: "#888",
    border: "1px solid #e0e0e0",
    borderRadius: 20,
    padding: "6px 16px",
  },
  frenixLink: { color: "#0f0f0f", fontWeight: 600, textDecoration: "none" },
  statsBar: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 1,
    background: "#e8e8e8",
    margin: "0 -24px",
    padding: "0 24px",
    borderBottom: "1px solid #e8e8e8",
  },
  statItem: {
    display: "flex",
    flexDirection: "column",
    padding: "24px 0",
    background: "#fff",
  },
  statValue: {
    fontSize: 22,
    fontWeight: 700,
    letterSpacing: "-0.02em",
    color: "#0f0f0f",
  },
  statLabel: { fontSize: 12, color: "#888", marginTop: 4 },
  section: {
    paddingTop: 56,
    paddingBottom: 8,
    borderBottom: "1px solid #f0f0f0",
  },
  sectionEyebrow: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: "0.1em",
    color: "#bbb",
    margin: "0 0 12px",
  },
  sectionHeading: {
    fontSize: 28,
    fontWeight: 700,
    letterSpacing: "-0.02em",
    margin: "0 0 20px",
  },
  bodyText: {
    fontSize: 16,
    lineHeight: 1.7,
    color: "#444",
    margin: "0 0 16px",
  },
  pillarsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 16,
    marginTop: 8,
  },
  pillarCard: {
    background: "#f7f7f7",
    borderRadius: 12,
    padding: "24px 20px",
  },
  pillarIcon: { marginBottom: 14 },
  pillarTitle: {
    fontSize: 16,
    fontWeight: 700,
    margin: "0 0 8px",
    letterSpacing: "-0.01em",
  },
  pillarDesc: { fontSize: 14, lineHeight: 1.6, color: "#555", margin: 0 },
  teamCard: {
    display: "flex",
    gap: 20,
    alignItems: "flex-start",
    padding: "24px",
    border: "1px solid #ebebeb",
    borderRadius: 12,
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: "50%",
    background: "#0f0f0f",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 16,
    fontWeight: 700,
    flexShrink: 0,
  },
  memberName: { fontSize: 17, fontWeight: 700, marginBottom: 2 },
  memberRole: { fontSize: 13, color: "#888", marginBottom: 10 },
  memberBio: { fontSize: 14, lineHeight: 1.6, color: "#555", margin: 0 },
  frenixSection: {
    background: "#0f0f0f",
    borderRadius: 16,
    padding: "40px 32px",
    margin: "48px -24px 0",
    border: "none",
  },
  frenixLinkLight: { color: "#fff", fontWeight: 600, textDecoration: "underline" },
  frenixBtn: {
    display: "inline-flex",
    alignItems: "center",
    marginTop: 20,
    padding: "10px 22px",
    background: "#fff",
    color: "#0f0f0f",
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 600,
    textDecoration: "none",
  },
  tagsRow: { display: "flex", gap: 10, flexWrap: "wrap", paddingBottom: 40 },
  tag: {
    fontSize: 13,
    fontWeight: 500,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    padding: "8px 18px",
    border: "1px solid #ddd",
    borderRadius: 20,
    color: "#555",
  },
};
