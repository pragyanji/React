function About() {
  const team = [
    { name: "Alex Johnson", role: "Founder & CEO", emoji: "👨‍💻" },
    { name: "Sarah Chen", role: "Lead Designer", emoji: "🎨" },
    { name: "Marcus Rivera", role: "Full-Stack Developer", emoji: "⚙️" },
    { name: "Priya Sharma", role: "Product Manager", emoji: "📋" },
  ];

  const values = [
    {
      icon: "💡",
      title: "Innovation",
      desc: "We push boundaries and embrace new ideas to build cutting-edge solutions.",
    },
    {
      icon: "🤝",
      title: "Collaboration",
      desc: "Great products come from great teams working together with shared purpose.",
    },
    {
      icon: "🎯",
      title: "Quality",
      desc: "We hold ourselves to the highest standards in every line of code we write.",
    },
    {
      icon: "🌍",
      title: "Impact",
      desc: "We build tools that make a real difference for developers around the world.",
    },
  ];

  return (
    <div style={{ fontFamily: "'Segoe UI', sans-serif", color: "#e0e0e0", background: "#0f0f1a" }}>

      {/* Hero Section */}
      <section
        style={{
          minHeight: "50vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "5rem 2rem 4rem",
          background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
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
          ✨ Our Story
        </span>
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: 800,
            margin: "0 0 1rem",
            lineHeight: 1.15,
            background: "linear-gradient(to right, #818cf8, #c084fc, #f472b6)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          About MyApp
        </h1>
        <p
          style={{
            fontSize: "1.2rem",
            color: "#94a3b8",
            maxWidth: "600px",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          We're a passionate team of developers and designers building the next generation of web development tools.
        </p>
      </section>

      {/* Mission Section */}
      <section
        style={{
          padding: "5rem 2rem",
          maxWidth: "900px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "1rem" }}>Our Mission</h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "#94a3b8",
            lineHeight: 1.8,
            maxWidth: "700px",
            margin: "0 auto",
          }}
        >
          We believe that building for the web should be fast, intuitive, and enjoyable.
          MyApp was born out of the frustration with bloated toolchains and slow feedback loops.
          Our mission is to empower developers with tools that are lightning-fast, beautifully designed,
          and effortless to use — so they can focus on what truly matters: creating amazing experiences.
        </p>
      </section>

      {/* Values Section */}
      <section
        style={{
          padding: "4rem 2rem 5rem",
          background: "rgba(99, 102, 241, 0.04)",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Our Core Values
        </h2>
        <p style={{ textAlign: "center", color: "#94a3b8", fontSize: "1.05rem", marginBottom: "3rem" }}>
          The principles that guide everything we do.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1.5rem",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {values.map((v, i) => (
            <div
              key={i}
              style={{
                padding: "2rem",
                borderRadius: "16px",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "transform 0.25s, border-color 0.25s, box-shadow 0.25s",
                cursor: "default",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "rgba(99, 102, 241, 0.4)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(99, 102, 241, 0.12)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{v.icon}</div>
              <h3 style={{ fontSize: "1.15rem", fontWeight: 600, marginBottom: "0.5rem" }}>{v.title}</h3>
              <p style={{ color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.6 }}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section style={{ padding: "5rem 2rem", maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ textAlign: "center", fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>
          Meet the Team
        </h2>
        <p style={{ textAlign: "center", color: "#94a3b8", fontSize: "1.05rem", marginBottom: "3rem" }}>
          The people behind the product.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {team.map((member, i) => (
            <div
              key={i}
              style={{
                textAlign: "center",
                padding: "2.5rem 1.5rem",
                borderRadius: "16px",
                background: "linear-gradient(135deg, rgba(99,102,241,0.08), rgba(139,92,246,0.05))",
                border: "1px solid rgba(255,255,255,0.08)",
                transition: "transform 0.25s, box-shadow 0.25s",
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(99,102,241,0.15)";
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2rem",
                  margin: "0 auto 1.25rem",
                  boxShadow: "0 4px 15px rgba(99,102,241,0.3)",
                }}
              >
                {member.emoji}
              </div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.3rem" }}>
                {member.name}
              </h3>
              <p style={{ color: "#818cf8", fontSize: "0.9rem", fontWeight: 500 }}>{member.role}</p>
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
          Want to Work With Us?
        </h2>
        <p style={{ color: "#94a3b8", fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto 2rem" }}>
          We're always looking for talented people to join our mission.
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
          Get in Touch →
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

export default About;