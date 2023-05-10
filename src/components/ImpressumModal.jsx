import React from 'react'

import phone from '../assets/team/phone.JPG'
import email from '../assets/team/email.JPG'
import umsatzsteuer from '../assets/team/umsatzsteuer.JPG'
import bank from '../assets/team/bank.JPG'

const ImpressumModal = ({visible, onClose}) => {

    const handleOnClose = (e) => {
        if(e.target.id === "modal-body") onClose()
    }

    if (!visible) return null;
  
return (
    <div 
    id = "modal-body"
    onClick={handleOnClose} 
    className="fixed z-[10000] inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
        <div className="w-full h-4/5 overflow-scroll md:w-[1000px] lg:w-[1000px] gap-5 flex flex-wrap">
            <div className="bg-white p-2 rounded flex flex-col p-4 lg:w-[1200px]">
                
                <p><strong>Impressum</strong></p>
                <br></br>
                <p>
                    <span>
                        <u>Angaben gem. § 5 TMG:</u>
                    </span>
                </p>
                <p>&nbsp;</p>
                <p>Sequantrix GmbH</p>
                <p>Pauwelsstrasse 17</p>
                <p>52074 Aachen</p>
                <p>&nbsp;</p>
                <p>
                    <span><u>Kontaktaufnahme:</u></span>
                </p>
                <p>&nbsp;</p>
                <p>Telefon: <img src={phone} className="w-1/4"/></p>
                <br></br>
                <p>E-Mail: <img src={email} className="w-1/6"/></p>
                <br></br>
                <p>Internet: www.sequantrix.bio</p>
                <p>&nbsp;</p>
                <p>Sitz: Aachen</p>
                <p>Registergericht: Amtsgericht Aachen</p>
                <p>Registernummer: HRB 26456</p>
                <p><strong>Ust-Ident-Nummer:</strong> <img src={umsatzsteuer} className="w-1/4"/></p>
                <p>Geschäftsführer: Dr. Michael Rheinnecker</p>
                <p>
                Betriebshaftpflichtversicherung: AXA Versicherung AG
                </p>
                <p>EU-Streitschlichtung: 
Die Sequantrix GmbH wird nicht an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilnehmen und ist hierzu auch nicht verpflichtet.
</p>
                {/* <p><span>&nbsp;</span></p><p>
                    <span>
                        <u>Umsatzsteuer-Identifikationsnummer gem. § 27 a Umsatzsteuergesetz:</u>
                    </span>
                </p>
                <p>&nbsp;</p>
                <p><img src={bank} className="w-1/4"/></p>
                 */}
                <p>
                    <strong>
                        <span>&nbsp;</span>
                    </strong>
                </p>
                <p><strong>Haftungsausschluss - Disclaimer:</strong></p>
                <p>&nbsp;</p>
                <p>
                    <u>Haftung für Inhalte</u>
                </p>
                <p><strong>&nbsp;</strong></p>
                <p>
                    Alle Inhalte unseres Internetauftritts wurden mit größter Sorgfalt und nach bestem Gewissen erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                </p>
                <p>
                    Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntniserlangung einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von den o.g. Rechtsverletzungen werden wir diese Inhalte unverzüglich entfernen.
                </p>
                <p>&nbsp;</p>
                <p>
                    <u>Haftungsbeschränkung für externe Links</u>
                </p>
                <p><strong>&nbsp;</strong></p>
                <p>
                    Unsere Webseite enthält Links auf externe Webseiten Dritter. Auf die Inhalte dieser direkt oder indirekt verlinkten Webseiten haben wir keinen Einfluss. Daher können wir für die „externen Links“ auch keine Gewähr auf Richtigkeit der Inhalte übernehmen. Für die Inhalte der externen Links sind die jeweilige Anbieter oder Betreiber (Urheber) der Seiten verantwortlich.
                </p>
                <p>
                    Die externen Links wurden zum Zeitpunkt der Linksetzung auf eventuelle Rechtsverstöße überprüft und waren im Zeitpunkt der Linksetzung frei von rechtswidrigen Inhalten. Eine ständige inhaltliche Überprüfung der externen Links ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht möglich. Bei direkten oder indirekten Verlinkungen auf die Webseiten Dritter, die außerhalb unseres Verantwortungsbereichs liegen, würde eine Haftungsverpflichtung ausschließlich in dem Fall nur bestehen, wenn wir von den Inhalten Kenntnis erlangen und es uns technisch möglich und zumutbar wäre, die Nutzung im Falle rechtswidriger Inhalte zu verhindern.
                </p>
                <p>
                    Diese Haftungsausschlusserklärung gilt auch innerhalb des eigenen Internetauftrittes „<em>www.sequantrix.bio</em>“ gesetzten Links und Verweise von Fragestellern, Blogeinträgern, Gästen des Diskussionsforums. Für illegale, fehlerhafte oder unvollständige Inhalte und insbesondere für Schäden, die aus der Nutzung oder Nichtnutzung solcherart dargestellten Informationen entstehen, haftet allein der Diensteanbieter der Seite, auf welche verwiesen wurde, nicht derjenige, der über Links auf die jeweilige Veröffentlichung lediglich verweist.
                </p>
                <p>
                    Werden uns Rechtsverletzungen bekannt, werden die externen Links durch uns unverzüglich entfernt.
                </p>
                <p>&nbsp;</p>
                <p>
                    <u>Urheberrecht</u>
                </p>
                <p>
                    <strong>&nbsp;</strong>
                </p>
                <p>
                    Die auf unserer Webseite veröffentlichen Inhalte und Werke unterliegen dem deutschen Urheberrecht (<a href="http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf">http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf</a>) . Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung des geistigen Eigentums in ideeller und materieller Sicht des Urhebers außerhalb der Grenzen des Urheberrechtes bedürfen der vorherigen schriftlichen Zustimmung des jeweiligen Urhebers i.S.d. Urhebergesetzes (<a href="http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf">http://www.gesetze-im-internet.de/bundesrecht/urhg/gesamt.pdf</a> ). Downloads und Kopien dieser Seite sind nur für den privaten und nicht kommerziellen Gebrauch erlaubt. Sind die Inhalte auf unserer Webseite nicht von uns erstellt wurden, sind die Urheberrechte Dritter zu beachten. Die Inhalte Dritter werden als solche kenntlich gemacht. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte unverzüglich entfernen.
                </p>
                <br></br>
                <p>
                    Dieses <a href="http://www.jurarat.de/muster-impressum">Impressum</a> wurde freundlicherweise von www.jurarat.de zur Verfügung gestellt.</p>
            </div>
        </div>
    </div>
  )
}

export default ImpressumModal