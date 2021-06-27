const Navbar = () => {
	return (
		<nav className="navbar">
			<div className="droidbot">
				<h1>DROID BOT</h1>
			</div>
			<div className="links">
				<a href="/">Home</a>
				<a href="https://github.com/rupakhetibinit/droidbot">Documentation</a>
				<a href="https://discord.com/oauth2/authorize?client_id=825383004812869652&scope=bot&permissions=379904&fbclid=IwAR0rF8wewZae30gnhEWKcX4RzIgLFNUn0vzd4c9AIDmOu3BUrIm46-NQ2aE">
					Invite
				</a>
			</div>
		</nav>
	);
};

export default Navbar;
