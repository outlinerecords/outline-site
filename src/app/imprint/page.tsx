export default function ImprintPage() {
  return (
    <section className="min-h-screen bg-[#0A0A0A] text-white px-6 py-32">
      <div className="max-w-3xl mx-auto space-y-10">
        <h1 className="text-4xl font-light tracking-tight">Imprint</h1>

        <div className="space-y-6 text-sm text-white/65 leading-relaxed">
          <p>
            <strong className="text-white">OUTLINE MEDIA</strong><br />
            Independent music & media project
          </p>

          <p>
            Betreiber:<br />
            Neo Erbler<br />
            
          </p>

          <p>
            Kontakt:<br />
            <a href="mailto:hello@outlinemedia.xyz" className="underline underline-offset-4 hover:text-white">
              office@outline-records.com
            </a>
          </p>

          <p>
            Hinweis:<br />
            OUTLINE MEDIA ist ein unabhängiges künstlerisches Projekt und stellt derzeit kein
            eingetragenes Unternehmen dar. Eine ladungsfähige Anschrift wird auf
            berechtigtes Anfragen hin bekannt gegeben.
          </p>

          <p>
            Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV:<br />
            Neo Erbler, Österreich
          </p>
        </div>
      </div>
    </section>
  );
}
