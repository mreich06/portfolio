import React, { Component, useState } from 'react';

import styled from 'styled-components';

import EmmaWatson from '../../../images/portfolio_image_1.jpg';
import Painting from '../../../images/portfolio_image_2.jpg';
import Drawing from '../../../images/portfolio_image_3.jpg';
import _throttle from 'lodash.throttle';

const Box = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 1em;
  background-color: #f9f07e;
  margin-left: auto;
  margin-right: auto;
`;

const Container = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 1em;
  background-color: #ffc0cb;
  margin-left: auto;
  margin-right: auto;
`;

const PortfolioItem = (): JSX.Element => {
  return <div style={{ minHeight: 500 }}></div>;
};

export default PortfolioItem;
