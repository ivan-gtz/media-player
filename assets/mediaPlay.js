function mediaPlayer(config) {
  this.media = config.el;
  this.plugins = config.plugins || [];
  this._initPlugins();
}

mediaPlayer.prototype._initPlugins = function () {
  const player = {
    play: () => this.play(),
    pause: () => this.pause(),
    media: this.media,
    get muted() {
      return this.media.muted;
    },

    set muted(value) {
        this.media.muted = value;
    }
  }; 
   
  this.plugins.forEach((plugin) => {
    plugin.run(player);
  });
};
mediaPlayer.prototype.play = function () {
  this.media.play();
};

mediaPlayer.prototype.pause = function () {
  this.media.pause();
};  
mediaPlayer.prototype.togglePlay = function () {
  this.media.paused 
    ? this.play() 
    : this.pause()
};
mediaPlayer.prototype.mute = function () {
  this.media.muted = true;
};
mediaPlayer.prototype.unmute = function () {
  this.media.muted = false;
};
mediaPlayer.prototype.toggleMute = function () {
  this.media.muted
    ? this.unmute()
    : this.mute() 
};

export default mediaPlayer;
