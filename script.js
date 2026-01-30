const intelligenceFiles = {
    natchez: {
        title: "2720 N. NATCHEZ AVE - THE LAIR",
        desc: "Attic access confirmed. Surveillance reports smell of heavy incense and iron. Attic walls contain ritualistic markings. Gecht's primary residence.",
        intel: "THREAT LEVEL: EXTREME"
    },
    division: {
        title: "DIVISION STREET - THE CARNIVAL",
        desc: "High-density hunting ground. The red Dodge van has been spotted circling between 11 PM and 3 AM. Low police presence in 1981.",
        intel: "THREAT LEVEL: HIGH"
    },
    elmhurst: {
        title: "ELMHURST SUBURB - ABDUCTION",
        desc: "Point of contact for Lorraine Borowski. Suburban safety perimeter breached. No witnesses. One butterfly earring found in the gravel.",
        intel: "THREAT LEVEL: ELEVATED"
    },
    river: {
        title: "CHICAGO RIVER - DISPOSAL SITE",
        desc: "Vacant lot near the water. Linda Sutton's body recovered. Post-mortem suggests clinical precision. Sarah Novak on scene.",
        intel: "THREAT LEVEL: ACTIVE CRIME SCENE"
    }
};

function updateBrief(locationKey) {
    const data = intelligenceFiles[locationKey];
    const title = document.getElementById('loc-title');
    const desc = document.getElementById('loc-desc');
    const intel = document.getElementById('loc-intel');

    // Add a "typing" effect or fade
    title.style.opacity = 0;
    desc.style.opacity = 0;

    setTimeout(() => {
        title.innerText = data.title;
        desc.innerText = data.desc;
        intel.innerText = data.intel;
        intel.style.display = 'block';
        
        title.style.opacity = 1;
        desc.style.opacity = 1;
    }, 200);
}