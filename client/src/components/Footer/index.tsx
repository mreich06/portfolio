import { Socials, socialsList } from '../Hero';

const Footer = () => {
	return (
		<footer className="text-center py-4 xl:py-12 px-5 sm:px-7 md:px-8 lg:px-20 text-white space-y-6">
			<h3 className="text-xl font-bold text-sky-400">Maya Reich</h3>
			<Socials icons={socialsList} className="justify-center" />
			<div className="flex justify-center gap-4 flex-wrap text-sm text-gray-400">
				<p>📧 mayareich0604@gmail.com</p>
				<p>📞 +1 (859) 814-4719</p>
			</div>
			<p className="text-xs text-gray-600">
				Designed for international front-end & full stack job applications
			</p>
		</footer>
	);
};

export default Footer;
