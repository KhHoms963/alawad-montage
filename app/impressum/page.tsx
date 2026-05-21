import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Impressum | AL AWAD MONTAGE',
  description: 'Impressum und rechtliche Angaben der AL AWAD MONTAGE',
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-background py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link href="/">
          <Button className="mb-8 bg-gold text-black font-semibold hover:bg-gold/80">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Zurück zur Startseite
          </Button>
        </Link>

        {/* Content */}
        <div className="bg-card border border-border rounded-xl p-8 sm:p-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-8">
            <span className="text-gold">Impressum</span>
          </h1>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
              <p>
                AL AWAD MONTAGE<br />
                [Straße und Hausnummer]<br />
                [PLZ Ort]<br />
                Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Kontakt</h2>
              <p>
                Telefon: +49 176 61589109<br />
                E-Mail: kontakt@alawad-montage.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Vertreten durch</h2>
              <p>
                [Name des Inhabers / Geschäftsführers]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Umsatzsteuer-ID</h2>
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                [USt-IdNr.]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
              <p>
                Berufsbezeichnung: Handwerker / Montageservice<br />
                Zuständige Kammer: [Handwerkskammer]<br />
                Verliehen in: Deutschland
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p>
                [Name]<br />
                [Adresse]
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gold hover:underline ml-1"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">
                Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Haftung für Inhalte</h2>
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen 
                zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mt-2">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen 
                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt 
                der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden 
                Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Haftung für Links</h2>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der 
                verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die 
                verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. 
                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
              </p>
              <p className="mt-2">
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte 
                einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige 
                Links umgehend entfernen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">Urheberrecht</h2>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem 
                deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung 
                außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen 
                Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht 
                kommerziellen Gebrauch gestattet.
              </p>
              <p className="mt-2">
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte 
                Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie 
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden 
                Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  )
}
