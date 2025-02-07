{

//play-pause

   $('button#play-pause').on('click', function() {
     helper.playPauseAndUpdate();
     $(this).attr('playState', player.playState);
   });

//previous

   $('button#previous').on('click', function() {
     if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex - 1;
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    helper.playPauseAndUpdate(nextSong);
   });

//next

   $('button#next').on('click', function() {
     if (player.playState !== 'playing') { return; }

    const currentSongIndex = album.songs.indexOf(player.currentlyPlaying);
    const nextSongIndex = currentSongIndex + 1;
    if (nextSongIndex >= album.songs.length) { return; }

    const nextSong = album.songs[nextSongIndex];
    helper.playPauseAndUpdate(nextSong);
   });

//time control

     $('#time-control input').on('input', function (event) {
            player.skipTo(event.target.value);
     });

//time display

     setInterval( () => {
            if (player.playState !== 'playing') { return; }
            const currentTime = player.getTime();
            const duration = player.getDuration();
            const percent = (currentTime / duration) * 100;
            $('#time-control .current-time').text(player.prettyTime(currentTime));
            $('#time-control input').val(percent);
     }, 1000);

//volume control

     $('#volume-control input').on('input', function(event) {
            player.setVolume(event.target.value)
     });

 }
