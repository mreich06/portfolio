export interface SkillListType {
  title: string;
  items: string[];
}

export const Design: SkillListType = {
  title: 'Art & Design',
  items: ['Adobe Photoshop', 'Adobe Illustrator', 'Adobe InDesign', 'XP-Pen Pro'],
};
export const FrontEnd: SkillListType = {
  title: 'Front End',
  items: ['React', 'React Native', 'Github', 'Terminal', 'Typescript', 'VSCode'],
};
export const BackEnd: SkillListType = {
  title: 'Back End',
  items: ['Insomnia', 'GraphQL'],
};
export const Services: SkillListType = {
  title: 'Services',
  items: ['Web design / development', 'App design / development', 'Digital Artwork', 'Branding & Logo'],
};

export const SkillSection = [Design, FrontEnd, BackEnd];
