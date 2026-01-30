const intelligence = {
    natchez: {
        title: "2720 N. NATCHEZ AVE - THE ATTIC",
        desc: "Forensic logs confirm attic setup with clinical iconography. Primary base of operations for Robin Gecht."
    },
    division: {
        title: "DIVISION STREET - THE CARNIVAL",
        desc: "Red Dodge van surveillance confirmed. High contact density area between 2300 and 0400 hours."
    }
};

function updateBrief(key) {
    const data = intelligence[key];
    document.getElementById('loc-title').innerText = data.title;
    document.getElementById('loc-desc').innerText = data.desc;
}