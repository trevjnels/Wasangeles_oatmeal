//makes the various get requests to different services (UAC etc and stores in DB)

if (false) {
	//time between 6am and 9 am
	setTimeout(
		fetch(`https://utahavalanchecenter.org/forecast/${this.state.region}/json`)
			.then((data) => data.json())
			.then((jsond) => {
				this.setState({
					UACResults : {}
				});
			}),
		900000 //make the fetch every 15 min
	);
}
