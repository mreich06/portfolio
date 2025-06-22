type ServiceCardProps = {
	title: string;
	description: string;
	image: string;
};

const ServiceCard = ({ title, description, image }: ServiceCardProps) => {
	return (
		<div className="p-6 rounded-xl border border-white/10 backdrop-blur-md bg-gradient-to-br from-white/5 to-white/2 text-center hover:scale-[1.02] transition-all">
			<img src={image} alt={title} className="mx-auto w-10 h-10 mb-4" />
			<h3 className="text-xl font-semibold text-white">{title}</h3>
			<p className="text-md text-gray-400 mt-2">{description}</p>
		</div>
	);
};
export default ServiceCard;
