import { useEffect, useRef } from "react";

const Buzbiz = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const fadeObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((el) => {
          if (el.isIntersecting) {
            el.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    root.querySelectorAll(".fade-in").forEach((el) => fadeObserver.observe(el));

    const countUp = (el: Element) => {
      const target = parseInt(el.getAttribute("data-target") || "0");
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current = Math.min(current + step, target);
        (el as HTMLElement).textContent = Math.floor(current).toLocaleString();
        if (current >= target) clearInterval(timer);
      }, 16);
    };
    const countObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            countUp(e.target);
            countObs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.5 }
    );
    root.querySelectorAll(".count").forEach((el) => countObs.observe(el));

    const navEl = root.querySelector("nav") as HTMLElement | null;
    const onScroll = () => {
      if (!navEl) return;
      if (window.scrollY > 60) {
        navEl.style.boxShadow = "0 2px 20px rgba(0,0,0,0.06)";
      } else {
        navEl.style.boxShadow = "none";
      }
    };
    window.addEventListener("scroll", onScroll);

    const barObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll<HTMLElement>(".m-bar-fill").forEach((bar) => {
              const w = bar.style.width;
              bar.style.width = "0";
              setTimeout(() => {
                bar.style.width = w;
              }, 100);
            });
          }
        });
      },
      { threshold: 0.3 }
    );
    root.querySelectorAll(".ai-big-card").forEach((el) => barObserver.observe(el));

    return () => {
      fadeObserver.disconnect();
      countObs.disconnect();
      barObserver.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleCenterNode = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.toggle("center-node");
  };

  return (
    <div ref={rootRef} className="buzbiz-root">
      {/* NAV */}
      <nav>
        <a className="nav-logo" href="#">
          Buz<span>biz</span>
        </a>
        <ul className="nav-links">
          <li>
            <a href="#modules">Features</a>
          </li>
          <li>
            <a href="#how">How it works</a>
          </li>
          <li>
            <a href="#ai">AI</a>
          </li>
          <li>
            <a href="#usecases">Use Cases</a>
          </li>
          <li>
            <a href="#comparison">Compare</a>
          </li>
        </ul> 
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-grid container">
          <div className="hero-left fade-in">
            <div className="hero-badge">Now with AI-powered insights</div>
            <h1 className="hero-title">
              One Platform.
              <br />
              <span className="line2">Every Customer.</span>
              <br />
              Zero Chaos.
            </h1>
            <p className="hero-sub">
              Buzbiz unifies your inbox, CRM, campaigns, and analytics — so your team can focus on growing, not managing tools.
            </p>
            <div className="hero-actions">
              <a href="#cta" className="btn-primary">
                Start Free Trial →
              </a>
              <a href="#how" className="btn-ghost">
                See How It Works
              </a>
            </div>
            <div className="hero-stats">
              <div className="stat-item">
                <div className="num">
                  <span className="count" data-target="4200">
                    0
                  </span>
                  +
                </div>
                <div className="label">Businesses active</div>
              </div>
              <div className="stat-item">
                <div className="num">
                  <span className="count" data-target="98">
                    0
                  </span>
                  %
                </div>
                <div className="label">Retention rate</div>
              </div>
              <div className="stat-item">
                <div className="num">
                  <span className="count" data-target="3">
                    0
                  </span>
                  x
                </div>
                <div className="label">Faster response</div>
              </div>
            </div>
          </div>

          <div className="hero-visual fade-in" style={{ transitionDelay: "0.2s" }}>
            {/* Main Dashboard Card */}
            <div className="dash-card card-main">
              <div className="card-header">
                <div className="card-icon" style={{ background: "#f0fdf4" }}>
                  📊
                </div>
                <span className="card-title-sm">Dashboard Overview</span>
                <span style={{ marginLeft: "auto", fontSize: "11px", color: "var(--accent3)", fontWeight: 600 }}>● Live</span>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
                <div style={{ background: "var(--off)", borderRadius: "8px", padding: "10px" }}>
                  <div style={{ fontSize: "10px", color: "var(--muted)", marginBottom: "4px" }}>Today's Revenue</div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "20px", fontWeight: 800 }}>₹84,200</div>
                  <div style={{ fontSize: "10px", color: "var(--accent3)" }}>↑ 18% vs yesterday</div>
                </div>
                <div style={{ background: "var(--off)", borderRadius: "8px", padding: "10px" }}>
                  <div style={{ fontSize: "10px", color: "var(--muted)", marginBottom: "4px" }}>New Leads</div>
                  <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "20px", fontWeight: 800 }}>47</div>
                  <div style={{ fontSize: "10px", color: "var(--accent3)" }}>↑ 6 since 9am</div>
                </div>
              </div>
              <div style={{ marginTop: "14px" }}>
                <div style={{ fontSize: "11px", color: "var(--muted)", marginBottom: "6px" }}>Conversion Funnel</div>
                <div className="mini-bar green" style={{ width: "100%", height: "6px" }}></div>
                <div className="mini-bar green" style={{ width: "74%", height: "6px", opacity: 0.7 }}></div>
                <div className="mini-bar green" style={{ width: "48%", height: "6px", opacity: 0.5 }}></div>
                <div className="mini-bar green" style={{ width: "29%", height: "6px", opacity: 0.35 }}></div>
              </div>
            </div>

            {/* Inbox Card */}
            <div className="dash-card card-inbox">
              <div className="card-header" style={{ marginBottom: "10px" }}>
                <div className="card-icon" style={{ background: "#eff6ff", fontSize: "13px" }}>
                  💬
                </div>
                <span className="card-title-sm">Inbox</span>
                <span
                  style={{
                    marginLeft: "auto",
                    background: "#fef2f2",
                    color: "#ef4444",
                    padding: "2px 7px",
                    borderRadius: "100px",
                    fontSize: "10px",
                    fontWeight: 700,
                  }}
                >
                  3 new
                </span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <div className="chat-bubble in">Hi, is the offer still valid? 👋</div>
                <div className="chat-bubble out">Yes! Valid till Sunday 🎉</div>
                <div className="chat-bubble in">Great! I'll take it</div>
              </div>
              <div style={{ marginTop: "8px" }}>
                <span className="chat-tag">🏷 Hot Lead</span>
              </div>
            </div>

            {/* CRM Card */}
            <div className="dash-card card-crm">
              <div className="card-header" style={{ marginBottom: "10px" }}>
                <div className="card-icon" style={{ background: "#fdf4ff", fontSize: "13px" }}>
                  👤
                </div>
                <span className="card-title-sm">CRM Profile</span>
              </div>
              <div className="profile-row">
                <div className="avatar">RK</div>
                <div className="profile-info">
                  <div className="name">Ravi Kumar</div>
                  <div className="meta">Returning Customer</div>
                </div>
              </div>
              <div className="profile-stats">
                <div className="pstat">
                  <div className="val">5</div>
                  <div className="lbl">Visits</div>
                </div>
                <div className="pstat">
                  <div className="val">₹12k</div>
                  <div className="lbl">Spend</div>
                </div>
              </div>
            </div>

            {/* Campaign Card */}
            <div className="dash-card card-campaign">
              <div className="card-header" style={{ marginBottom: "10px" }}>
                <div className="card-icon" style={{ background: "#fff7ed", fontSize: "13px" }}>
                  📢
                </div>
                <span className="card-title-sm">Campaign</span>
              </div>
              <div className="sparkline">
                <div className="spark-bar" style={{ height: "40%" }}></div>
                <div className="spark-bar" style={{ height: "60%" }}></div>
                <div className="spark-bar" style={{ height: "45%" }}></div>
                <div className="spark-bar" style={{ height: "80%" }}></div>
                <div className="spark-bar" style={{ height: "65%" }}></div>
                <div className="spark-bar" style={{ height: "90%" }}></div>
                <div className="spark-bar" style={{ height: "100%" }}></div>
              </div>
              <div style={{ fontSize: "11px", color: "var(--muted)" }}>
                Open rate <strong style={{ color: "var(--black)" }}>34.2%</strong>
              </div>
            </div>

            {/* AI Insight Card */}
            <div className="dash-card card-ai">
              <div className="ai-alert">
                <div className="ai-dot" style={{ background: "#f59e0b" }}></div>
                <div className="ai-text">
                  <strong>AI Insight</strong>
                  23 high-value customers inactive for 7+ days. Recommend re-engagement campaign.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section id="trust">
        <div className="trust-grid container fade-in">
          <div className="trust-item">
            <div className="trust-icon">⚡</div>
            <h3>Unified System</h3>
            <p>All your channels, CRM, and analytics in one workspace. No more switching tabs or losing context.</p>
          </div>
          <div className="trust-item">
            <div className="trust-icon">🔁</div>
            <h3>Smart Automation</h3>
            <p>Trigger workflows based on customer behavior. Follow-ups, campaigns, and tags run themselves.</p>
          </div>
          <div className="trust-item">
            <div className="trust-icon">🧠</div>
            <h3>AI-Driven Decisions</h3>
            <p>Surface insights before they become problems. Buzbiz learns your business and alerts you to what matters.</p>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section id="problem">
        <div className="container">
          <div className="problem-grid">
            <div className="fade-in">
              <div className="section-label">The Problem</div>
              <h2 className="section-title">Your tools are fighting each other.</h2>
              <p className="section-sub">
                WhatsApp here. Leads in a spreadsheet. Instagram DMs ignored. Customer history? Scattered across 6 apps. You're not running a business — you're managing chaos.
              </p>
              <div style={{ marginTop: "32px" }}>
                <div className="chaos-arrow">↓ From this</div>
                <div className="chaos-grid">
                  <div className="chaos-tool">WhatsApp</div>
                  <div className="chaos-tool">Excel Sheet</div>
                  <div className="chaos-tool">Instagram</div>
                  <div className="chaos-tool">CRM?</div>
                  <div className="chaos-tool" style={{ background: "#fffbeb", color: "#d97706", borderColor: "#fcd34d" }}>
                    Email
                  </div>
                  <div className="chaos-tool">❌ Leads Lost</div>
                </div>
              </div>
            </div>
            <div className="fade-in" style={{ transitionDelay: "0.2s" }}>
              <div className="chaos-arrow">↓ To this</div>
              <div className="solution-preview">
                <div className="sol-header">
                  <span className="sol-logo">
                    Buz<span>biz</span>
                  </span>
                  <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginLeft: "auto" }}>All systems operational</span>
                </div>
                <div className="sol-row">
                  <div className="sol-dot"></div>
                  <span className="sol-label">Unified Inbox</span>
                  <span className="sol-status">Active</span>
                </div>
                <div className="sol-row">
                  <div className="sol-dot"></div>
                  <span className="sol-label">Customer CRM</span>
                  <span className="sol-status">Synced</span>
                </div>
                <div className="sol-row">
                  <div className="sol-dot"></div>
                  <span className="sol-label">Lead Pipeline</span>
                  <span className="sol-status">47 active</span>
                </div>
                <div className="sol-row">
                  <div className="sol-dot"></div>
                  <span className="sol-label">Campaigns</span>
                  <span className="sol-status">Running</span>
                </div>
                <div className="sol-row">
                  <div className="sol-dot"></div>
                  <span className="sol-label">Analytics</span>
                  <span className="sol-status">Live</span>
                </div>
                <div className="sol-row">
                  <div className="sol-dot" style={{ background: "#f59e0b" }}></div>
                  <span className="sol-label">AI Insights</span>
                  <span className="sol-status" style={{ background: "rgba(245,158,11,0.2)", color: "#f59e0b" }}>
                    2 alerts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION DIAGRAM */}
      <section id="solution">
        <div className="container fade-in">
          <div className="section-label">The System</div>
          <h2 className="section-title">Everything connected. Nothing missed.</h2>
          <p className="section-sub">Hover any node to see how it connects across your business.</p>
          <div className="diagram-wrap">
            <div className="nodes-grid">
              <div className="node-card" onClick={toggleCenterNode}>
                <div className="node-icon">💬</div>
                <div className="node-name">Inbox</div>
                <div className="node-desc">All channels unified</div>
              </div>
              <div className="node-card center-node">
                <div className="node-icon">🏠</div>
                <div className="node-name">Dashboard</div>
                <div className="node-desc">Your command center</div>
              </div>
              <div className="node-card" onClick={toggleCenterNode}>
                <div className="node-icon">📢</div>
                <div className="node-name">Campaigns</div>
                <div className="node-desc">Targeted messaging</div>
              </div>
              <div className="node-card" onClick={toggleCenterNode}>
                <div className="node-icon">👥</div>
                <div className="node-name">CRM</div>
                <div className="node-desc">Full customer history</div>
              </div>
              <div
                className="node-card"
                style={{ background: "var(--accent-light)", borderColor: "var(--accent3)" }}
                onClick={toggleCenterNode}
              >
                <div className="node-icon" style={{ background: "rgba(255,255,255,0.8)" }}>
                  🧠
                </div>
                <div className="node-name" style={{ color: "var(--accent)" }}>
                  AI Engine
                </div>
                <div className="node-desc" style={{ color: "var(--accent2)" }}>
                  Learns &amp; predicts
                </div>
              </div>
              <div className="node-card" onClick={toggleCenterNode}>
                <div className="node-icon">📊</div>
                <div className="node-name">Analytics</div>
                <div className="node-desc">Real-time data</div>
              </div>
              <div className="node-card" onClick={toggleCenterNode}>
                <div className="node-icon">🔗</div>
                <div className="node-name">Leads</div>
                <div className="node-desc">Auto-capture pipeline</div>
              </div>
              <div className="node-card" onClick={toggleCenterNode}>
                <div className="node-icon">🌐</div>
                <div className="node-name">Website</div>
                <div className="node-desc">QR &amp; landing pages</div>
              </div>
              <div className="node-card" onClick={toggleCenterNode}>
                <div className="node-icon">🤖</div>
                <div className="node-name">Automation</div>
                <div className="node-desc">Triggers &amp; workflows</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULES */}
      <section id="modules">
        <div className="container">
          <div className="section-label fade-in">Core Modules</div>
          <h2 className="section-title fade-in">Built for how businesses actually work.</h2>
          <div className="modules-grid">
            <div className="module-card fade-in">
              <div className="module-icon">💬</div>
              <div className="module-name">Unified Inbox</div>
              <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "10px" }}>
                WhatsApp, Instagram, SMS — one stream.
              </p>
              <div className="module-preview">
                <div className="bubble in">Hi, table for 2 tonight?</div>
                <div className="bubble">Yes! 8pm confirmed ✓</div>
                <div style={{ marginTop: "6px" }}>
                  <span className="chat-tag" style={{ fontSize: "10px" }}>
                    🏷 New Lead
                  </span>
                </div>
              </div>
            </div>
            <div className="module-card fade-in" style={{ transitionDelay: "0.1s" }}>
              <div className="module-icon">👤</div>
              <div className="module-name">Smart CRM</div>
              <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "10px" }}>Every customer, fully profiled.</p>
              <div className="module-preview">
                <div className="row">
                  <span className="key">Name</span>
                  <span className="val">Priya Sharma</span>
                </div>
                <div className="row">
                  <span className="key">Visits</span>
                  <span className="val">8</span>
                </div>
                <div className="row">
                  <span className="key">Spend</span>
                  <span className="val green">₹28,400</span>
                </div>
                <div className="row">
                  <span className="key">Status</span>
                  <span className="val green">VIP ⭐</span>
                </div>
              </div>
            </div>
            <div className="module-card fade-in" style={{ transitionDelay: "0.2s" }}>
              <div className="module-icon">🎯</div>
              <div className="module-name">Lead Pipeline</div>
              <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "10px" }}>Capture, qualify, and convert.</p>
              <div className="module-preview">
                <div className="row">
                  <span className="key">New</span>
                  <span className="val" style={{ color: "#3b82f6" }}>
                    14 leads
                  </span>
                </div>
                <div className="row">
                  <span className="key">Qualified</span>
                  <span className="val" style={{ color: "#f59e0b" }}>
                    8 leads
                  </span>
                </div>
                <div className="row">
                  <span className="key">Converted</span>
                  <span className="val green">5 today</span>
                </div>
                <div className="row">
                  <span className="key">Rate</span>
                  <span className="val green">35.7%</span>
                </div>
              </div>
            </div>
            <div className="module-card fade-in" style={{ transitionDelay: "0.3s" }}>
              <div className="module-icon">📢</div>
              <div className="module-name">Campaigns</div>
              <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "10px" }}>Targeted broadcasts that convert.</p>
              <div className="module-preview">
                <div className="row">
                  <span className="key">Sent</span>
                  <span className="val">1,240</span>
                </div>
                <div className="row">
                  <span className="key">Opened</span>
                  <span className="val green">424 (34%)</span>
                </div>
                <div className="row">
                  <span className="key">Revenue</span>
                  <span className="val green">₹62k</span>
                </div>
              </div>
            </div>
            <div className="module-card fade-in" style={{ transitionDelay: "0.1s" }}>
              <div className="module-icon">📊</div>
              <div className="module-name">Analytics</div>
              <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "10px" }}>See every number that matters.</p>
              <div className="module-preview">
                <div style={{ display: "flex", gap: "3px", alignItems: "flex-end", height: "32px" }}>
                  <div style={{ width: "10px", height: "50%", background: "var(--accent3)", borderRadius: "2px 2px 0 0", opacity: 0.6 }}></div>
                  <div style={{ width: "10px", height: "70%", background: "var(--accent3)", borderRadius: "2px 2px 0 0", opacity: 0.7 }}></div>
                  <div style={{ width: "10px", height: "40%", background: "var(--accent3)", borderRadius: "2px 2px 0 0", opacity: 0.5 }}></div>
                  <div style={{ width: "10px", height: "90%", background: "var(--accent3)", borderRadius: "2px 2px 0 0", opacity: 0.9 }}></div>
                  <div style={{ width: "10px", height: "65%", background: "var(--accent3)", borderRadius: "2px 2px 0 0", opacity: 0.75 }}></div>
                  <div style={{ width: "10px", height: "100%", background: "var(--accent3)", borderRadius: "2px 2px 0 0" }}></div>
                </div>
                <div className="row" style={{ marginTop: "8px" }}>
                  <span className="key">Revenue trend</span>
                  <span className="val green">↑ 24%</span>
                </div>
              </div>
            </div>
            <div className="module-card fade-in" style={{ transitionDelay: "0.2s" }}>
              <div className="module-icon">🤖</div>
              <div className="module-name">Automation</div>
              <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "10px" }}>Workflows that run while you sleep.</p>
              <div className="module-preview">
                <div style={{ fontSize: "11px", lineHeight: 1.8 }}>
                  <span style={{ color: "var(--accent3)" }}>IF</span> new lead →<br />
                  <span style={{ color: "var(--accent3)" }}>SEND</span> welcome msg<br />
                  <span style={{ color: "var(--accent3)" }}>WAIT</span> 24h → follow-up<br />
                  <span style={{ color: "var(--accent3)" }}>TAG</span> as qualified
                </div>
              </div>
            </div>
            <div className="module-card fade-in" style={{ transitionDelay: "0.3s" }}>
              <div className="module-icon">🌐</div>
              <div className="module-name">Website + QR</div>
              <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "10px" }}>Capture leads from everywhere.</p>
              <div className="module-preview">
                <div className="row">
                  <span className="key">Scan today</span>
                  <span className="val">84</span>
                </div>
                <div className="row">
                  <span className="key">Leads captured</span>
                  <span className="val green">31</span>
                </div>
                <div className="row">
                  <span className="key">Top source</span>
                  <span className="val">QR Menu</span>
                </div>
              </div>
            </div>
            <div className="module-card fade-in" style={{ transitionDelay: "0.4s" }}>
              <div className="module-icon">🧠</div>
              <div className="module-name">AI Insights</div>
              <p style={{ fontSize: "13px", color: "var(--muted)", marginBottom: "10px" }}>Your business, always one step ahead.</p>
              <div className="module-preview">
                <div style={{ color: "#f59e0b", fontSize: "11px", marginBottom: "4px" }}>⚠ Revenue down 12%</div>
                <div style={{ color: "var(--accent3)", fontSize: "11px", marginBottom: "4px" }}>✓ 5 VIP customers re-engaged</div>
                <div style={{ color: "#3b82f6", fontSize: "11px" }}>→ Suggest: Weekend offer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how">
        <div className="container fade-in">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">From first contact to loyal customer.</h2>
          <p className="section-sub">Every step of the customer journey, handled automatically.</p>
          <div className="flow-wrap">
            <div className="flow-track">
              <div className="flow-step">
                <div className="flow-node">👋</div>
                <div className="flow-dot"></div>
                <div className="flow-label">Customer</div>
                <div className="flow-sub">Reaches out or scans QR</div>
              </div>
              <div className="flow-step">
                <div className="flow-node">🎯</div>
                <div className="flow-dot"></div>
                <div className="flow-label">Captured</div>
                <div className="flow-sub">Auto-added to CRM</div>
              </div>
              <div className="flow-step">
                <div className="flow-node">💬</div>
                <div className="flow-dot"></div>
                <div className="flow-label">Engaged</div>
                <div className="flow-sub">Inbox + auto-reply</div>
              </div>
              <div className="flow-step">
                <div className="flow-node">📢</div>
                <div className="flow-dot"></div>
                <div className="flow-label">Nurtured</div>
                <div className="flow-sub">Campaigns triggered</div>
              </div>
              <div className="flow-step">
                <div className="flow-node">📊</div>
                <div className="flow-dot"></div>
                <div className="flow-label">Tracked</div>
                <div className="flow-sub">Analytics updated</div>
              </div>
              <div className="flow-step">
                <div className="flow-node">🧠</div>
                <div className="flow-dot"></div>
                <div className="flow-label">Optimized</div>
                <div className="flow-sub">AI recommends next step</div>
              </div>
              <div className="flow-step">
                <div className="flow-node">⭐</div>
                <div className="flow-label">Loyal</div>
                <div className="flow-sub">Repeat customer</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI SECTION */}
      <section id="ai">
        <div className="container">
          <div className="ai-grid">
            <div className="fade-in">
              <div className="section-label">AI Intelligence</div>
              <h2 className="section-title">Your business runs smarter while you focus on what matters.</h2>
              <p className="section-sub">
                Buzbiz AI monitors every signal — sales, engagement, behavior — and tells you exactly what to do next.
              </p>
              <div className="ai-insights">
                <div className="insight-card">
                  <div className="insight-severity sev-danger"></div>
                  <div className="insight-text">
                    <strong>Revenue alert</strong>Wednesday revenue dropped{" "}
                    <span style={{ color: "#ef4444", fontWeight: 600 }}>12%</span> vs last week. Dinner slot underperforming.
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-severity sev-warn"></div>
                  <div className="insight-text">
                    <strong>Re-engagement needed</strong>
                    <span style={{ color: "#f59e0b", fontWeight: 600 }}>23 high-value customers</span> haven't visited in 7+ days. Send a campaign now.
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-severity sev-ok"></div>
                  <div className="insight-text">
                    <strong>Campaign opportunity</strong>Weekend lunch slot has{" "}
                    <span style={{ color: "var(--accent3)", fontWeight: 600 }}>40% capacity</span>. Target nearby leads with a flash offer.
                  </div>
                </div>
                <div className="insight-card">
                  <div className="insight-severity sev-ok"></div>
                  <div className="insight-text">
                    <strong>VIP trend detected</strong>Your top 12 customers average{" "}
                    <span style={{ color: "var(--accent3)", fontWeight: 600 }}>₹4,200 per visit</span>. Loyalty program could increase this by 30%.
                  </div>
                </div>
              </div>
            </div>
            <div className="ai-visual fade-in" style={{ transitionDelay: "0.2s" }}>
              <div className="ai-big-card">
                <div className="ai-big-label">AI Performance Metrics — Live</div>
                <div className="ai-metric">
                  <div className="m-label">Prediction accuracy</div>
                  <div className="m-bar-track">
                    <div className="m-bar-fill" style={{ width: "94%" }}></div>
                  </div>
                  <div className="m-val">94%</div>
                </div>
                <div className="ai-metric">
                  <div className="m-label">Campaign ROI improvement</div>
                  <div className="m-bar-track">
                    <div className="m-bar-fill" style={{ width: "78%" }}></div>
                  </div>
                  <div className="m-val">78%</div>
                </div>
                <div className="ai-metric">
                  <div className="m-label">Churn prevented this month</div>
                  <div className="m-bar-track">
                    <div className="m-bar-fill" style={{ width: "61%" }}></div>
                  </div>
                  <div className="m-val">61 customers</div>
                </div>
                <div style={{ marginTop: "24px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
                  <div style={{ background: "rgba(82,183,136,0.1)", borderRadius: "10px", padding: "16px" }}>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "6px" }}>Insights generated</div>
                    <div
                      style={{ fontFamily: "'Syne',sans-serif", fontSize: "28px", fontWeight: 800, color: "var(--accent3)" }}
                      className="count-up"
                    >
                      1,247
                    </div>
                  </div>
                  <div style={{ background: "rgba(255,255,255,0.05)", borderRadius: "10px", padding: "16px" }}>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)", marginBottom: "6px" }}>Avg. response time</div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "28px", fontWeight: 800, color: "#fff" }}>1.2s</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANALYTICS */}
      <section id="analytics">
        <div className="container">
          <div className="analytics-grid">
            <div className="fade-in">
              <div className="section-label">Analytics</div>
              <h2 className="section-title">Every number that moves your business.</h2>
              <p className="section-sub">Real-time dashboards that surface what matters, when it matters.</p>
              <div style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "var(--accent-light)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                    }}
                  >
                    📈
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "13px", fontWeight: 700 }}>Revenue by channel</div>
                    <div style={{ fontSize: "12px", color: "var(--muted)" }}>Break down exactly where money comes from</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "var(--accent-light)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                    }}
                  >
                    🔄
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "13px", fontWeight: 700 }}>Repeat customer rate</div>
                    <div style={{ fontSize: "12px", color: "var(--muted)" }}>Track loyalty and lifetime value</div>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "12px", alignItems: "center", padding: "12px 0" }}>
                  <div
                    style={{
                      width: "36px",
                      height: "36px",
                      background: "var(--accent-light)",
                      borderRadius: "8px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "16px",
                    }}
                  >
                    ⚡
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Syne',sans-serif", fontSize: "13px", fontWeight: 700 }}>Response &amp; conversion time</div>
                    <div style={{ fontSize: "12px", color: "var(--muted)" }}>Speed of your team, measured</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="fade-in" style={{ transitionDelay: "0.15s" }}>
              <div className="stat-cards">
                <div className="stat-card">
                  <div className="s-label">Monthly Revenue</div>
                  <div className="s-value">₹8.4L</div>
                  <div className="s-change">↑ 24% MoM</div>
                </div>
                <div className="stat-card">
                  <div className="s-label">Conversion Rate</div>
                  <div className="s-value">35.7%</div>
                  <div className="s-change">↑ 8% vs last month</div>
                </div>
                <div className="stat-card">
                  <div className="s-label">Repeat Customers</div>
                  <div className="s-value">68%</div>
                  <div className="s-change">↑ 12% this quarter</div>
                </div>
                <div className="stat-card">
                  <div className="s-label">Avg Response</div>
                  <div className="s-value">1.8m</div>
                  <div className="s-change">↓ 40% faster</div>
                </div>
              </div>
              <div className="chart-card">
                <div className="chart-title">Weekly Revenue (₹ thousands)</div>
                <div className="bar-chart">
                  <div className="bar-col">
                    <div className="bar-fill" style={{ height: "45px" }}></div>
                    <div className="bar-label">Mon</div>
                  </div>
                  <div className="bar-col">
                    <div className="bar-fill" style={{ height: "60px" }}></div>
                    <div className="bar-label">Tue</div>
                  </div>
                  <div className="bar-col">
                    <div className="bar-fill" style={{ height: "50px" }}></div>
                    <div className="bar-label">Wed</div>
                  </div>
                  <div className="bar-col">
                    <div className="bar-fill" style={{ height: "80px" }}></div>
                    <div className="bar-label">Thu</div>
                  </div>
                  <div className="bar-col">
                    <div className="bar-fill" style={{ height: "90px" }}></div>
                    <div className="bar-label">Fri</div>
                  </div>
                  <div className="bar-col">
                    <div className="bar-fill" style={{ height: "100px" }}></div>
                    <div className="bar-label">Sat</div>
                  </div>
                  <div className="bar-col">
                    <div className="bar-fill" style={{ height: "70px" }}></div>
                    <div className="bar-label">Sun</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section id="comparison">
        <div className="container fade-in">
          <div className="section-label">Why Buzbiz</div>
          <h2 className="section-title">Everything they lack. Nothing you don't need.</h2>
          <table className="compare-table">
            <thead>
              <tr>
                <th>Feature</th>
                <th className="buzbiz">Buzbiz</th>
                <th>Generic CRM</th>
                <th>WhatsApp Tools</th>
                <th>Spreadsheets</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Unified Inbox</td>
                <td className="buzbiz">
                  <span className="check">✔</span>
                </td>
                <td>
                  <span className="cross">✘</span>
                </td>
                <td>
                  <span className="check">✔</span>
                </td>
                <td>
                  <span className="cross">✘</span>
                </td>
              </tr>
              <tr>
                <td>Full CRM</td>
                <td className="buzbiz">
                  <span className="check">✔</span>
                </td>
                <td>
                  <span className="check">✔</span>
                </td>
                <td>
                  <span className="cross">✘</span>
                </td>
                <td>
                  <span className="cross">✘</span>
                </td>
              </tr>
              <tr>
                <td>Lead Pipeline</td>
                <td className="buzbiz">
                  <span className="check">✔</span>
                </td>
                <td>Partial</td>
                <td>
                  <span className="cross">✘</span>
                </td>
                <td>Manual</td>
              </tr>
              <tr>
                <td>Campaign Engine</td>
                <td className="buzbiz">
                  <span className="check">✔</span>
                </td>
                <td>
                  <span className="cross">✘</span>
                </td>
                <td>Basic</td>
                <td>
                  <span className="cross">✘</span>
                </td>
              </tr>
              <tr>
                <td>AI Insights</td>
                <td className="buzbiz">
                  <span className="check">✔</span>
                </td>
                <td>
                  <span className="cross">✘</span>
                </td>
                <td>
                  <span className="cross">✘</span>
                </td>
                <td>
                  <span className="cross">✘</span>
                </td>
              </tr>
              <tr>
                <td>Real-time Analytics</td>
                <td className="buzbiz">
                  <span className="check">✔</span>
                </td>
                <td>Limited</td>
                <td>
                  <span className="cross">✘</span>
                </td>
                <td>
                  <span className="cross">✘</span>
                </td>
              </tr>
              <tr>
                <td>Automation Workflows</td>
                <td className="buzbiz">
                  <span className="check">✔</span>
                </td>
                <td>
                  <span className="cross">✘</span>
                </td>
                <td>
                  <span className="cross">✘</span>
                </td>
                <td>
                  <span className="cross">✘</span>
                </td>
              </tr>
              <tr>
                <td>QR + Website Leads</td>
                <td className="buzbiz">
                  <span className="check">✔</span>
                </td>
                <td>
                  <span className="cross">✘</span>
                </td>
                <td>
                  <span className="cross">✘</span>
                </td>
                <td>
                  <span className="cross">✘</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* USE CASES */}
      <section id="usecases">
        <div className="container">
          <div className="section-label fade-in">Use Cases</div>
          <h2 className="section-title fade-in">Built for your kind of business.</h2>
          <div className="usecase-grid">
            <div className="usecase-card fade-in">
              <div className="uc-icon">🍽</div>
              <div className="uc-title">Restaurants</div>
              <div className="uc-desc">Manage tables, orders, and repeat diners. Run promos that fill seats on slow nights.</div>
            </div>
            <div className="usecase-card fade-in" style={{ transitionDelay: "0.1s" }}>
              <div className="uc-icon">🏥</div>
              <div className="uc-title">Clinics</div>
              <div className="uc-desc">Track patients, appointments, and follow-ups. Send reminders automatically.</div>
            </div>
            <div className="usecase-card fade-in" style={{ transitionDelay: "0.2s" }}>
              <div className="uc-icon">🛍</div>
              <div className="uc-title">Retail Stores</div>
              <div className="uc-desc">Convert foot traffic to loyal customers. Run campaigns based on purchase history.</div>
            </div>
            <div className="usecase-card fade-in" style={{ transitionDelay: "0.3s" }}>
              <div className="uc-icon">💆</div>
              <div className="uc-title">Salons &amp; Spas</div>
              <div className="uc-desc">Bookings, follow-ups, and loyalty — all in one. Never lose a client to silence again.</div>
            </div>
            <div className="usecase-card fade-in">
              <div className="uc-icon">🏋</div>
              <div className="uc-title">Fitness Studios</div>
              <div className="uc-desc">Track members, attendance, and renewals. Send re-engagement before they lapse.</div>
            </div>
            <div className="usecase-card fade-in" style={{ transitionDelay: "0.1s" }}>
              <div className="uc-icon">🏘</div>
              <div className="uc-title">Real Estate</div>
              <div className="uc-desc">Manage property leads and follow-up automatically. Close more deals, faster.</div>
            </div>
            <div className="usecase-card fade-in" style={{ transitionDelay: "0.2s" }}>
              <div className="uc-icon">🎓</div>
              <div className="uc-title">EdTech &amp; Coaching</div>
              <div className="uc-desc">Enrol students, track progress, and run batch campaigns without extra staff.</div>
            </div>
            <div className="usecase-card fade-in" style={{ transitionDelay: "0.3s" }}>
              <div className="uc-icon">🚗</div>
              <div className="uc-title">Auto Services</div>
              <div className="uc-desc">Service reminders, follow-ups, and loyalty for repeat vehicle owners.</div>
            </div>
          </div>
        </div>
      </section>
 
      {/* <section id="cta">
        <div className="cta-card fade-in">
          <h2 className="section-title" style={{ fontSize: "42px", letterSpacing: "-1.5px" }}>
            Stop Managing Tools.
            <br />
            Start Running Your Business.
          </h2>
          <p className="section-sub">
            Join 4,200+ businesses that replaced their scattered tools with one system that actually works.
          </p>
          <div className="cta-actions">
            <a href="#" className="btn-cta">
              Start Free Trial →
            </a>
            <a href="#" className="btn-ghost-white">
              Schedule a Demo
            </a>
          </div>
          <p style={{ marginTop: "24px", fontSize: "13px", color: "rgba(255,255,255,0.3)" }}>
            No credit card required. 14-day free trial. Cancel anytime.
          </p>
        </div>
      </section> */}

      {/* FOOTER */}
      <footer>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
          <span style={{ fontFamily: "'Syne',sans-serif", fontWeight: 800, color: "rgba(255,255,255,0.7)" }}>
            Buz<span style={{ color: "var(--accent3)" }}>biz</span>
          </span>
          <span>
            © 2025 Buzbiz · <a href="/buzbiz/privacy-policy">Privacy</a> · <a href="/buzbiz/terms">Terms</a> · <a href="#">Contact</a>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Buzbiz;
