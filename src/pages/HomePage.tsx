import { useEffect, useState } from "react"
import { Button } from "../components/ui/button"
import { VslVideoPlayer } from "../components/VslVideoPlayer"
import { ViewerCounter } from "../components/ViewerCounter"
import { FakeComments } from "../components/FakeComments"

export function HomePage() {
  const [showButton, setShowButton] = useState(false)
  const checkoutUrl = "https://www.redoxpay.site/c/sal"

  useEffect(() => {
    const timer = setTimeout(() => setShowButton(true), 9 * 60 * 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ background: "#111", minHeight: "100vh" }}>
      <main style={{ maxWidth: 720, margin: "0 auto", padding: "16px" }}>
        <div style={{ textAlign: "center", marginBottom: 12 }}>
          <h1 style={{
            fontSize: "clamp(1rem, 3vw, 1.25rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#fff",
            margin: "0 0 6px",
          }}>
            <span style={{ color: "#ffd700" }}>O SEGREDO DO ENERGIZANTE AFRICANO:</span>
          </h1>
          <h2 style={{
            fontSize: "clamp(0.9rem, 2.5vw, 1.15rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            color: "#fff",
            margin: 0,
          }}>
            <span style={{ background: "#ffd700", color: "#000", padding: "0 3px" }}>REVELADO</span>
            <span> </span>
            <span style={{ color: "#ffd700" }}>O ENERGIZANTE DE 7 DIAS</span>
            <br />
            <span>Que </span>
            <span style={{ textDecoration: "underline", fontWeight: 900 }}>ESTICA E ENGROSSA</span>
            <span> O Pau em Até </span>
            <span style={{ background: "#ffd700", color: "#000", padding: "0 3px" }}>20CM</span>
          </h2>
        </div>

        <p style={{
          textAlign: "center",
          color: "#ccc",
          fontSize: 13,
          marginBottom: 12,
        }}>
          Aperte o botão play e aumente volume assista até o fim.
        </p>

        <VslVideoPlayer />
        <ViewerCounter />
        <FakeComments />

        {showButton && (
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "block", marginTop: 12, textDecoration: "none" }}
          >
            <Button
              className="w-full cursor-pointer"
              style={{
                width: "100%",
                fontSize: "1.125rem",
                fontWeight: 700,
                padding: "16px 0",
                borderRadius: 8,
                background: "hsl(25 95% 53%)",
                color: "#fff",
                border: "none",
              }}
            >
              Quero o meu energizante
            </Button>
          </a>
        )}

        <div style={{
          textAlign: "center",
          padding: "18px 16px",
          color: "#aaa",
          fontSize: 13,
          marginTop: 10,
        }}>
          <a href="#" style={{ color: "#ccc", textDecoration: "none", fontWeight: 600 }}>Política de Privacidade</a>
          <span> | </span>
          <a href="#" style={{ color: "#ccc", textDecoration: "none", fontWeight: 600 }}>Termos</a>
          <p style={{ margin: "6px 0 0", fontSize: 12 }}>
            © Instituto de Disfunção Erétil 2026. Todos os direitos reservados.
          </p>
        </div>
      </main>
    </div>
  )
}
