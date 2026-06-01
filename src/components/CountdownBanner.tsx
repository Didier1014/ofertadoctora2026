import { useState, useEffect } from "react"

export function CountdownBanner() {
  const [total, setTotal] = useState(10 * 60)

  useEffect(() => {
    if (total <= 0) return
    const timer = setTimeout(() => setTotal((t) => t - 1), 1000)
    return () => clearTimeout(timer)
  }, [total])

  const fmt = (n: number) => n < 10 ? `0${n}` : `${n}`
  const m = Math.floor(total / 60)
  const s = total % 60

  return (
    <div
      style={{
        width: "100%",
        background: "#c0392b",
        color: "#fff",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "14px 18px",
        fontFamily: "Arial, sans-serif",
        boxSizing: "border-box",
        gap: "10px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "10px", flex: 1 }}>
        <span style={{ fontSize: 22 }}>⚠️</span>
        <span style={{ fontSize: 15, fontWeight: 800, color: "#f9e04b", lineHeight: 1.3 }}>
          Este vídeo será removido do ar hoje:
        </span>
      </div>
      <div style={{ fontSize: 15, fontWeight: 700, color: "#fff", whiteSpace: "nowrap" }}>
        Tempo<br />restante:
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, flexShrink: 0 }}>
        <span
          style={{
            background: "rgba(255,255,255,0.2)",
            border: "2px solid rgba(255,255,255,0.5)",
            borderRadius: 6,
            padding: "6px 10px",
            fontSize: 20,
            fontWeight: 800,
            minWidth: 38,
            textAlign: "center",
            display: "inline-block",
          }}
        >
          {fmt(m)}
        </span>
        <span style={{ fontSize: 22, fontWeight: 800 }}>:</span>
        <span
          style={{
            background: "rgba(255,255,255,0.2)",
            border: "2px solid rgba(255,255,255,0.5)",
            borderRadius: 6,
            padding: "6px 10px",
            fontSize: 20,
            fontWeight: 800,
            minWidth: 38,
            textAlign: "center",
            display: "inline-block",
          }}
        >
          {fmt(s)}
        </span>
      </div>
    </div>
  )
}
