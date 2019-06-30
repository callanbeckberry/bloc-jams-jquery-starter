class Helper {
  playPauseAndUpdate(song){
  player.playPause(song);
  const duration = player.currentlyPlaying.duration;
  $('#time-control .total-time').html(player.prettyTime(duration));
  }
}
const helper = new Helper();
