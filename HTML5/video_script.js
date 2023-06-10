document.addEventListener('DOMContentLoaded', function() {
    
    const archivo_video = document.querySelector('#archivo_video');
    const reproducir_video = document.querySelector('#reproducir_video');
    const play = document.querySelector('#play');
    const pausa = document.querySelector('#pausa');
    const volumen_up = document.querySelector('#volumen_up');
    const volumen_down = document.querySelector('#volumen_down');

    archivo_video.addEventListener('change', handleFileSelect);

    // Mostramos el alert de "Video cargando..." cuando se origina el evento "loadstat"
    reproducir_video.addEventListener('loadstart', function() {
        alert('Video cargando...');
        reproducir_video.play();
    });


    reproducir_video.addEventListener('error', function() {
        alert("Error al cargar el vídeo");
    });

    play.addEventListener('click', function() {
        reproducir_video.play();
    });

    pausa.addEventListener('click', function() {
        reproducir_video.pause();
    });

    volumen_up.addEventListener('click', function() {
        if (reproducir_video.volume < 1)  {
            reproducir_video.volume = reproducir_video.volume+0.1;
        } 
    });

    volumen_down.addEventListener('click', function() {
        if (reproducir_video.volume > 0) {
            reproducir_video.volume = reproducir_video.volume-0.1;
        } 
    });
});

function handleFileSelect(e) {
    const file = e.target.files[0];
    if (file.type.startsWith('video/')) {
        const fileURL = URL.createObjectURL(file);
        reproducir_video.src = fileURL;
    } else {
        alert('El archivo seleccionado no es un vídeo o no es un vídeo válido.');
    }
}