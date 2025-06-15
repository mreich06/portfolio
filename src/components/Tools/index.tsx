import { TechStack } from '../../data/techStack';
import ToolsSection from './ToolsSection';

const Tools = (): JSX.Element => {
	return (
		<div className="flex flex-col items-center p-10 max-w-[1200px] mx-auto relative m-10">
			<div className="absolute w-[800px] h-[400px] bg-sky-400 opacity-30 blur-[250px] rounded-full z-0 top-[25%] left-1/2 -translate-x-1/2" />

			<div className="w-full text-center max-w-[600px] mb-10 z-10">
				<h1 className="section-text mt-17">My Full Stack Tool Belt</h1>
				<p className="description mt-2">
					The tools I've been using over the past 4 years
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-[1200px] mx-auto z-10">
				{TechStack.map((section) => (
					<ToolsSection key={section.title} name={section.title} tools={section.tools} />
				))}
			</div>
		</div>
	);
};

export default Tools;
