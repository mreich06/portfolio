import About from './components/About/About';
import ContactSection from './components/ContactSection/ContactSection';
import Experience from './components/Experience';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Tools from './components/Tools';

function App() {
	return (
		<div className="flex flex-col">
			<NavBar />
			<Hero />
			<About />
			<Tools />
			<Experience />
			<Projects />
			<ContactSection />
		</div>
	);
}

export default App;
