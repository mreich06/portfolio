import About from './components/About';
import ContactSection from './components/ContactSection';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Services from './components/Services';
import Tools from './components/Tools';
import { Toaster } from 'react-hot-toast';

function App() {
	return (
		<div className="flex flex-col">
			<Toaster position="top-right" />
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
