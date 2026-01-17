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
        specialContent: ''
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
        specialContent: ''
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
        specialContent: `
                <div class="rounded-lg bg-background-light dark:bg-background-dark p-3 text-xs text-text-secondary mb-4">
                    <ol class="list-decimal list-inside space-y-1">
                        <li>Öffne <strong>loop.microsoft.com</strong></li>
                        <li>Klicke auf <strong>"+"</strong> (Neuer Workspace)</li>
                        <li>Gib einen <strong>Titel</strong> ein und starte</li>
                    </ol>
                </div>`,
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
        specialContent: ''
    }
];
