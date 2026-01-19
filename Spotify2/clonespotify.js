function mostra(id) {
    document.querySelectorAll('.right').forEach(r => {
        r.style.display = 'none';
    })
    document.getElementById(id).style.display = 'block';
}
function togglePlay(songId) {
    var audio = document.getElementById(songId);
    if (!audio.paused) {
        audio.pause();
        return;
    }
    var allAudios = document.querySelectorAll('audio');
    allAudios.forEach(function(item) {
        item.pause();
        item.currentTime = 0; 
    });
    audio.play();
}