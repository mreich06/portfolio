import Badge from '../Badge';

interface ToolsSectionProps {
	name: string;
	tools: string[];
}

const ToolsSection = ({ name, tools }: ToolsSectionProps): JSX.Element => {
	return (
		<div className="flex-1 w-full mt-3 border-1 border-sky-400 rounded-xl min-h-70 p-2">
			<div className="p-2">
				<p className="tools-section-header text-center mb-5">{name}</p>
				<div className="flex flex-wrap gap-3 justify-center">
					{tools.map((item) => (
						<Badge name={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ToolsSection;
