import mediaPlayer from './mediaPlayer.js'

const video = document.querySelector("video")
const button = document.querySelector("button")

const player = new mediaPlayer({ el: video });
button.onclick = () => player.togglePlay();
