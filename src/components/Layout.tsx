import { Link, Outlet } from "react-router-dom";

export default function Layout() {
	return (
		<div>
			{/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
			<nav>
				<Link to="/">Home</Link>

			</nav>

			<hr />
			<Outlet />
		</div>
	);
}