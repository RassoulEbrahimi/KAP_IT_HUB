// Data Source
const m365Tips = [
    {
        id: 1,
        app: 'Teams',
        icon: 'groups',
        iconColorClass: 'text-indigo-600 dark:text-indigo-400',
        iconBgClass: 'bg-indigo-50 dark:bg-indigo-900/30',
        tagClass: 'bg-slate-100 dark:bg-slate-700 text-text-secondary',
        tagText: 'Teams',
        title: 'Best Practices für Meetings',
        description: 'Lernen Sie, wie Sie Meetings effizient strukturieren, die richtigen Rollen zuweisen und Besprechungsoptionen sicher einstellen.',
        specialContent: '',
        detailedContent: `
                <div class="space-y-4">
                    <h3 class="font-bold text-lg">1. Vor dem Meeting</h3>
                    <ul class="list-disc list-inside space-y-1 text-sm text-text-secondary dark:text-slate-300">
                         <li><strong>Agenda erstellen:</strong> Kein Meeting ohne Agenda. Füge sie direkt im Termin ein.</li>
                         <li><strong>Besprechungsoptionen prüfen:</strong> Wer darf präsentieren? Wer muss im Wartebereich warten?</li>
                         <li><strong>Teilnehmerkreis kritisch prüfen:</strong> Nur notwendige Personen einladen. Für reine Info-Weitergabe reicht oft eine Mail.</li>
                    </ul>
                    <h3 class="font-bold text-lg">2. Während des Meetings</h3>
                    <ul class="list-disc list-inside space-y-1 text-sm text-text-secondary dark:text-slate-300">
                         <li><strong>Aufzeichnung starten:</strong> Wenn vereinbart, für abwesende Kollegen aufzeichnen.</li>
                         <li><strong>Notizen machen:</strong> Nutzen Sie Loop-Komponenten oder OneNote direkt im Meeting.</li>
                         <li><strong>Moderation:</strong> Halten Sie die Zeit im Blick und führen Sie durch die Agenda.</li>
                    </ul>
                </div>`
    },
    {
        id: 2,
        app: 'Outlook',
        icon: 'mail',
        iconColorClass: 'text-blue-600 dark:text-blue-400',
        iconBgClass: 'bg-blue-50 dark:bg-blue-900/30',
        tagClass: 'bg-slate-100 dark:bg-slate-700 text-text-secondary',
        tagText: 'Outlook',
        title: 'E-Mail Regeln effizient nutzen',
        description: 'Automatisieren Sie Ihren Posteingang: Nachrichten automatisch in Ordner verschieben, priorisieren oder weiterleiten.',
        specialContent: '',
        detailedContent: `
                <div class="space-y-4">
                    <p class="text-sm text-text-secondary dark:text-slate-300">Regeln helfen, den Posteingang sauber zu halten. So geht's:</p>
                    <ol class="list-decimal list-inside space-y-2 text-sm text-text-secondary dark:text-slate-300">
                         <li>Rechtsklick auf eine E-Mail, die Sie automatisch verschieben wollen.</li>
                         <li>Wählen Sie <strong>Regeln</strong> > <strong>Regel erstellen</strong>.</li>
                         <li>Wählen Sie die Bedingung (z.B. "Von [Absender]") und die Aktion (z.B. "In Ordner verschieben").</li>
                         <li>Klicken Sie auf <strong>OK</strong>.</li>
                    </ol>
                    <div class="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg border border-blue-100 dark:border-blue-800">
                        <strong class="text-blue-700 dark:text-blue-300">Tipp:</strong> Erstellen Sie eine Regel für "CC"-Mails, um diese in einen Ordner "Später lesen" zu verschieben.
                    </div>
                </div>`
    },
    {
        id: 3,
        app: 'SharePoint',
        icon: 'folder_open',
        iconColorClass: 'text-teal-600 dark:text-teal-400',
        iconBgClass: 'bg-teal-50 dark:bg-teal-900/30',
        tagClass: 'bg-slate-100 dark:bg-slate-700 text-text-secondary',
        tagText: 'SharePoint',
        title: 'Dokumenten-Versionierung',
        description: 'Verstehen Sie den Versionsverlauf, stellen Sie alte Dateiversionen wieder her und arbeiten Sie gleichzeitig an Dokumenten.',
        specialContent: '',
        detailedContent: `
            <div class="space-y-6">
                <p>SharePoint speichert automatisch Versionen Ihrer Dokumente. So gehen Sie damit um:</p>

                <div>
                    <h3 class="font-bold text-lg mb-2">Versionsverlauf nutzen</h3>
                    <ol class="list-decimal list-inside space-y-2 text-sm text-text-secondary dark:text-slate-300">
                        <li>Rechtsklick auf die Datei in der Liste.</li>
                        <li>Wählen Sie <strong>Versionsverlauf</strong>.</li>
                        <li>Sie sehen alle Speicherpunkte mit Datum und Bearbeiter.</li>
                        <li>Klicken Sie auf das Datum einer alten Version, um sie anzusehen oder <strong>Wiederherzustellen</strong>.</li>
                    </ol>
                </div>

                <div class="bg-teal-50 dark:bg-teal-900/20 p-4 rounded-lg border border-teal-100 dark:border-teal-800">
                    <h4 class="font-bold text-teal-700 dark:text-teal-300 mb-1">Gleichzeitiges Bearbeiten</h4>
                    <p class="text-sm text-text-secondary dark:text-slate-300">
                        Wenn Sie ein Dokument in Word/Excel Online öffnen, können Sie sehen, wo Kollegen gerade tippen (farbige Cursor). Es ist kein "Auschecken" mehr nötig!
                    </p>
                </div>
            </div>`
    },
    {
        id: 4,
        app: 'OneDrive',
        icon: 'cloud_sync',
        iconColorClass: 'text-sky-600 dark:text-sky-400',
        iconBgClass: 'bg-sky-50 dark:bg-sky-900/30',
        tagClass: 'bg-slate-100 dark:bg-slate-700 text-text-secondary',
        tagText: 'OneDrive',
        title: 'Dateien teilen & schützen',
        description: 'Sicheres Teilen von Dateien mit externen Partnern, Einrichten von Ablaufdaten und Passwörtern.',
        specialContent: '',
        detailedContent: `
            <div class="space-y-6">
                <p>Statt große Anhänge zu versenden, teilen Sie sichere Links über OneDrive:</p>

                <div>
                    <h3 class="font-bold text-lg mb-2">Sicheres Teilen</h3>
                    <ol class="list-decimal list-inside space-y-2 text-sm text-text-secondary dark:text-slate-300">
                        <li>Rechtsklick auf die Datei > <strong>Teilen</strong>.</li>
                        <li>Klicken Sie auf das Zahnrad-Symbol (Einstellungen), um Optionen zu sehen:
                            <ul class="list-disc list-inside ml-4 mt-1 text-xs opacity-80">
                                <li><strong>Jeder:</strong> Öffentlich (Vorsicht!)</li>
                                <li><strong>Personen in Kap IT Hub:</strong> Nur Kollegen.</li>
                                <li><strong>Bestimmte Personen:</strong> Nur Empfänger der Mail.</li>
                            </ul>
                        </li>
                        <li>Optional: Setzen Sie ein <strong>Ablaufdatum</strong> oder ein <strong>Passwort</strong> für externe Links.</li>
                    </ol>
                </div>

                <div class="bg-sky-50 dark:bg-sky-900/20 p-4 rounded-lg border border-sky-100 dark:border-sky-800 flex gap-3 items-start">
                    <span class="material-symbols-outlined text-sky-600">sync_lock</span>
                    <div>
                        <h4 class="font-bold text-sky-700 dark:text-sky-300 text-sm">Files On-Demand</h4>
                        <p class="text-xs text-text-secondary dark:text-slate-300 mt-1">
                            Dateien mit dem Wolken-Symbol ☁️ sind nur online und belegen keinen Platz auf Ihrem PC. Doppelklick lädt sie herunter.
                        </p>
                    </div>
                </div>
            </div>`
    },
    {
        id: 5,
        app: 'Loop',
        icon: 'loop',
        iconColorClass: 'text-purple-600 dark:text-purple-400',
        iconBgClass: 'bg-purple-50 dark:bg-purple-900/30',
        tagClass: 'bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-300',
        tagText: 'Tipp der Woche',
        title: 'Kollaborative Komponenten',
        description: 'Nutzen Sie Loop-Komponenten in Teams-Chats und Outlook-Mails für Echtzeit-Zusammenarbeit an Listen und Tabellen.',
        highlight: true,
        specialContent: '',
        detailedContent: `
                <div class="space-y-6">
                    <p><strong>Microsoft Loop</strong> ist eine transformative Co-Creation-Experience, die Teams, Inhalte und Aufgaben über Ihre Tools und Geräte hinweg zusammenbringt.</p>
                    
                    <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800">
                       <h4 class="font-bold text-purple-700 dark:text-purple-300 mb-2">Die 3 Elemente von Loop:</h4>
                       <ul class="list-disc list-inside text-sm space-y-1">
                         <li><strong>Komponenten:</strong> Tragbare Inhalte (Listen, Tabellen, Notizen), die in Chats, Mails oder Dokumenten synchron bleiben.</li>
                         <li><strong>Seiten:</strong> Flexible Canvas im Loop-Workspace für Dateien, Links und Daten.</li>
                         <li><strong>Arbeitsbereiche:</strong> Gemeinsame Räume für Projekte, um alles Wichtige an einem Ort zu sehen.</li>
                       </ul>
                    </div>

                    <div>
                        <h3 class="font-bold text-lg mb-2">Loop in Microsoft Teams</h3>
                        <p class="text-sm text-text-secondary dark:text-slate-300 mb-2">So nutzen Sie Loop-Komponenten im Chat für Echtzeit-Zusammenarbeit:</p>
                        <ol class="list-decimal list-inside space-y-1 text-sm text-text-secondary dark:text-slate-300">
                            <li>Öffnen Sie einen Chat in Teams.</li>
                            <li>Klicken Sie unter dem Eingabefeld auf das <strong>Loop-Symbol</strong> (Schleifen-Icon).</li>
                            <li>Wählen Sie eine Komponente (z.B. Checkliste, Tabelle, Absatz).</li>
                            <li>Geben Sie Inhalte ein und klicken Sie auf <strong>Senden</strong>. Jeder im Chat kann nun live editieren.</li>
                        </ol>
                    </div>

                    <div>
                        <h3 class="font-bold text-lg mb-2">Loop in Word (Web)</h3>
                        <p class="text-sm text-text-secondary dark:text-slate-300 mb-2">Betten Sie Live-Komponenten direkt in Ihre Dokumente ein:</p>
                        <ol class="list-decimal list-inside space-y-1 text-sm text-text-secondary dark:text-slate-300">
                            <li>Öffnen Sie ein Dokument in <strong>Word für das Web</strong>.</li>
                            <li>Platzieren Sie den Cursor an der gewünschten Stelle.</li>
                            <li>Gehen Sie auf den Reiter <strong>Einfügen</strong> > <strong>Loop-Komponente</strong>.</li>
                            <li>Wählen Sie den gewünschten Typ. Die Komponente ist nun live und kann auch in Teams kopiert werden.</li>
                        </ol>
                    </div>
                </div>`
    },
    {
        id: 6,
        app: 'Teams',
        icon: 'chat',
        iconColorClass: 'text-indigo-600 dark:text-indigo-400',
        iconBgClass: 'bg-indigo-50 dark:bg-indigo-900/30',
        tagClass: 'bg-slate-100 dark:bg-slate-700 text-text-secondary',
        tagText: 'Teams',
        title: 'Kanal vs. Gruppenchat',
        description: 'Ein Leitfaden zur Entscheidungsfindung: Wann sollten Sie einen neuen Kanal erstellen und wann reicht ein Gruppenchat?',
        specialContent: '',
        detailedContent: `
            <div class="space-y-6">
                <p>Die Wahl zwischen Chat und Kanal ist entscheidend für eine organisierte Kommunikation. Hier ist die Faustregel:</p>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="bg-indigo-50 dark:bg-indigo-900/20 p-4 rounded-lg border border-indigo-100 dark:border-indigo-800">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="material-symbols-outlined text-indigo-600 dark:text-indigo-400">chat</span>
                            <h4 class="font-bold text-indigo-700 dark:text-indigo-300">Gruppenchat</h4>
                        </div>
                        <ul class="list-disc list-inside text-sm space-y-1 text-text-secondary dark:text-slate-300">
                            <li><strong>Schnell & Informell:</strong> Für schnelle Absprachen ("Gehen wir Mittagessen?").</li>
                            <li><strong>Privat:</strong> Nur für eingeladene Personen sichtbar.</li>
                            <li><strong>Kurzlebig:</strong> Nachrichten verschwinden im Feed schnell nach oben.</li>
                            <li><strong>Dateien:</strong> Werden im persönlichen OneDrive gespeichert.</li>
                        </ul>
                    </div>

                    <div class="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-lg border border-purple-100 dark:border-purple-800">
                        <div class="flex items-center gap-2 mb-2">
                            <span class="material-symbols-outlined text-purple-600 dark:text-purple-400">tag</span>
                            <h4 class="font-bold text-purple-700 dark:text-purple-300">Kanal (Team)</h4>
                        </div>
                        <ul class="list-disc list-inside text-sm space-y-1 text-text-secondary dark:text-slate-300">
                            <li><strong>Strukturiert:</strong> Für Projekte, Themen oder Abteilungen.</li>
                            <li><strong>Transparent:</strong> Jeder im Team kann mitlesen und später einsteigen.</li>
                            <li><strong>Durchsuchbar:</strong> Diskussionen bleiben im Kontext (Threads).</li>
                            <li><strong>Dateien:</strong> Gehören dem Team (SharePoint).</li>
                        </ul>
                    </div>
                </div>

                <div class="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-100 dark:border-yellow-800">
                    <h4 class="font-bold text-yellow-800 dark:text-yellow-200 text-sm mb-1">Entscheidungshilfe:</h4>
                    <p class="text-sm text-yellow-700 dark:text-yellow-300">
                        Fragen Sie sich: <em>"Könnte diese Information für jemanden nützlich sein, der erst nächsten Monat zum Team stößt?"</em><br>
                        Wenn <strong>JA</strong> -> Nutzen Sie einen <strong>Kanal</strong>.<br>
                        Wenn <strong>NEIN</strong> -> Nutzen Sie einen <strong>Chat</strong>.
                    </p>
                </div>
            </div>`
    },
    {
        id: 7,
        app: 'Word',
        icon: 'description',
        iconColorClass: 'text-blue-700 dark:text-blue-400',
        iconBgClass: 'bg-blue-50 dark:bg-blue-900/30',
        tagClass: 'bg-slate-100 dark:bg-slate-700 text-text-secondary',
        tagText: 'Word',
        title: 'Intelligentes Schreiben',
        description: 'Nutzen Sie KI-gestützte Funktionen wie den Editor, Diktierfunktion und Übersetzer für bessere Dokumente.',
        specialContent: '',
        detailedContent: `
            <div class="space-y-6">
                <p><strong>Microsoft Word</strong> ist mehr als nur Textverarbeitung. Nutzen Sie diese intelligenten Features aus dem "Quick Guide":</p>
                
                <div class="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800">
                   <h4 class="font-bold text-blue-700 dark:text-blue-300 mb-2 flex items-center gap-2">
                       <span class="material-symbols-outlined">edit_note</span> Microsoft Editor
                   </h4>
                   <p class="text-sm text-text-secondary dark:text-slate-300 mb-2">Ihr persönlicher Schreibassistent für Grammatik und Stil.</p>
                   <ul class="list-disc list-inside text-sm space-y-1">
                     <li>Markiert Fehler (rot) und Stilschwächen (blau).</li>
                     <li>Gibt Vorschläge für prägnantere Formulierungen.</li>
                     <li><strong>Aktivieren:</strong> Reiter <em>Start</em> > <em>Editor</em>.</li>
                   </ul>
                </div>

                <div>
                    <h3 class="font-bold text-lg mb-2">Diktieren (Speech-to-Text)</h3>
                    <p class="text-sm text-text-secondary dark:text-slate-300 mb-2">Verfassen Sie Entwürfe schneller durch Sprechen:</p>
                    <ol class="list-decimal list-inside space-y-1 text-sm text-text-secondary dark:text-slate-300">
                        <li>Gehen Sie auf <strong>Start</strong> > <strong>Diktieren</strong> (Mikrofon-Icon).</li>
                        <li>Warten Sie auf den roten Aufnahmepunkt.</li>
                        <li>Sprechen Sie klar und deutlich (inkl. Satzzeichen wie "Punkt", "Neue Zeile").</li>
                    </ol>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class="border border-slate-200 dark:border-slate-700 p-3 rounded-lg">
                        <h4 class="font-bold text-sm mb-1">Plastischer Reader</h4>
                        <p class="text-xs text-text-secondary dark:text-slate-400">Unter <em>Ansicht</em> > <em>Plastischer Reader</em> können Sie den Fokus verbessern (Zeilenfokus, Seitenfarbe, Vorlesen).</p>
                    </div>
                    <div class="border border-slate-200 dark:border-slate-700 p-3 rounded-lg">
                        <h4 class="font-bold text-sm mb-1">Übersetzen</h4>
                        <p class="text-xs text-text-secondary dark:text-slate-400">Unter <em>Überprüfen</em> > <em>Übersetzen</em> können Sie Textabschnitte oder ganze Dokumente in eine andere Sprache konvertieren.</p>
                    </div>
                </div>
            </div>`
    }
];