import { useEffect, useRef } from "react"

export function VslVideoPlayer() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const exists = document.querySelector(
      'script[src*="converteai.net/e984ae4f-723b-4a7e-8098-ad701a5746ff"]'
    )
    if (!exists) {
      const s = document.createElement("script")
      s.src = "https://scripts.converteai.net/e984ae4f-723b-4a7e-8098-ad701a5746ff/players/6aeb515f9cb55ca4cc976f05/v4/player.js"
      s.async = true
      document.head.appendChild(s)
    }

    if (containerRef.current && !containerRef.current.querySelector("vturb-smartplayer")) {
      const el = document.createElement("vturb-smartplayer")
      el.id = "vid-6aeb515f9cb55ca4cc976f05"
      el.style.display = "block"
      el.style.margin = "0 auto"
      el.style.width = "100%"
      containerRef.current.appendChild(el)
    }
  }, [])

  return (
    <div style={{ margin: "0 auto", width: "100%", maxWidth: 400 }} ref={containerRef} />
  )
}
