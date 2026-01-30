// intelligence Data Repository
const forensics = {
    'Natchez': {
        title: "2720 N. NATCHEZ AVE - ATTIC LAIR",
        body: "Entry point confirmed. Forensic analysis of the attic space revealed ritualistic iconography. Gecht's primary base of operations. Clinical precision noted in the environmental setup."
    },
    'Division': {
        title: "DIVISION STREET - HUNTING GROUND",
        body: "The 'Carnival of Vice.' Surveillance logs from 1981 indicate the red Dodge van frequented this sector between 2300 and 0300 hours. High density of potential contact points."
    }
};

function updateMap(loc) {
    const titleEl = document.getElementById('intel-title');
    const bodyEl = document.getElementById('intel-body');
    const data = forensics[loc];

    // Reset animations
    titleEl.style.opacity = 0;
    bodyEl.style.opacity = 0;

    setTimeout(() => {
        titleEl.innerText = data.title;
        bodyEl.innerText = data.body;
        
        // Trigger fade in
        titleEl.style.transition = "opacity 0.5s";
        bodyEl.style.transition = "opacity 0.8s";
        titleEl.style.opacity = 1;
        bodyEl.style.opacity = 1;
    }, 200);
}

// Ensure the first location is loaded on startup
window.onload = () => {
    updateMap('Natchez');
};
