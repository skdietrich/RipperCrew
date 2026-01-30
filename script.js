const locationData = {
    natchez: { title: "2720 North Natchez Avenue", desc: "The Lair. An attic 'chapel' reeking of candle wax, pentagrams on the rafters." },
    division: { title: "Division Street", desc: "The Carnival of Vice. Where neon bleeds into shadow and predators size up their prey." },
    elmhurst: { title: "Suburban Elmhurst", desc: "The Site of Abduction. Where the butterfly collection was left behind." },
    river: { title: "Chicago River Vacant Lot", desc: "First Blood. The clinical mutilation of Linda Sutton was discovered here." }
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