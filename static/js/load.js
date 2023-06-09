const openWindowBtn = document.getElementById('openWindowBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const frame = document.getElementById('frame');

    // localstorage stuff
    if (localStorage.getItem('url')) {
      frame.src=localStorage.getItem('proxyLink')+xor.encode(localStorage.getItem('url'));
    }

    // new window thingy
    openWindowBtn.addEventListener('click', () => {
      window.open(frame.src);
    });

    // fullscreen stuff

    fullscreenBtn.addEventListener('click', () => {
      toggleFullscreen(); 
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'f' || event.key === 'F') {
        toggleFullscreen();
      }
    });


    // this function was %100 copied from stackoverflow lol
    function toggleFullscreen() {
      if (document.fullscreenElement) {
        // exit fullscreen
        if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
      } else {
        // enter fullscreen
        if (frame.requestFullscreen) {
        frame.requestFullscreen();
      } else if (frame.mozRequestFullScreen) {
        frame.mozRequestFullScreen();
      } else if (frame.webkitRequestFullscreen) {
        frame.webkitRequestFullscreen();
      } else if (frame.msRequestFullscreen) {
        frame.msRequestFullscreen();
      } else {
        alert("Your device/browser doesnt support fullscreen.")
      }
      }
    }