const source = 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8';
            const player = new Plyr('#player');
            var video = document.getElementById('player');
            if(Hls.isSupported()) {
               var hls = new Hls();
               hls.loadSource(source);
               hls.attachMedia(video);
               hls.on(Hls.Events.MANIFEST_PARSED,function() {
                   video.play();
                });
            }else if (video.canPlayType('application/vnd.apple.mpegurl')) {
               video.src = source;
               video.addEventListener('loadedmetadata',function() {
                   video.play();
                });
            }
export default source;