import { TechStack } from '../../data/techStack';
import ToolsSection from './ToolsSection';

const DesktopTools = (): JSX.Element => {
	return (
		<div className="hidden md:flex flex-col items-center p-10 max-w-[1200px] mx-auto">
			<div className="w-full text-center max-w-[600px] mb-10">
				<h1 className="section-text mt-17">My Full Stack Tool Belt</h1>
				<p className="description mt-2">
					The tools I've been using over the past 4 years
				</p>
			</div>
			<div className="grid grid-cols-2 gap-6 w-full max-w-[1200px] mx-auto">
				{TechStack.map((section) => (
					<ToolsSection key={section.title} name={section.title} tools={section.tools} />
				))}
			</div>
		</div>
	);
};

export default DesktopTools;
