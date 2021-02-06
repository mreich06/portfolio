import React, { Component, useState } from 'react';
import Text from './../../Text';
import TextField from '@material-ui/core/TextField';
import { rgbToHex } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import Parallax from '../../Animation/Parallax';
import MoveY from '../../Animation/Parallax/MoveY';
import { CenterItems } from '../../../utils/styles';
import styled from 'styled-components';
import FadeInMoveY from '../../Animation/Parallax/FadeInMoveY';
import EmmaWatson from '../../../images/portfolio_image_1.jpg';
import Painting from '../../../images/portfolio_image_2.jpg';
import Drawing from '../../../images/portfolio_image_3.jpg';
import _throttle from 'lodash.throttle';
import { BackgroundBox } from './AboutMe/components/Skills/SkillBackground';
import { useInView } from 'react-intersection-observer';

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

const Portfolio = (): JSX.Element => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  const variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
        ease: 'easeOut',
        duration: 1.5,
      },
    },
  };
  return (
    <div style={{ minHeight: 4000, paddingTop: 150 }}>
      <CenterItems>
        <motion.div variants={variants} initial="hidden" animate="visible">
          <ol>
            <li>
              <motion.div variants={variants} style={{ marginTop: 20 }}>
                <div style={{ display: 'flex', padding: 70 }}>
                  {/* <div style={{ flex: 1 }}>
                  <MoveY input={[0, 300]} output={[0, 200]} xPos={500}></MoveY>
                </div> */}
                  <div style={{ flex: 1 }}>
                    <img src={EmmaWatson} height={512} width={362} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Text small>
                      {
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                      }
                    </Text>
                  </div>
                </div>
              </motion.div>
            </li>

            <li style={{ marginTop: 200 }}>
              <motion.div variants={variants} ref={ref} animate={inView ? 'visible' : 'hidden'}>
                <div style={{ display: 'flex', padding: 70 }}>
                  {/* <MoveY input={[0, 800]} output={[0, 100]} xPos={-500}></MoveY> */}
                  <div style={{ flex: 1, marginRight: 100 }}>
                    <Text small>
                      {
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                      }
                    </Text>
                  </div>
                  <div style={{ flex: 1 }}>
                    <img src={Painting} />
                  </div>
                </div>
              </motion.div>
            </li>

            <li style={{ marginTop: 300 }}>
              <motion.div variants={variants} ref={ref2} animate={inView2 ? 'visible' : 'hidden'}>
                <div style={{ display: 'flex', padding: 70 }}>
                  {/* <MoveY input={[0, 300]} output={[0, 200]} xPos={-500}></MoveY> */}
                  <div style={{ flex: 1 }}>
                    <img src={Drawing} height={384} width={530} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <Text small>
                      {
                        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                      }
                    </Text>
                  </div>
                </div>
              </motion.div>
            </li>
          </ol>
        </motion.div>
      </CenterItems>
    </div>
  );
};

export default Portfolio;

/* <MoveY input={[0, 300]} output={[0, 200]} xPos={-550}></MoveY>
<MoveY input={[0, 300]} output={[0, -100]} xPos={150}></MoveY> */

// import React, { Component, useState } from 'react';
// import Text from './../../Text';
// import TextField from '@material-ui/core/TextField';
// import { rgbToHex } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
// import { motion, ScrollMotionValues, useViewportScroll, useMotionValue, useTransform } from 'framer-motion';
// import Parallax from '../../Animation/Parallax';
// import MoveY from '../../Animation/Parallax/MoveY';
// import { CenterItems } from '../../../utils/styles';
// import styled from 'styled-components';
// import FadeInMoveY from '../../Animation/Parallax/FadeInMoveY';
// import EmmaWatson from '../../../images/portfolio_image_1.jpg';
// import Painting from '../../../images/portfolio_image_2.jpg';
// import Drawing from '../../../images/portfolio_image_3.jpg';

// const Box = styled.div`
//   width: 150px;
//   height: 150px;
//   border-radius: 1em;
//   background-color: #f9f07e;
//   margin-left: auto;
//   margin-right: auto;
// `;

// const Container = styled.div`
//   width: 150px;
//   height: 150px;
//   border-radius: 1em;
//   background-color: #ffc0cb;
//   margin-left: auto;
//   margin-right: auto;
// `;

// const Portfolio = (): JSX.Element => {
//   const { scrollY } = useViewportScroll();
//   const y = useMotionValue(0);
//   const transformY = useTransform(y, value => value / -1);
//   // const transformY = useTransform(y, value => value / -1);

//   // const transformY = useTransform(y, value => value / -1);

//   // const transformY = useTransform(y, value => value / -1);

//   const logoY = useTransform(y, value => value / -1);
//   const a = useTransform(y, value => value / 2);
//   const b = useTransform(y, value => value / 10);

//   return (
//     <div style={{ minHeight: 4000, paddingTop: 450 }}>
//       <CenterItems>
//         <div style={{ margin: 40 }}>
//           <motion.div style={{ y: logoY }}>
//             <Box />
//           </motion.div>
//         </div>
//         <img src={Painting} style={{ height: '40%', width: '40%' }} />
//         <img src={Drawing} style={{ height: '40%', width: '40%' }} />

//         <div style={{ margin: 40 }}>
//           <motion.div style={{ y: a }}>
//           <img src={EmmaWatson} style={{ height: '18%', width: '18%' }} />

//             <Box />
//           </motion.div>
//         </div>
//         <div style={{ margin: 40 }}>
//           <motion.div style={{ y: b }}>
//             <Box />
//           </motion.div>
//         </div>
//         <Box />
//         <MoveY input={[0, 300]} output={[0, 200]} xPos={-550}></MoveY>
//       </CenterItems>
//     </div>
//   );
// };

// export default Portfolio;

// {
//   /* <MoveY input={[0, 300]} output={[0, 200]} xPos={-550}></MoveY>
// <MoveY input={[0, 300]} output={[0, -100]} xPos={150}></MoveY> */
// }
