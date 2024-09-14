const videoElement = document.querySelector('.createx__video');
const videoWrapperElement = document.querySelector('.createx__video-wrapper');

export const videoHandler = () => {
  if (!videoElement && !videoWrapperElement) {
    return;
  }

  videoElement.addEventListener('play', () => {
    videoWrapperElement.classList.add('playing');
  });

  videoElement.addEventListener('pause', () => {
    videoWrapperElement.classList.remove('playing');
  });

  videoElement.addEventListener('ended', () => {
    videoWrapperElement.classList.remove('playing');
  });
};
