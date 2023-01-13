import React from "react"

export default function GetUserMedia() {
	const [errorMsg, setErrorMsg] = React.useState("")
	const [stream, setStream] = React.useState<MediaStream | null>()
	const videoRef = React.useRef<HTMLVideoElement>(null)
	const constraints = { audio: false, video: true }

	const handleStart = async () => {
		if (stream) return
		try {
			setStream(await navigator.mediaDevices.getUserMedia(constraints))
		} catch (e: any) {
			console.log(e)
		}
	}

	const handleCancel = () => {
		setStream(null)
	}

	React.useEffect(() => {
		if (!videoRef.current) return
		videoRef.current.srcObject = stream as MediaProvider
	}, [stream])

	return <div id="container">
		<h1>getUserMedia</h1>

		<div>
			<button onClick={() => handleStart()}>Open camera</button>
			<button onClick={() => handleCancel()}>Cancel camera</button>
		</div>
		<video autoPlay ref={videoRef} style={{ minHeight: 400 }} />

		{errorMsg && <div id="errorMsg"></div>}

		<p className="warning"><strong>Warning:</strong> if you're not using headphones, pressing play will cause feedback.</p>

		<p>Display the video stream from <code>getUserMedia()</code> in a video element.</p>

		<p>The <code>MediaStream</code> object <code>stream</code> passed to the <code>getUserMedia()</code> callback is in
			global scope, so you can inspect it from the console.</p>

	</div >
}