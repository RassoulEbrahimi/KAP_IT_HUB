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
        specialContent: ''
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
        specialContent: ''
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
