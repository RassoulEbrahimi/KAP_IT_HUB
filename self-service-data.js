const serviceCatalog = [
    {
        id: "notebook_request",
        title: "Neues Notebook beantragen",
        description: "Standard-Notebooks für neue Mitarbeiter oder Austauschgeräte bei Defekt anfordern.",
        icon: "laptop_mac",
        iconColorClass: "text-primary",
        iconBgClass: "bg-blue-50 dark:bg-blue-900/30",
        category: "Hardware & Software",
        actionText: "Antrag starten",
        actionType: "modal", // 'modal' or 'toast'
        badge: { text: "Verfügbar", colorClass: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300" }
    },
    {
        id: "software_license",
        title: "Software-Lizenz anfordern",
        description: "Lizenzen für Adobe Creative Cloud, JetBrains, Visio oder Project beantragen.",
        icon: "extension",
        iconColorClass: "text-primary",
        iconBgClass: "bg-blue-50 dark:bg-blue-900/30",
        category: "Hardware & Software",
        actionText: "Antrag starten",
        actionType: "modal",
        badge: null
    },
    {
        id: "vacation_request",
        title: "Urlaubsantrag",
        description: "Erholungsurlaub, Sonderurlaub oder Freizeitausgleich einfach digital einreichen.",
        icon: "beach_access",
        iconColorClass: "text-purple-600 dark:text-purple-400",
        iconBgClass: "bg-purple-50 dark:bg-purple-900/30",
        category: "Personal & Office",
        actionText: "Antrag starten",
        actionType: "toast",
        toastMessage: "Urlaubsantrag wird geladen...",
        badge: null
    },
    {
        id: "homeoffice_request",
        title: "Homeoffice-Anmeldung",
        description: "Planen und melden Sie Ihre mobilen Arbeitstage für den kommenden Monat.",
        icon: "home_work",
        iconColorClass: "text-indigo-600 dark:text-indigo-400",
        iconBgClass: "bg-indigo-50 dark:bg-indigo-900/30",
        category: "Personal & Office",
        actionText: "Anmelden",
        actionType: "toast",
        toastMessage: "Home-Office Formular wird geladen...",
        badge: null
    }
];
