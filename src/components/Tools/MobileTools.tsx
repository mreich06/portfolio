import { TechStack } from '../../data/techStack';
import ToolsSection from './ToolsSection';
const MobileProjects = (): JSX.Element => {
	return (
		<div className="md:hidden flex p-10 justify-center items-center">
			<div className="max-w-[600px]">
				<h1 className="section-text text-center mt-17">My Full Stack Tool Belt</h1>
				<p className="description text-center mt-2">
					The tools I've been using over the past 4 years
				</p>
				{TechStack.map((section) => (
					<ToolsSection key={section.title} name={section.title} tools={section.tools} />
				))}
			</div>
		</div>
	);
};

export default MobileProjects;
