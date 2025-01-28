import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';

function App() {
	return (
		<div className="flex flex-col">
			<NavBar />
			<div className="p-40">
				<Hero />
			</div>
		</div>
	);
}

export default App;
