    window.onload = () => {

        let videoPlayer = document.getElementById('camera');
        navigator.mediaDevices.getUserMedia({
                video: true,
                audio: true
            })
            .then(stream => {

                videoPlayer.srcObject = stream;
            })

        .catch(err => {
            console.log(err);
        })
    }