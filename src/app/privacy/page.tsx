export default function PrivacyPage() {
  return (
    <section className="min-h-screen bg-[#0A0A0A] text-white px-6 py-32">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-4xl font-light tracking-tight">Privacy Policy</h1>

        <div className="space-y-8 text-sm text-white/65 leading-relaxed">

          <p>
            Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen.
            In dieser Datenschutzerklärung informieren wir Sie über Art, Umfang und Zweck
            der Verarbeitung personenbezogener Daten im Rahmen der Nutzung dieser Website.
          </p>

          {/* Verantwortliche */}
          <div className="space-y-2">
            <h2 className="text-white text-base">1. Verantwortliche</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
              <strong className="text-white">OUTLINE MEDIA</strong><br />
              Unabhängiges Musik- & Medienprojekt<br />
              Kontakt:{" "}
              <a
                href="mailto:hello@outlinemedia.xyz"
                className="underline underline-offset-4 hover:text-white"
              >
                office@outline-records.com
              </a>
            </p>
          </div>

          {/* Hosting */}
          <div className="space-y-2">
            <h2 className="text-white text-base">2. Hosting</h2>
            <p>
              Diese Website wird bei <strong className="text-white">Vercel Inc.</strong>,
              340 S Lemon Ave #4133, Walnut, CA 91789, USA, gehostet.
            </p>
            <p>
              Beim Aufruf der Website verarbeitet Vercel technisch notwendige Daten
              (z. B. IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp, Betriebssystem),
              um die Auslieferung und Sicherheit der Website zu gewährleisten.
            </p>
            <p>
              Die Datenverarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
              (berechtigtes Interesse an einem sicheren und stabilen Betrieb der Website).
            </p>
          </div>

          {/* Cookies & Consent */}
          <div className="space-y-2">
            <h2 className="text-white text-base">3. Cookies & Einwilligungsmanagement</h2>
            <p>
              Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf
              Ihrem Endgerät gespeichert werden und bestimmte Informationen enthalten.
            </p>
            <p>
              Zur Verwaltung der eingesetzten Cookies und ähnlichen Technologien sowie
              zur Einholung Ihrer Einwilligung nutzen wir den Dienst{" "}
              <strong className="text-white">Cookiebot</strong> der Usercentrics A/S,
              Havnegade 39, 1058 Kopenhagen, Dänemark.
            </p>
            <p>
              Cookiebot speichert Informationen über die von Ihnen erteilten oder
              widerrufenen Einwilligungen. Die Verarbeitung erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. c DSGVO (rechtliche Verpflichtung) sowie Art. 6 Abs. 1 lit. a DSGVO
              (Einwilligung).
            </p>
            <p>
              Sie können Ihre Einwilligung jederzeit über den Cookie-Banner oder die
              entsprechenden Einstellungen widerrufen.
            </p>
          </div>

          {/* Technisch notwendige Cookies */}
          <div className="space-y-2">
            <h2 className="text-white text-base">4. Technisch notwendige Cookies</h2>
            <p>
              Technisch notwendige Cookies sind erforderlich, um den Betrieb der Website
              sicherzustellen. Diese Cookies können nicht deaktiviert werden, da ohne sie
              grundlegende Funktionen der Website nicht gewährleistet wären.
            </p>
          </div>

          {/* Tracking / Analytics */}
          <div className="space-y-2">
            <h2 className="text-white text-base">5. Analyse- & Tracking-Tools</h2>
            <p>
              Zum Zeitpunkt des Aufrufs dieser Datenschutzerklärung werden auf dieser
              Website keine Analyse-, Tracking- oder Marketing-Tools eingesetzt, die
              personenbezogene Daten ohne Ihre Einwilligung verarbeiten.
            </p>
            <p>
              Sofern zukünftig entsprechende Dienste (z. B. Web-Analytics, Audio-Embeds,
              Plattform-Integrationen) eingebunden werden, erfolgt dies ausschließlich
              nach Ihrer ausdrücklichen Einwilligung über das Cookie-Consent-Tool.
            </p>
          </div>

          {/* Audio & Medien */}
          <div className="space-y-2">
            <h2 className="text-white text-base">6. Audio- & Medieninhalte</h2>
            <p>
              Beim Abspielen von Audio- oder Medieninhalten auf dieser Website werden
              keine personenbezogenen Daten an Dritte übermittelt, sofern die Inhalte
              lokal bereitgestellt werden.
            </p>
          </div>

          {/* Betroffenenrechte */}
          <div className="space-y-2">
            <h2 className="text-white text-base">7. Ihre Rechte</h2>
            <p>
              Sie haben gemäß DSGVO jederzeit das Recht auf Auskunft über Ihre
              personenbezogenen Daten sowie auf Berichtigung, Löschung,
              Einschränkung der Verarbeitung, Datenübertragbarkeit und Widerspruch.
            </p>
            <p>
              Darüber hinaus haben Sie das Recht, eine erteilte Einwilligung jederzeit
              mit Wirkung für die Zukunft zu widerrufen.
            </p>
            <p>
              Anfragen können Sie jederzeit an die oben angegebene Kontaktadresse richten.
            </p>
          </div>

          {/* Aufsichtsbehörde */}
          <div className="space-y-2">
            <h2 className="text-white text-base">8. Aufsichtsbehörde</h2>
            <p>
              Wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen
              Daten gegen die DSGVO verstößt, haben Sie das Recht, Beschwerde bei der
              zuständigen Aufsichtsbehörde einzulegen.
            </p>
            <p>
              In Österreich ist dies die <strong className="text-white">Datenschutzbehörde</strong>,
              Barichgasse 40–42, 1030 Wien.
            </p>
          </div>

          <p className="text-white/40">
            Stand: {new Date().toLocaleDateString("de-AT")}
          </p>
        </div>
      </div>
    </section>
  );
}
