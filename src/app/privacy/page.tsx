export default function PrivacyPage() {
  return (
    <section className="min-h-screen bg-[#0A0A0A] text-white px-6 py-32">
      <div className="max-w-3xl mx-auto space-y-12">
        <h1 className="text-4xl font-light tracking-tight">Privacy Policy</h1>

        <div className="space-y-8 text-sm text-white/65 leading-relaxed">
          <p>
            Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung
            informiert Sie über Art, Umfang und Zweck der Verarbeitung personenbezogener
            Daten auf dieser Website.
          </p>

          <div className="space-y-2">
            <h2 className="text-white text-base">Verantwortliche</h2>
            <p>
              OUTLINE MEDIA<br />
              Kontakt:{" "}
              <a href="mailto:office@outline-records.com" className="underline underline-offset-4 hover:text-white">
                office@outline-records.com
              </a>
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-base">Hosting</h2>
            <p>
              Diese Website wird bei Vercel Inc. (USA) gehostet. Beim Aufruf der Website werden
              technisch notwendige Daten (z. B. IP-Adresse, Zeitpunkt des Zugriffs, Browserinformationen)
              verarbeitet, um den Betrieb der Website sicherzustellen.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-base">Cookies & Tracking</h2>
            <p>
              Diese Website verwendet keine Cookies zu Marketing- oder Trackingzwecken
              und keine externen Analyse-Tools.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-base">Audio & Medien</h2>
            <p>
              Beim Abspielen von Audioinhalten werden keine personenbezogenen Daten an Dritte
              weitergegeben. Die Wiedergabe erfolgt ausschließlich clientseitig.
            </p>
          </div>

          <div className="space-y-2">
            <h2 className="text-white text-base">Ihre Rechte</h2>
            <p>
              Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung
              sowie ein Recht auf Datenübertragbarkeit Ihrer personenbezogenen Daten.
              Anfragen richten Sie bitte an die oben genannte Kontaktadresse.
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
