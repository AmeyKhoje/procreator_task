import React from 'react';
import "./assets/scss/style.scss";
import OnBoardingScreen from './pages/OnBoardingScreen';
import HomeScreen from "./pages/HomeScreen"

function App() {
	return (
		<div className="w-100">
			{/* <OnBoardingScreen /> */}
			<HomeScreen />
		</div>
	);
}

export default App;
