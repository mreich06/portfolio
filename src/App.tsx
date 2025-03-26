import About from './components/About/About';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Tools from './components/Tools';

function App() {
	return (
		<div className="flex flex-col">
			<NavBar />
			<Hero />
			<About />
			<Tools />
		</div>
	);
}

export default App;
