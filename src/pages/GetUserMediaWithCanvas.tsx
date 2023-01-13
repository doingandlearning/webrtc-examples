import React from "react"

export default function GetUserMediaWithCanvas() {
	const videoRef = React.useRef<HTMLVideoElement>(null)
	const canvasRef = React.useRef<HTMLCanvasElement>(null)
	const [stream, setStream] = React.useState<MediaStream>()
	const constraints = { audio: false, video: true }

	React.useEffect(() => {
		if (!stream) return
		if (!videoRef.current) return
		videoRef.current.srcObject = stream
	}, [stream])

	const getUserMedia = async () => {
		try {
			setStream(await navigator.mediaDevices.getUserMedia(constraints))
		} catch (e: any) {
			console.log(e)
		}
	}

	const handleSnapshot = () => {
		const canvas = canvasRef.current
		const video = videoRef.current
		if (canvas && video) {
			canvas.width = video.videoWidth;
			canvas.height = video.videoHeight;
			canvas.getContext('2d')?.drawImage(video, 0, 0, canvas.width, canvas.height);
			console.log(canvas, video, stream)
		}
	}

	React.useEffect(() => {
		getUserMedia()
	}, [])

	return <div id="container">

		<h1>getUserMedia ⇒ canvas</h1>

		<video ref={videoRef} autoPlay></video>
		<div>
			<button onClick={() => handleSnapshot()}>Take snapshot</button>
		</div>
		<canvas ref={canvasRef}></canvas>

		<p>Draw a frame from the video onto the canvas element using the <code>drawImage()</code> method.</p>

		<p>The variables <code>canvas</code>, <code>video</code> and <code>stream</code> are logged on every snapshot, so you can
			inspect them from the console.</p>

	</div>
}