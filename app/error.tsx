"use client";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h1 style={{ fontSize: 32, color: "#b91c1c" }}>Something went wrong</h1>
      <p style={{ margin: "20px 0", color: "#555" }}>{error.message}</p>
      <button
        onClick={() => reset()}
        style={{
          background: "#2563eb",
          color: "white",
          border: "none",
          borderRadius: 4,
          padding: "10px 20px",
          fontSize: 16,
          cursor: "pointer",
        }}
      >
        Try again
      </button>
    </div>
  );
} 