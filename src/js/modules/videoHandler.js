const videoElement = document.querySelector('.createx__video');
const videoWrapperElement = document.querySelector('.createx__video-wrapper');

export const videoHandler = () => {
  // Focus the video when it starts playing
  if (videoElement && videoWrapperElement) {
    try {
      videoElement.addEventListener('play', () => {
        console.log(2);
        videoWrapperElement.classList.add('playing');
      });

      // Add background overlay when the video is paused or ends
      videoElement.addEventListener('pause', () => {
        videoWrapperElement.classList.remove('playing');
      });

      videoElement.addEventListener('ended', () => {
        videoWrapperElement.classList.remove('playing');
      });

      // Handle spacebar key to control video playback
    } catch (error) {
      console.log(error.message);
    }
  }
};
