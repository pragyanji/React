// signup form - saves all submissions to localStorage as an array
import { useState, useEffect } from "react";

const containerStyle = {
    minHeight: "85vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#0f0f1a",
    padding: "2rem",
    fontFamily: "'Segoe UI', sans-serif",
    flexDirection: "column",
    gap: "2rem",
};

const cardStyle = {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "20px",
    padding: "2.5rem",
    width: "100%",
    maxWidth: "420px",
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
};

const titleStyle = {
    fontSize: "1.8rem",
    fontWeight: 700,
    color: "#e0e0e0",
    marginBottom: "0.5rem",
    textAlign: "center",
};

const subtitleStyle = {
    fontSize: "0.95rem",
    color: "#94a3b8",
    textAlign: "center",
    marginBottom: "2rem",
};

const labelStyle = {
    display: "block",
    fontSize: "0.9rem",
    fontWeight: 500,
    color: "#94a3b8",
    marginBottom: "0.4rem",
};

const inputStyle = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: "10px",
    border: "1px solid rgba(255,255,255,0.1)",
    background: "rgba(255,255,255,0.05)",
    color: "#e0e0e0",
    fontSize: "1rem",
    outline: "none",
    marginBottom: "1.25rem",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
};

const buttonStyle = {
    width: "100%",
    padding: "0.85rem",
    borderRadius: "10px",
    border: "none",
    fontSize: "1rem",
    fontWeight: 600,
    cursor: "pointer",
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    color: "#fff",
    boxShadow: "0 4px 20px rgba(99, 102, 241, 0.4)",
    transition: "transform 0.2s, box-shadow 0.2s",
    marginTop: "0.5rem",
};

const entryStyle = {
    padding: "1rem 1.25rem",
    borderRadius: "12px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.06)",
    marginBottom: "0.75rem",
};

