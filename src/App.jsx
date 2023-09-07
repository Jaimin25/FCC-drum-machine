import { useEffect, useState } from "react";
import "./App.css";

function App() {
	const [desc, setDesc] = useState("");
	const dataArr = [
		{
			keyTrigger: "Q",
			url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
			description: "Heater 1",
		},
		{
			keyTrigger: "W",
			url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
			description: "Heater 2",
		},
		{
			keyTrigger: "E",
			url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
			description: "Heater 3",
		},
		{
			keyTrigger: "A",
			url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
			description: "Heater 4",
		},
		{
			keyTrigger: "S",
			url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
			description: "Clap",
		},
		{
			keyTrigger: "D",
			url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
			description: "Open HH",
		},
		{
			keyTrigger: "Z",
			url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
			description: "Kick n' Hat",
		},
		{
			keyTrigger: "X",
			url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
			description: "Kick",
		},
		{
			keyTrigger: "C",
			url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
			description: "Closed HH",
		},
	];
	useEffect(() => {
		document.addEventListener("keydown", (event) => {
			if (
				dataArr.map((item) => item.keyTrigger).includes(event.key.toUpperCase())
			) {
				playSound(event.key.toUpperCase());
			}
		});
	}, []);

	function playSound(selector) {
		const audio = document.getElementById(selector);

		audio.play();
		setDesc(
			dataArr
				.filter((item) => item.keyTrigger === selector)
				.map((item) => item.description)
		);
	}

	return (
		<div className="App">
			<h1>Drum Machine</h1>
			<div id="drum-machine">
				<h2 id="display">{desc}</h2>
				<div className="drum-grid">
					{dataArr.map((item, index) => (
						<div
							key={item.keyTrigger}
							className="drum-pad"
							id={item.description}
							onClick={() => {
								playSound(item.keyTrigger);
							}}>
							{item.keyTrigger}
							<audio
								className="clip"
								id={item.keyTrigger}
								src={item.url}></audio>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
