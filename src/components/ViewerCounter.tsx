import { useState, useEffect } from "react"

const PROV: [string[], string][] = [
  [["cabo delgado", "pemba", "mueda", "montepuez", "palma", "mocimboa", "muidumbe", "quissanga", "macomia", "chiure", "namuno", "balama", "ibo", "meluco"], "Cabo Delgado"],
  [["niassa", "lichinga", "cuamba", "mandimba", "sanga", "lago", "metangula", "majune", "mecula", "ngauma", "marrupa", "muembe", "nipepe", "chimbonila", "maua"], "Niassa"],
  [["nampula", "nacala", "angoche", "monapo", "ilha de mocambique", "ribaue", "lalaua", "meconta", "mecuburi", "memba", "mogincual", "mogovolas", "moma", "mossuril", "muecate", "nacaroa", "rapale", "erati"], "Nampula"],
  [["zambezia", "quelimane", "mocuba", "gurue", "milange", "alto molocue", "pebane", "inhassunge", "luabo", "mopeia", "morrumbala", "namacurra", "namarroi", "nicoadala", "ile", "maganja", "chinde"], "Zambézia"],
  [["tete", "moatize", "changara", "cahora bassa", "zumbo", "angonia", "tsangano", "macanga", "maravia", "mutarara", "chiuta", "doa", "fingoe", "furancungo", "tambara"], "Tete"],
  [["manica", "chimoio", "gondola", "barue", "guro", "machaze", "macossa", "mossurize", "sussundenga", "vanduzi"], "Manica"],
  [["sofala", "beira", "dondo", "buzi", "caia", "chemba", "chibabava", "gorongosa", "machanga", "marromeu", "muanza", "nhamatanda", "save"], "Sofala"],
  [["inhambane", "maxixe", "vilankulo", "massinga", "homoine", "zavala", "funhalouro", "govuro", "inharrime", "jangamo", "mabote", "morrumbene", "panda", "tofo"], "Inhambane"],
  [["gaza", "xai-xai", "xai xai", "chokwe", "chibuto", "manjacaze", "guija", "macia", "bilene", "canhane", "chicualacuala", "chigubo", "limpopo", "mabalane", "mapai", "massangena", "massingir", "muamba"], "Gaza"],
  [["matola", "boane", "namaacha", "moamba", "magude", "manhica", "marracuene", "matutuine"], "Maputo Província"],
  [["maputo", "kamaxakeni", "kamavota", "kampfumo", "kamubukwane", "nlhamankulu", "kamtembe", "kanyaka", "cidade de maputo"], "Maputo Cidade"],
]

function normalize(s: string) {
  return s.toLowerCase()
    .replace(/ç/g, "c").replace(/ã/g, "a").replace(/â/g, "a")
    .replace(/á/g, "a").replace(/à/g, "a").replace(/é/g, "e")
    .replace(/ê/g, "e").replace(/í/g, "i").replace(/ó/g, "o")
    .replace(/ô/g, "o").replace(/ú/g, "u").replace(/ü/g, "u")
}

function getProvincia(regiao: string, cidade: string): string | null {
  const busca = normalize(regiao + " " + cidade)
  for (const [chaves, provincia] of PROV) {
    for (const chave of chaves) {
      if (busca.includes(normalize(chave))) return provincia
    }
  }
  return null
}

export function ViewerCounter() {
  const [count, setCount] = useState(() => Math.floor(Math.random() * 1000) + 2000)
  const [location, setLocation] = useState("Moçambique")

  useEffect(() => {
    const step = () => {
      setCount((c) => {
        const delta = Math.floor(Math.random() * 3) + 1
        const next = c + (Math.random() > 0.5 ? delta : -delta)
        if (next < 2000) return 2000
        if (next > 3000) return 3000
        return next
      })
    }
    const timer = setInterval(step, Math.random() * 3000 + 2000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((r) => r.json())
      .then((data) => {
        const pais = (data.country_code || "").toUpperCase()
        if (pais === "MZ") {
          const prov = getProvincia(data.region || "", data.city || "")
          setLocation(prov || data.region || "Moçambique")
        } else {
          setLocation(data.country_name || data.country || "Moçambique")
        }
      })
      .catch(() => {
        fetch("http://ip-api.com/json/?fields=status,country,countryCode,regionName,city")
          .then((r) => r.json())
          .then((d) => {
            if (d.countryCode === "MZ") {
              const prov = getProvincia(d.regionName || "", d.city || "")
              setLocation(prov || d.regionName || "Moçambique")
            } else {
              setLocation(d.country || "Moçambique")
            }
          })
          .catch(() => fetch("https://api.country.is/")
            .then((r) => r.json())
            .then((d) => setLocation(d.country === "MZ" ? "Moçambique" : d.country || "Moçambique"))
            .catch(() => {})
          )
      })
  }, [])

  return (
    <div style={{
      textAlign: "center",
      margin: "8px auto 0",
    }}>
      <div style={{
        display: "inline-block",
        backgroundColor: "rgba(0,0,0,0.75)",
        padding: "10px 22px",
        borderRadius: 10,
        color: "white",
        fontFamily: "Arial, sans-serif",
        fontSize: 16,
        boxShadow: "0 2px 12px rgba(0,0,0,.4)",
      }}>
        <span style={{ fontSize: 18, marginRight: 5 }}>👁️</span>
        <span style={{ color: "#ff3333", fontWeight: "bold" }}>
          {count.toLocaleString("pt-PT")}
        </span>
        <span style={{ marginLeft: 4 }}>
          {" "}pessoas em <span style={{ color: "#ff3333", fontWeight: "bold" }}>{location}</span> assistindo agora
        </span>
      </div>
    </div>
  )
}
