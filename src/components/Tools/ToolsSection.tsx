import Badge from '../Badge';

interface ToolsSectionProps {
	name: string;
	tools: string[];
}

const ToolsSection = ({ name, tools }: ToolsSectionProps): JSX.Element => {
	return (
		<div className="bg-[#111b1b] border border-sky-400 rounded-[25px] p-6">
			<div className="p-2">
				<p className="tools-section-header text-center mb-5 text-white">{name}</p>
				<div className="flex flex-wrap gap-3 justify-center">
					{tools.map((item) => (
						<Badge key={item} name={item} />
					))}
				</div>
			</div>
		</div>
	);
};

export default ToolsSection;
