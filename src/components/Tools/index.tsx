import DesktopTools from './DesktopTools';
import MobileTools from './MobileTools';

const Tools = (): JSX.Element => {
	return (
		<>
			<MobileTools />
			<DesktopTools />
		</>
	);
};

export default Tools;
