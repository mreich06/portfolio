export interface NavLinkProps {
	number: string;
	label: string;
	id: string;
}

export const NavItems: NavLinkProps[] = [
	{ number: '01.', label: 'My Services', id: 'my-services' },
	{ number: '02.', label: 'About Me', id: 'about-me' },
	{ number: '03.', label: 'Tools', id: 'tools' },
	{ number: '04.', label: 'Experience', id: 'experience' },
	{ number: '05.', label: 'Projects', id: 'projects' },
	{ number: '06.', label: 'Contact', id: 'contact' },
];
