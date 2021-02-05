import React, { Component, useState, useEffect } from 'react';
import Text from '../../../../../Text';
import SkillBackground from '../Skills/SkillBackground';
import { BackgroundPanel } from './styles';
import { Design, FrontEnd, BackEnd, Services, SkillListType, SkillSection } from '../../../../../../content/Home';

interface SkillListProps {
  skill: SkillListType;
}

const SkillList = ({ skill }: SkillListProps): JSX.Element => {
  const items = skill.items;
  return (
    <SkillBackground>
      <Text medium bold>
        {skill.title}
      </Text>
      {items.map((skillItem: string) => (
        <Text small>{skillItem}</Text>
      ))}
    </SkillBackground>
  );
};

const DigitalArtPanel = (): JSX.Element => {
  return (
    // <div style={{ display: 'flex' }}>
    //   <div style={{ flex: 1, width: '25%' }}>
    //     <Text medium>{'Digital Art and Design'}</Text>
    //   </div>
    //   <div style={{ flex: 1, width: '75%' }}>
    //     <SkillBackground>
    //       <Text medium>{'Digital Art and Design'}</Text>
    //     </SkillBackground>
    //   </div>
    // </div>
    <div style={{ boxSizing: 'border-box' }}>
      <div style={{ width: '25%', float: 'left' }}>
        <Text medium>{'Digital Art & Design'}</Text>
      </div>
      <div style={{ width: '75%', float: 'left' }}>
        <BackgroundPanel>
          <Text small>{'Digital Art and Design'}</Text>
          <Text tiny>
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariaturn'
            }
          </Text>
        </BackgroundPanel>
      </div>
    </div>
  );
};

export default DigitalArtPanel;
