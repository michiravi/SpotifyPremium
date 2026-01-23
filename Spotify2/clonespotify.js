function mostra(id) {
    document.querySelectorAll('.right').forEach(r => {
        r.style.display = 'none';
    })
    document.getElementById(id).style.display = 'block';
}

function mostra2(id) {
    document.getElementById(id).style.display = 'flex';
}

function aggiornaBarra(audio) {
    document.getElementById("song-title").textContent = audio.dataset.title || "";
    document.getElementById("song-artist").textContent = audio.dataset.artist || "";
    var imgBarra = document.getElementById("song-img");
    if (audio.dataset.img) {
        imgBarra.src = audio.dataset.img;
    }
}

/*function togglePlay2(songId) {
    var audio = document.getElementById(songId);

    if (!audio.paused) {
        audio.pause();
        return;
    }

    document.querySelectorAll('audio').forEach(item => {
        item.pause();
        item.currentTime = 0;
    });

    audio.play();
    aggiornaBarra(audio);
    mostra2('barra');
}*/

function togglePlay(songId) {
    var audio = document.getElementById(songId);
    var icona = document.getElementById('iconaPlay');

    if (!audio.paused) {
        audio.pause();
        icona.className = "fas fa-play";
        return;
    }

    document.querySelectorAll('audio').forEach(item => {
        item.pause();
        item.currentTime = 0;
    });

    audio.play();
    document.getElementById('barra').dataset.currentSong = songId;
    icona.className = "fas fa-pause";
    document.querySelectorAll('[id^="icona-lista-"]').forEach(i => {
        i.className = "fas fa-play";
    });
    var iconaLista = document.getElementById('icona-lista-' + songId);
    if (iconaLista) {
        iconaLista.className = "fas fa-pause";
    }

    aggiornaBarra(audio);
    mostra2('barra');
}

function toggleMainBar() {
    var songId = document.getElementById('barra').dataset.currentSong;
    if (!songId) return;

    var audio = document.getElementById(songId);
    var iconaBarra = document.getElementById('iconaPlay');
    var iconaLista = document.getElementById('icona-lista-' + songId);

    if (audio.paused) {
        audio.play();
        iconaBarra.className = "fas fa-pause";
        if (iconaLista) iconaLista.className = "fas fa-pause";
    } else {
        audio.pause();
        iconaBarra.className = "fas fa-play";
        if (iconaLista) iconaLista.className = "fas fa-play";
    }
}
