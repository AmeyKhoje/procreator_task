import React from 'react';
import "./assets/scss/style.scss";
import OnBoardingScreen from './pages/OnBoardingScreen';
import HomeScreen from "./pages/HomeScreen"
import BottomTabNavigator from './components/BottomTabNavigator';

function App() {
	return (
		<div className="w-100">
			<HomeScreen />
			<BottomTabNavigator />
		</div>
	);
}

export default App;
