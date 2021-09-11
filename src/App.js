import React from 'react';
import "./assets/scss/style.scss";
import OnBoardingScreen from './pages/OnBoardingScreen';
import HomeScreen from "./pages/HomeScreen"
import BottomTabNavigator from './components/BottomTabNavigator';
import RouterComponent from './components/RouterWrapper';

function App() {
	return (
		<div className="w-100">
			<RouterComponent />
		</div>
	);
}

export default App;
