
function mediaPlayer(config) {
  this.media =config.el;
}

mediaPlayer.prototype.play = function () {
      this.media.play();
};
mediaPlayer.prototype.pause = function () {
      this.media.pause();
}; 
mediaPlayer.prototype.togglePlay = function () {
      (this.media.paused)
        ? this.play()
        : this.pause()
}; 

export default mediaPlayer;