import { useEffect, useRef } from "react"

export function VslVideoPlayer() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const exists = document.querySelector(
      'script[src*="converteai.net/1c049ea8-b7d4-4846-a066-e842abb5715b"]'
    )
    if (!exists) {
      const s = document.createElement("script")
      s.src = "https://scripts.converteai.net/1c049ea8-b7d4-4846-a066-e842abb5715b/players/6a1b3b33e6e441f74424f3aa/v4/player.js"
      s.async = true
      document.head.appendChild(s)
    }

    if (containerRef.current && !containerRef.current.querySelector("vturb-smartplayer")) {
      const el = document.createElement("vturb-smartplayer")
      el.id = "vid-6a1b3b33e6e441f74424f3aa"
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
