import About from './components/About/About';
import ContactSection from './components/ContactSection/ContactSection';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Tools from './components/Tools';

function App() {
	return (
		<div className="flex flex-col">
			<NavBar />
			<Hero />
			<Services />
			<About />
			<Tools />
			<Experience />
			<Projects />
			<ContactSection />
			<Footer />
		</div>
	);
}

export default App;
