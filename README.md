<div align="center">
<img alt="Jan Hindemit Portfolio" src="public/me.png" width="200" style="border-radius: 50%;">
</div>

# Jan Hindemit - Portfolio

Ein modernes, responsives Portfolio, das mit Next.js 15, TypeScript, Tailwind CSS und Magic UI entwickelt wurde.

🌐 **Live Website:** [janhindemit.de](https://janhindemit.de)

## Über mich

Ich bin Jan Hindemit, ein leidenschaftlicher Frontend-Entwickler und UI/UX-Designer aus Trappenkamp, Deutschland. Mit einem Bachelor in Medieninformatik und praktischer Erfahrung in der Entwicklung benutzerfreundlicher Webanwendungen, konzentriere ich mich auf sauberen Code und innovative Lösungen.

## 🚀 Features

- **Moderne Technologien:** Next.js 15, React 18, TypeScript, Tailwind CSS
- **UI-Komponenten:** Shadcn/UI und Magic UI für ansprechende Benutzeroberflächen
- **Animationen:** Framer Motion für flüssige Übergänge und Interaktionen
- **Blog-System:** MDX-basierte Blog-Posts mit Syntax-Highlighting
- **Responsive Design:** Optimiert für alle Geräte und Bildschirmgrößen
- **Dark/Light Mode:** Automatischer Theme-Switch
- **SEO-optimiert:** Meta-Tags und Open Graph für bessere Sichtbarkeit
- **Performance:** Optimiert für schnelle Ladezeiten

## 🛠️ Tech Stack

- **Frontend:** Next.js 15, React 18, TypeScript
- **Styling:** Tailwind CSS, CSS Modules
- **UI-Komponenten:** Shadcn/UI, Radix UI, Magic UI
- **Animationen:** Framer Motion
- **Content:** MDX, Gray Matter
- **Icons:** Lucide React, React Icons
- **Deployment:** Vercel

## 📁 Projektstruktur

```
portfolio-main/
├── content/                 # MDX Blog-Posts
├── public/                  # Statische Assets
│   ├── content/            # Projekt-Bilder
│   ├── me-images/          # Persönliche Bilder
│   └── workexperience/     # Berufserfahrung Assets
├── src/
│   ├── app/                # Next.js App Router
│   ├── components/         # React Komponenten
│   │   ├── magicui/       # Magic UI Komponenten
│   │   └── ui/            # Shadcn/UI Komponenten
│   ├── data/              # Daten und Konfiguration
│   │   ├── blog.ts        # Blog-Funktionen
│   │   └── resume/        # Lebenslauf-Daten
│   └── lib/               # Utility-Funktionen
└── tailwind.config.ts     # Tailwind Konfiguration
```

## 🚀 Lokale Entwicklung

1. **Repository klonen:**

   ```bash
   git clone https://github.com/hundemit/portfolio-main.git
   cd portfolio-main
   ```

2. **Dependencies installieren:**

   ```bash
   npm install
   # oder
   pnpm install
   ```

3. **Entwicklungsserver starten:**

   ```bash
   npm run dev
   # oder
   pnpm dev
   ```

4. **Browser öffnen:**
   Öffne [http://localhost:3000](http://localhost:3000) in deinem Browser.

## ⚙️ Konfiguration

Die wichtigsten Konfigurationsdateien:

- **Persönliche Daten:** `src/data/resume/personal-info.ts`
- **Projekte:** `src/data/resume/experience.ts`
- **Skills:** `src/data/resume/skills.ts`
- **Blog-Posts:** `content/*.mdx`

## 📝 Blog-Posts hinzufügen

1. Erstelle eine neue `.mdx` Datei im `content/` Verzeichnis
2. Füge Frontmatter-Metadaten hinzu:

   ```mdx
   ---
   title: "Mein neuer Blog-Post"
   description: "Eine kurze Beschreibung"
   date: "2024-01-01"
   tags: ["React", "Next.js"]
   ---

   Dein Blog-Inhalt hier...
   ```

## 🎨 Anpassungen

- **Farben:** Bearbeite `tailwind.config.ts` für Theme-Anpassungen
- **Komponenten:** Passe Komponenten in `src/components/` an
- **Styling:** Verwende Tailwind CSS Klassen für Styling
- **Animationen:** Nutze Framer Motion für Animationen

## 📱 Responsive Design

Das Portfolio ist vollständig responsive und optimiert für:

- 📱 Mobile Geräte (320px+)
- 📱 Tablets (768px+)
- 💻 Desktop (1024px+)
- 🖥️ Large Screens (1440px+)

## 🚀 Deployment

Das Portfolio ist für Vercel optimiert:

1. **Vercel CLI:**

   ```bash
   npm i -g vercel
   vercel
   ```

2. **GitHub Integration:**
   - Verbinde dein Repository mit Vercel
   - Automatische Deployments bei Push

## 📄 Lizenz

Dieses Projekt steht unter der [MIT Lizenz](LICENSE).

## 📞 Kontakt

- **Website:** [janhindemit.de](https://janhindemit.de)
- **Email:** [janhindemit1@gmail.com](mailto:janhindemit1@gmail.com)
- **LinkedIn:** [Jan Hindemit](https://www.linkedin.com/in/jan-hindemit/)
- **GitHub:** [@hundemit](https://github.com/hundemit)

---

⭐ **Gefällt dir das Portfolio?** Dann hinterlasse gerne einen Star! ⭐
