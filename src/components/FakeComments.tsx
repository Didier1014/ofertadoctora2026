const comments = [
  { initials: "AC", name: "Amade Chaúque", text: "Rapazes, experimentei essa dica por duas semanas e minha confiança voltou. Minha esposa percebeu antes mesmo de eu falar alguma coisa. 🔥", time: "1 m", likes: 1 },
  { initials: "AM", name: "Atanásio Maíva", text: "Achei que fosse só marketing, mas irmão... isso funciona mesmo. Mais controle, menos estresse.", time: "3 m", likes: 7 },
  { initials: "YS", name: "Yola Da Silva Magalhães", text: "Usei isso com meu marido por duas semanas, as coisas estão ótimas no quarto. Muito obrigada! 🙌", time: "10 m", likes: 12 },
  { initials: "DP", name: "Délfio Pene", text: "Caramba, eu estava cético, mas no 5º dia já senti a diferença. Parabéns para quem compartilhou isso.", time: "25 m", likes: 9 },
  { initials: "IP", name: "Imelda Pedro Guilunzo", text: "Meu parceiro tinha vergonha de tentar qualquer coisa. Isso foi simples e nos ajudou muito. Nos sentimos conectados de novo. 💙", time: "41 m", likes: 21 },
  { initials: "IV", name: "Ivan Valdemiro Neves", text: "Dia 7 e já estou vendo resultados sólidos. Isso é muito bom.", time: "1 h", likes: 13 },
  { initials: "TR", name: "Tomas Ruco", text: "Sem efeitos colaterais para mim. Desempenho lá em cima, estresse lá embaixo. Recomendo muito.", time: "2 h", likes: 18 },
  { initials: "AB", name: "Atall Bunitona De", text: "Meninas, se o homem de vocês está com dificuldades, mandem esse link para ele. Nós dois estamos mais felizes agora. 🔥🔥", time: "5 h", likes: 44 },
  { initials: "TA", name: "Tonhaõ Antonio Mpfumo Tikita", text: "Sendo bem honesto: esse truque ajudou meu casamento mais do que qualquer coisa que já tentamos antes.", time: "10 h", likes: 130 },
  { initials: "NT", name: "Nick Da Loudovina Tovela", text: "Mantivemos em segredo no início, mas a melhora foi óbvia. A confiança foi lá para o alto. 🙌", time: "1 d", likes: 260 },
]

export function FakeComments() {
  return (
    <div
      id="npComments"
      style={{
        position: "relative",
        display: "block",
        clear: "both",
        margin: "0 auto",
        zIndex: 1,
        background: "#fff",
        color: "#111",
        maxWidth: 820,
        font: "400 15px/1.45 system-ui, -apple-system, 'Segoe UI', Roboto, Arial, sans-serif",
        borderRadius: 4,
      }}
    >
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {comments.map((c, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              gap: "0.6rem",
              padding: "0.7rem 0.4rem",
              borderBottom: "1px solid #f1f3f5",
            }}
          >
            <div style={{ position: "relative", width: 36, height: 36, flex: "0 0 36px" }}>
              <span
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "grid",
                  placeItems: "center",
                  background: "#e6f4ea",
                  color: "#137333",
                  borderRadius: "50%",
                  fontWeight: 800,
                  fontSize: 12,
                }}
              >
                {c.initials}
              </span>
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <a href="#" style={{ color: "#1877f2", fontWeight: 800, textDecoration: "none" }}>
                {c.name}
              </a>
              <p style={{ margin: "0.15rem 0 0.35rem" }}>{c.text}</p>
              <div
                style={{
                  color: "#6d6f73",
                  fontSize: 13,
                  display: "flex",
                  gap: "0.4rem",
                  alignItems: "center",
                }}
              >
                <a href="#" style={{ color: "#6d6f73", textDecoration: "none", fontWeight: 600 }}>
                  Curtir
                </a>
                <span>·</span>
                <a href="#" style={{ color: "#6d6f73", textDecoration: "none", fontWeight: 600 }}>
                  Responder
                </a>
                <span>·</span>
                <span>{c.time}</span>
                <span>·</span>
                <span>{c.likes}</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", padding: "0.7rem 0.4rem 0.9rem" }}>
        <div style={{ position: "relative", width: 36, height: 36, flex: "0 0 36px" }}>
          <span
            style={{
              position: "absolute",
              inset: 0,
              display: "grid",
              placeItems: "center",
              background: "#e6f4ea",
              color: "#137333",
              borderRadius: "50%",
              fontWeight: 800,
              fontSize: 10,
            }}
          >
            VOCÊ
          </span>
        </div>
        <form
          style={{ display: "flex", gap: "0.5rem", width: "100%", alignItems: "center" }}
          onSubmit={(e) => {
            e.preventDefault()
            const note = e.currentTarget.querySelector(".np-note") as HTMLElement
            if (note) {
              note.textContent = "Os comentários são moderados e podem levar algum tempo a aparecer."
              setTimeout(() => { note.textContent = "" }, 2500)
            }
          }}
        >
          <input
            type="text"
            placeholder="Escreva um comentário…"
            style={{
              flex: 1,
              height: 36,
              border: "1px solid #dfe3e6",
              borderRadius: 18,
              padding: "0 0.9rem",
              background: "#f7f8fa",
              outline: "none",
              fontSize: 14,
            }}
          />
          <button
            type="submit"
            style={{
              height: 36,
              padding: "0 14px",
              border: 0,
              borderRadius: 18,
              background: "#1877f2",
              color: "#fff",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: 14,
            }}
          >
            Publicar
          </button>
          <small className="np-note" style={{ color: "#6d6f73", fontSize: 12 }} />
        </form>
      </div>
    </div>
  )
}
