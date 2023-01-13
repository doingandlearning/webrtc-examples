import { Link } from "react-router-dom";

export default function Home() {
	return (
		<div>
			<h2>WebRTC Samples converted to React</h2>
			<p>The following is a selection of the samples found at <a href="https://webrtc.github.io/samples">WebRTC Samples</a> moved from vanilla JS to a React context.</p>
			<p>The hope is that these will help support a deeper understanding of WebRTC and how to implement it in React.</p>

			<ul>
				<li>
					<Link to="/getusermedia">Basic getUserMedia demo</Link>
				</li>
			</ul>
		</div>
	);
}
