import React from 'react';
import { motion } from 'framer-motion';
import { FlexContainer } from './styles';
import Text from '../../../../../Text';
import { Design, FrontEnd, BackEnd, Services, SkillListType, SkillSection } from '../../../../../../content/Home';
// create prop for size of text and style (margin)
// make index global var that gets altered when each animation runs so that next animation can be based off that

interface SkillListProps {
  skill: SkillListType;
}
const SkillList = ({ skill }: SkillListProps): JSX.Element => {
  const items = skill.items;
  return (
    <div style={{ flexDirection: 'row' }}>
      <Text medium bold>
        {skill.title}
      </Text>
      {items.map((skillItem: string) => (
        <Text small>{skillItem}</Text>
      ))}
    </div>
  );
};
const Skills = (): JSX.Element => {
  return (
    <>
      <FlexContainer>
        {SkillSection.map((skill: SkillListType) => (
          <SkillList skill={skill} />
        ))}
      </FlexContainer>
    </>
  );
};

export default Skills;
