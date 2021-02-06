import React, { useState } from 'react';
import Text from '../../../Text';

interface PortfolioItemSectionProps {
  title: string;
  date: string;
  description: string;
}
const PortfolioItemSection = ({ title, date, description }: PortfolioItemSectionProps): JSX.Element => {
  return (
    <div style={{ flex: 1 }}>
      <div style={{ width: 500, marginLeft: 10 }}>
        <Text large textAlign={'left'}>
          {title}
        </Text>
        <Text medium textAlign={'left'}>
          {date}
        </Text>
        <Text small textAlign={'left'}>
          {description}
        </Text>
      </div>
    </div>
  );
};

export default PortfolioItemSection;
