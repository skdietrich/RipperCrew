const intelligence = {
    natchez: {
        title: "2720 N. NATCHEZ AVE - THE ATTIC",
        desc: "Forensic logs confirm attic setup with clinical iconography. Primary base of operations for Robin Gecht."
    },
    division: {
        title: "DIVISION STREET - THE CARNIVAL",
        desc: "Red Dodge van surveillance confirmed. High contact density area between 2300 and 0400 hours."
    },
    elmhurst: {
        title: "ELMHURST - PERIMETER BREACH",
        desc: "Point of abduction for Lorraine Borowski. Suburban safety protocols failed. Evidence recovered at disposal site later."
    }
};

function updateBrief(key) {
    const data = intelligence[key];
    document.getElementById('loc-title').innerText = data.title;
    document.getElementById('loc-desc').innerText = data.desc;
}