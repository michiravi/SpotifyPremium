document.addEventListener('DOMContentLoaded', function() {
    generaAudioTags();
});

function mostra(id) {
    document.querySelectorAll('.right').forEach(r => {
        r.style.display = 'none';
    })
    document.getElementById(id).style.display = 'block';
}

function mostra2(id) {
    document.getElementById(id).style.display = 'block';
}

function aggiornaBarra(audio) {
    document.getElementById("song-title").textContent = audio.dataset.title || "";
    document.getElementById("song-artist").textContent = audio.dataset.artist || "";
    var imgBarra = document.getElementById("song-img");
    if (audio.dataset.img) {
        imgBarra.src = audio.dataset.img;
    }
}

function togglePlay(songId) {
    var audio = document.getElementById(songId);
    var iconaBarra = document.getElementById('iconaPlay'); 
    var pulsanteLista = document.querySelector(`button[onclick="togglePlay('${songId}')"] i`);
    if (!audio.paused) {
        audio.pause();
        iconaBarra.className = "fas fa-play";
        if (pulsanteLista) pulsanteLista.className = "fas fa-play";
        return;
    }
    document.querySelectorAll('audio').forEach(item => {
        item.pause();
        item.currentTime = 0;
    });
    document.querySelectorAll('.play-btn i, .play i').forEach(i => {
        i.className = "fas fa-play";
    });
    audio.play();
    document.getElementById('barra').dataset.currentSong = songId;
    iconaBarra.className = "fas fa-pause";
    if (pulsanteLista) pulsanteLista.className = "fas fa-pause";
    aggiornaBarra(audio);
    mostra2('barra');
}

function toggleMainBar() {
    var songId = document.getElementById('barra').dataset.currentSong;
    if (!songId) return;
    var audio = document.getElementById(songId);
    var iconaBarra = document.getElementById('iconaPlay');
    var pulsanteLista = document.querySelector(`button[onclick="togglePlay('${songId}')"] i`);
    if (audio.paused) {
        audio.play();
        iconaBarra.className = "fas fa-pause";
        if (pulsanteLista) pulsanteLista.className = "fas fa-pause";
    } else {
        audio.pause();
        iconaBarra.className = "fas fa-play";
        if (pulsanteLista) pulsanteLista.className = "fas fa-play";
    }
}


const playlist = [
    { id: "intro", title: "INTRO (La Bella Vita)", artist: "Artie 5ive", img: "ascolto.jpg", file: "intro.mp3" },
    { id: "montecarlo", title: "MONTECARLO", artist: "Artie 5ive", img: "ascolto.jpg", file: "montecarlo.mp3" },
    { id: "brazy", title: "BRAZY (feat. Tony Boy)", artist: "Artie 5ive", img: "ascolto.jpg", file: "brazy.mp3" },
    { id: "ogniamicomio", title: "OGNI AMICO MIO", artist: "Artie 5ive", img: "ascolto.jpg", file: "ogniamicomio.mp3" },
    { id: "sognoamericano", title: "SOGNO AMERICANO", artist: "Artie 5ive", img: "ascolto.jpg", file: "sognoamericano.mp3" },
    { id: "fwss", title: "FW/SS25 (Freestyle)", artist: "Artie 5ive", img: "ascolto.jpg", file: "fwss.mp3" },
    { id: "tu", title: "TU", artist: "Artie 5ive", img: "ascolto.jpg", file: "tu.mp3" },
    { id: "areyoucrazy", title: "ARE YOU CRAZY? (feat. Capo Plaza)", artist: "Artie 5ive", img: "ascolto.jpg", file: "areyoucrazy.mp3" },
    { id: "dodgedurango", title: "DODGE DURANGO", artist: "Artie 5ive", img: "ascolto.jpg", file: "dodgedurango.mp3" },
    { id: "litorale", title: "LITORALE", artist: "Artie 5ive", img: "ascolto.jpg", file: "litorale.mp3" },
    { id: "davverodavvero", title: "DAVVERODAVVERO", artist: "Artie 5ive", img: "ascolto.jpg", file: "davverodavvero.mp3" },
    { id: "milanoaferragosto", title: "MILANO A FERRAGOSTO", artist: "Artie 5ive", img: "ascolto.jpg", file: "milanoaferragosto.mp3" },
    { id: "pieta", title: "PIETA (feat. Kid Yugi)", artist: "Artie 5ive", img: "ascolto.jpg", file: "pieta.mp3" },
    { id: "mama", title: "MAMA", artist: "Artie 5ive", img: "ascolto.jpg", file: "mama.mp3" },
    { id: "igot2go", title: "I GOT 2 GO", artist: "Artie 5ive", img: "ascolto.jpg", file: "igot2go.mp3" }
    
];

function generaAudioTags() {
    const container = document.getElementById('song-album');
    container.innerHTML = '';
    playlist.forEach(canzone => {
        const audio = document.createElement('audio');
        audio.id = canzone.id;
        audio.dataset.title = canzone.title;
        audio.dataset.artist = canzone.artist;
        audio.dataset.img = canzone.img;
        const source = document.createElement('source');
        source.src = canzone.file;
        source.type = 'audio/mpeg';
        audio.addEventListener('ended', riproduciSuccessiva);
        audio.appendChild(source);
        container.appendChild(audio);
    });
}

function riproduciSuccessiva() {
    const currentId = document.getElementById('barra').dataset.currentSong;
    if (!currentId) return;
    let currentIndex = playlist.findIndex(canzone => canzone.id === currentId);
    let nextIndex = (currentIndex + 1) % playlist.length;
    const nextSongId = playlist[nextIndex].id;
    var audioCorrente = document.getElementById(currentId);
    audioCorrente.pause(); 
    togglePlay(nextSongId);
}
