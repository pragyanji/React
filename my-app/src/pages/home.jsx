import {Link} from 'react-router-dom'

function Home() {
  const features = [
    {
      icon: "⚡",
      title: "Lightning Fast",
      desc: "Built with React and Vite for blazing-fast performance and instant hot reloads.",
    },
    {
      icon: "🎨",
      title: "Modern Design",
      desc: "Clean, responsive layouts that look great on every device and screen size.",
    },
    {
      icon: "🔧",
      title: "Easy to Customize",
      desc: "Modular component architecture makes it simple to extend and modify.",
    },
    {
      icon: "🚀",
      title: "Ready to Deploy",
      desc: "Production-optimized builds that are ready to ship from day one.",
    },
  ];

  const stats = [
    { value: "99%", label: "Uptime" },
    { value: "2x", label: "Faster" },
    { value: "50+", label: "Components" },
    { value: "24/7", label: "Support" },
  ];

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        color: "#e0e0e0",
        background: "#0f0f1a",
      }}
    >
      {/* Hero Section */}
      <section
        style={{
          minHeight: "70vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "4rem 2rem",
          background:
            "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "0.4rem 1rem",
            borderRadius: "999px",
            fontSize: "0.85rem",
            fontWeight: 600,
            background: "rgba(99, 102, 241, 0.15)",
            color: "#818cf8",
            marginBottom: "1.5rem",
            border: "1px solid rgba(99, 102, 241, 0.3)",
          }}
        >
          🚀 Welcome to MyApp
        </span>
        <h1
          style={{
            fontSize: "3.5rem",
            fontWeight: 800,
            margin: "0 0 1rem",
            lineHeight: 1.15,
            background: "linear-gradient(to right, #818cf8, #c084fc, #f472b6)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Build Something Amazing
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#94a3b8",
            maxWidth: "600px",
            lineHeight: 1.7,
            margin: "0 0 2.5rem",
          }}
        >
          A modern React application powered by Vite. Fast, flexible, and
          designed for developers who care about quality.
        </p>
        <div style={{ display: "flex", gap: "1rem" }}>
          <button
            style={{
              padding: "0.85rem 2rem",
              borderRadius: "10px",
              border: "none",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              boxShadow: "0 4px 20px rgba(99, 102, 241, 0.4)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseOver={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 6px 28px rgba(99, 102, 241, 0.5)";
            }}
            onMouseOut={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "0 4px 20px rgba(99, 102, 241, 0.4)";
            }}
          >
            Get Started
          </button>
          <button
            style={{
              padding: "0.85rem 2rem",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.15)",
              fontSize: "1rem",
              fontWeight: 600,
              cursor: "pointer",
              background: "rgba(255,255,255,0.05)",
              color: "#e0e0e0",
              transition: "background 0.2s",
            }}
            onMouseOver={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.1)")
            }
            onMouseOut={(e) =>
              (e.target.style.background = "rgba(255,255,255,0.05)")
            }
          >
            <Link to="/listgroup" style={{ color: "inherit", textDecoration: "none" }}>
              List Group
            </Link>
            {/* onClick = {()=> <Link to="/listgroup" style={{ color: "inherit", textDecoration: "none" }}>List Group</Link>} */}
          </button>
        </div>
      </section>

      {/* Stats Bar */}
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
          padding: "3rem 2rem",
          background: "rgba(99, 102, 241, 0.06)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        {stats.map((stat, i) => (
          <div key={i} style={{ textAlign: "center", minWidth: "120px" }}>
            <div
              style={{
                fontSize: "2.5rem",
                fontWeight: 800,
                background: "linear-gradient(to right, #818cf8, #c084fc)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {stat.value}
            </div>
            <div
              style={{
                fontSize: "0.9rem",
                color: "#94a3b8",
                marginTop: "0.25rem",
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </section>

      {/* Features Section */}
      <section
        style={{ padding: "5rem 2rem", maxWidth: "1100px", margin: "0 auto" }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2rem",
            fontWeight: 700,
            marginBottom: "0.5rem",
          }}
        >
          Why Choose MyApp?
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            fontSize: "1.05rem",
            marginBottom: "3rem",
          }}
        >
          Everything you need to build modern web applications.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {features.map((f, i) => (
            <div
              key={i}
              style={{
                padding: "2rem",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                transition:
                  "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
                cursor: "default",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.4)";
                e.currentTarget.style.boxShadow =
                  "0 8px 30px rgba(99, 102, 241, 0.12)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
                {f.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  marginBottom: "0.5rem",
                }}
              >
                {f.title}
              </h3>
              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                }}
              >
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          textAlign: "center",
          padding: "5rem 2rem",
          background: "linear-gradient(135deg, #1e1b4b, #1a1a2e)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>
          Ready to Get Started?
        </h2>
        <p
          style={{
            color: "#94a3b8",
            fontSize: "1.1rem",
            maxWidth: "500px",
            margin: "0 auto 2rem",
          }}
        >
          Jump right in and start building your next project with MyApp.
        </p>
        <button
          style={{
            padding: "0.9rem 2.5rem",
            borderRadius: "10px",
            border: "none",
            fontSize: "1rem",
            fontWeight: 600,
            cursor: "pointer",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            color: "#fff",
            boxShadow: "0 4px 20px rgba(99, 102, 241, 0.4)",
            transition: "transform 0.2s",
          }}
          onMouseOver={(e) => (e.target.style.transform = "translateY(-2px)")}
          onMouseOut={(e) => (e.target.style.transform = "translateY(0)")}
        >
          Start Building →
        </button>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          padding: "2rem",
          color: "#64748b",
          fontSize: "0.85rem",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        © 2026 MyApp. Built with React + Vite.
      </footer>
    </div>
  );
}

export default Home;
