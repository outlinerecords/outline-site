export default function TermsPage() {
  return (
    <section className="min-h-screen bg-[#0A0A0A] text-white px-6 py-32">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-4xl font-light tracking-tight">Terms of Use</h1>

        <div className="space-y-8 text-sm text-white/65 leading-relaxed">

          <p>
            Diese Nutzungsbedingungen regeln die Nutzung der Website und der darüber
            bereitgestellten Inhalte des Projekts <strong className="text-white">OUTLINE MEDIA</strong>.
            Mit dem Zugriff auf diese Website erklären Sie sich mit diesen Bedingungen
            einverstanden.
          </p>

          {/* Anbieter */}
          <div className="space-y-2">
            <h2 className="text-white text-base">1. Anbieter</h2>
            <p>
              OUTLINE MEDIA<br />
              Unabhängiges Musik- & Medienprojekt<br />
              Kontakt:{" "}
              <a
                href="mailto:office@outline-records.com"
                className="underline underline-offset-4 hover:text-white"
              >
                office@outline-records.com
              </a>
            </p>
            <p>
              OUTLINE MEDIA ist kein eingetragenes Unternehmen und betreibt diese Website
              als künstlerisches Projekt.
            </p>
          </div>

          {/* Leistungsbeschreibung */}
          <div className="space-y-2">
            <h2 className="text-white text-base">2. Inhalte & Zweck der Website</h2>
            <p>
              Diese Website dient der Präsentation von künstlerischen Inhalten,
              Musikprojekten, audiovisuellen Werken und begleitenden Informationen.
              Die Inhalte stellen keine verbindlichen Angebote, Zusicherungen oder
              Garantien dar.
            </p>
          </div>

          {/* Verfügbarkeit */}
          <div className="space-y-2">
            <h2 className="text-white text-base">3. Verfügbarkeit</h2>
            <p>
              Es besteht kein Anspruch auf permanente Verfügbarkeit der Website oder
              einzelner Inhalte. OUTLINE MEDIA behält sich vor, Inhalte jederzeit zu
              ändern, zu entfernen oder den Betrieb der Website vorübergehend oder
              dauerhaft einzustellen.
            </p>
          </div>

          {/* Urheberrecht */}
          <div className="space-y-2">
            <h2 className="text-white text-base">4. Urheber- & Nutzungsrechte</h2>
            <p>
              Sämtliche auf dieser Website veröffentlichten Inhalte (insbesondere Musik,
              Audio, Texte, Grafiken, Cover-Artworks, Logos und Layouts) unterliegen dem
              Urheberrecht.
            </p>
            <p>
              Eine Vervielfältigung, Bearbeitung, Verbreitung oder öffentliche
              Wiedergabe außerhalb der gesetzlichen Schranken ist ohne vorherige
              ausdrückliche Zustimmung nicht gestattet.
            </p>
          </div>

          {/* Haftung */}
          <div className="space-y-2">
            <h2 className="text-white text-base">5. Haftungsausschluss</h2>
            <p>
              Die Nutzung dieser Website erfolgt auf eigene Gefahr. OUTLINE MEDIA
              übernimmt keine Haftung für die Richtigkeit, Vollständigkeit oder
              Aktualität der bereitgestellten Inhalte.
            </p>
            <p>
              Eine Haftung für direkte oder indirekte Schäden, entgangenen Gewinn,
              Datenverlust oder sonstige Nachteile, die aus der Nutzung oder
              Nichtverfügbarkeit der Website entstehen, ist – soweit gesetzlich
              zulässig – ausgeschlossen.
            </p>
          </div>

          {/* Externe Links */}
          <div className="space-y-2">
            <h2 className="text-white text-base">6. Externe Links</h2>
            <p>
              Diese Website kann Links zu externen Websites Dritter enthalten. Für die
              Inhalte externer Seiten übernimmt OUTLINE MEDIA keine Verantwortung.
              Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar.
            </p>
          </div>

          {/* Kein Vertragsverhältnis */}
          <div className="space-y-2">
            <h2 className="text-white text-base">7. Kein Vertragsverhältnis</h2>
            <p>
              Durch die Nutzung dieser Website kommt kein Vertragsverhältnis zwischen
              den Nutzern und OUTLINE MEDIA zustande. Insbesondere entstehen keine
              Leistungs-, Vergütungs- oder Mitwirkungsansprüche.
            </p>
          </div>

          {/* Änderungen */}
          <div className="space-y-2">
            <h2 className="text-white text-base">8. Änderungen der Nutzungsbedingungen</h2>
            <p>
              OUTLINE MEDIA behält sich vor, diese Nutzungsbedingungen jederzeit zu
              ändern. Es gilt die jeweils aktuelle, auf dieser Website veröffentlichte
              Fassung.
            </p>
          </div>

          {/* Rechtswahl */}
          <div className="space-y-2">
            <h2 className="text-white text-base">9. Anwendbares Recht</h2>
            <p>
              Es gilt das Recht der Republik Österreich unter Ausschluss der
              Kollisionsnormen. Gerichtsstand ist – soweit gesetzlich zulässig – Österreich.
            </p>
          </div>

          {/* Schluss */}
          <p className="text-white/40">
            Stand: {new Date().toLocaleDateString("de-AT")}
          </p>

        </div>
      </div>
    </section>
  );
}
