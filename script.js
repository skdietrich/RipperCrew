[cite_start]// Interactive Map Data [cite: 78, 114, 216, 615]
const locationData = {
    [cite_start]natchez: { title: "2720 North Natchez Avenue", desc: "The Lair. An attic 'chapel' reeking of candle wax, with pentagrams scratched into the rafters. [cite: 78, 480]" },
    division: { title: "Division Street", desc: "The Carnival of Vice. [cite_start]Where neon bleeds into shadow and the crew sized up their targets under flickering streetlights. [cite: 115]" },
    elmhurst: { title: "Suburban Elmhurst", desc: "The Shattered Shield. [cite_start]Where Lorraine Borowski's light was taken on a quiet Saturday morning. [cite: 615, 648]" },
    river: { title: "Chicago River Vacant Lot", desc: "First Blood. [cite_start]The site where Linda Sutton was found—surgical brutality marked with piano wire. [cite: 216, 233]" }
};

document.querySelectorAll('.map-point').forEach(point => {
    point.addEventListener('click', function() {
        const loc = this.getAttribute('data-loc');
        document.getElementById('loc-title').innerText = locationData[loc].title;
        document.getElementById('loc-desc').innerText = locationData[loc].desc;
        document.querySelectorAll('.map-point').forEach(p => p.style.background = 'var(--neon-red)');
        this.style.background = '#fff';
    });
});

[cite_start]// Surgeon's Cut Toggle logic [cite: 216]
function toggleProse(mode) {
    const original = document.getElementById('original-text');
    const surgeon = document.getElementById('surgeon-text');
    const btnOrig = document.getElementById('btn-orig');
    const btnSurg = document.getElementById('btn-surg');

    if (mode === 'surgeon') {
        surgeon.style.display = 'block';
        original.style.display = 'none';
        btnSurg.classList.add('active');
        btnOrig.classList.remove('active');
    } else {
        original.style.display = 'block';
        surgeon.style.display = 'none';
        btnOrig.classList.add('active');
        btnSurg.classList.remove('active');
    }
}