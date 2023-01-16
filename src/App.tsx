import "./App.css";
import IconDice from "./assets/icon-dice.svg";
import PatternMobile from "./assets/pattern-divider-mobile.svg";
import PatternDesktop from "./assets/pattern-divider-desktop.svg";
import { useEffect, useState } from "react";

interface advice {
	slip: { id: number; advice: string };
}

function App() {
	const [advice, setAdvice] = useState<advice>({
		slip: {
			id: 1,
			advice: "Advice will be display",
		},
	});
	const [newAdviceRequest, setNewAdviceRequest] = useState(true);

	useEffect(() => {
		const getRandomAdvice = async () => {
			const response = await fetch(
				`https://api.adviceslip.com/advice/${Math.floor(Math.random() * 200) + 1}`
			);
			const data: advice = await response.json();
			setAdvice(data);
		};
		getRandomAdvice();
	}, [newAdviceRequest]);

	return (
		<div className="bg-DarkBlue font-Manrope min-h-screen max-h-fit flex justify-center items-center text-2xl p-4">
			<div className="bg-DarkGrayishBlue max-w-sm rounded-xl p-8 text-center">
				<h1 className="text-NeonGreen text-sm">Advice #{advice.slip.id}</h1>
				<h1 className="text-LightCya py-4">"{advice.slip.advice}"</h1>
				<picture>
					<source media="(min-width: 500px)" srcSet={PatternDesktop} />
					<img src={PatternMobile} alt="Pattern divider" />
				</picture>
				<div
					className="bg-NeonGreen rounded-full p-4 w-fit translate-y-[4rem] 
					-mt-10 mx-auto cursor-pointer hover:shadow-[0_0_25px_5px_rgba(82,255,169,0.8)]"
					onClick={() => setNewAdviceRequest((prev) => !prev)}>
					<img className="" src={IconDice} alt="dice icon" />
				</div>
			</div>
		</div>
	);
}

export default App;
