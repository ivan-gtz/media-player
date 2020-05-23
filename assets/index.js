import mediaPlayer from './mediaPlay.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video")
const button = document.querySelector("button")
const buttonMute = document.getElementById("mute")

const player = new mediaPlayer({ el: video, plugins: [
  new AutoPlay()
] });
button.onclick = () => player.togglePlay();
buttonMute.onclick = () => player.toggleMute();
