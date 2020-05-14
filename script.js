window.onload = () => {

    let peerEvent = (p) => {
        p.on('signal', (data) => {
            socket.emit("signal", data);
        })
    }

    function gotMedia(stream) {
        var peer1 = new SimplePeer({
            initiator: true,
            stream: stream
        })
        var peer2 = new SimplePeer()

        peer1.on('signal', data => {
            peer2.signal(data)
        })

        peer2.on('signal', data => {
            peer1.signal(data)
        })

        peer2.on('stream', stream => {
            // got remote video stream, now let's show it in a video tag
            const videoPlayer = document.querySelector('#remote')

            videoPlayer.srcObject = stream;

            videoPlayer.play()
        })


    }


    let videoPlayer = document.getElementById('camera');
    navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        })
        .then(stream => {

            videoPlayer.srcObject = stream;
            gotMedia(stream)

        })

        .catch(err => {
            console.log(err);
        })
}