function Form() {
    // Form field states
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Track which entry is being edited (null = creating new)
    const [editingId, setEditingId] = useState(null);

    // Array of all submissions, loaded from localStorage
    const [submissions, setSubmissions] = useState(() => {
        const saved = localStorage.getItem("signupEntries");
        return saved ? JSON.parse(saved) : [];
    });

    // Save the submissions array to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("signupEntries", JSON.stringify(submissions));
    }, [submissions]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !password) {
            alert("Please fill in all fields!");
            return;
        }

        if (editingId) {
            // Update existing entry
            setSubmissions((prev) =>
                prev.map((entry) =>
                    entry.id === editingId
                        ? { ...entry, name, email, password }
                        : entry
                )
            );
            setEditingId(null);
        } else {
            // Create a new entry and add it to the array
            const newEntry = {
                id: Date.now(),
                name,
                email,
                password,
                createdAt: new Date().toLocaleString(),
            };
            setSubmissions((prev) => [...prev, newEntry]);
        }

        // Clear the form after submit
        setName("");
        setEmail("");
        setPassword("");
    };

    // Click an entry to load it into the form
    const handleEntryClick = (entry) => {
        setName(entry.name);
        setEmail(entry.email);
        setPassword(entry.password);
        setEditingId(entry.id);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Remove a single entry
    const handleRemove = (id, e) => {
        e.stopPropagation(); // don't trigger the entry click
        setSubmissions((prev) => prev.filter((entry) => entry.id !== id));
        // If we were editing this entry, clear the form
        if (editingId === id) {
            setEditingId(null);
            setName("");
            setEmail("");
            setPassword("");
        }
    };

    const handleClear = () => {
        setSubmissions([]);
        setEditingId(null);
        setName("");
        setEmail("");
        setPassword("");
        localStorage.removeItem("signupEntries");
    };

    return (
        <div style={containerStyle}>
            {/* Signup Form */}
            <div style={cardStyle}>
                <h2 style={titleStyle}>Create Account</h2>
                <p style={subtitleStyle}>Fill in your details below</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" style={labelStyle}>Name</label>
                    <input
                        required
                        type="text" id="name" name="name"
                        placeholder="Enter your name"
                        style={inputStyle}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                    <label htmlFor="email" style={labelStyle}>Email</label>
                    <input
                        required
                        type="email" id="email" name="email"
                        placeholder="Enter your email"
                        style={inputStyle}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                    <label htmlFor="password" style={labelStyle}>Password</label>
                    <input
                        required
                        type="password" id="password" name="password"
                        placeholder="Enter your password"
                        style={inputStyle}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={(e) => (e.target.style.borderColor = "#6366f1")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(255,255,255,0.1)")}
                    />
                    <button
                        type="submit"
                        style={buttonStyle}
                        onMouseOver={(e) => {
                            e.target.style.transform = "translateY(-2px)";
                            e.target.style.boxShadow = "0 6px 28px rgba(99, 102, 241, 0.5)";
                        }}
                        onMouseOut={(e) => {
                            e.target.style.transform = "translateY(0)";
                            e.target.style.boxShadow = "0 4px 20px rgba(99, 102, 241, 0.4)";
                        }}
                    >
                        {editingId ? "Update Entry" : "Sign Up"}
                    </button>
                </form>
            </div>

            {/* Saved Submissions */}
            {submissions.length > 0 && (
                <div style={{ ...cardStyle, maxWidth: "420px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
                        <h3 style={{ color: "#e0e0e0", fontSize: "1.2rem", fontWeight: 600, margin: 0 }}>
                            📋 Saved Entries ({submissions.length})
                        </h3>
                        <button
                            onClick={handleClear}
                            style={{
                                padding: "0.4rem 1rem",
                                borderRadius: "8px",
                                border: "1px solid rgba(248,113,113,0.3)",
                                background: "rgba(248,113,113,0.1)",
                                color: "#f87171",
                                fontSize: "0.85rem",
                                fontWeight: 500,
                                cursor: "pointer",
                                transition: "background 0.2s",
                            }}
                            onMouseOver={(e) => (e.target.style.background = "rgba(248,113,113,0.2)")}
                            onMouseOut={(e) => (e.target.style.background = "rgba(248,113,113,0.1)")}
                        >
                            Clear All
                        </button>
                    </div>
                    {submissions.map((entry) => (
                        <div
                            key={entry.id}
                            onClick={() => handleEntryClick(entry)}
                            style={{
                                ...entryStyle,
                                cursor: "pointer",
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                transition: "border-color 0.2s, background 0.2s",
                                borderColor: editingId === entry.id ? "#6366f1" : "rgba(255,255,255,0.06)",
                                background: editingId === entry.id ? "rgba(99,102,241,0.08)" : "rgba(255,255,255,0.03)",
                            }}
                            onMouseOver={(e) => { if (editingId !== entry.id) e.currentTarget.style.borderColor = "rgba(99,102,241,0.3)"; }}
                            onMouseOut={(e) => { if (editingId !== entry.id) e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}
                        >
                            <div>
                                <div style={{ fontWeight: 600, color: "#e0e0e0", marginBottom: "0.3rem" }}>
                                    {entry.name}
                                </div>
                                <div style={{ fontSize: "0.9rem", color: "#818cf8" }}>{entry.email}</div>
                                <div style={{ fontSize: "0.8rem", color: "#64748b", marginTop: "0.3rem" }}>
                                    {entry.createdAt}
                                </div>
                            </div>
                            <button
                                onClick={(e) => handleRemove(entry.id, e)}
                                style={{
                                    width: "30px",
                                    height: "30px",
                                    borderRadius: "8px",
                                    border: "1px solid rgba(248,113,113,0.3)",
                                    background: "rgba(248,113,113,0.1)",
                                    color: "#f87171",
                                    fontSize: "1rem",
                                    cursor: "pointer",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexShrink: 0,
                                    transition: "background 0.2s",
                                }}
                                onMouseOver={(e) => (e.currentTarget.style.background = "rgba(248,113,113,0.25)")}
                                onMouseOut={(e) => (e.currentTarget.style.background = "rgba(248,113,113,0.1)")}
                                title="Remove entry"
                            >
                                ✕
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default Form;