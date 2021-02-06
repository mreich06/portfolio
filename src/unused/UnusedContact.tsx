import React, { Component, useState } from 'react';
import Text from './../components/Text';
import TextField from '@material-ui/core/TextField';
import { rgbToHex } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from 'framer-motion';
import { CenterItems } from '../utils/styles';

const Contact = (): JSX.Element => {
  const useStyles = makeStyles((theme: any) => ({
    root: {
      background: 'black',
    },
    input: {
      background: 'rgb(24, 24, 24)',
      color: 'white',
    },
  }));
  const classes = useStyles();

  const variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const childVariants = {
    hidden: { y: 1000 },
    visible: {
      y: 0,
      transition: {
        type: 'tween',
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const textChildVariants = {
    hidden: { y: -1000 },
    visible: {
      y: 0,
      transition: {
        type: 'tween',
      },
    },
  };
  return (
    <div style={{ minHeight: 1000, paddingTop: 150 }}>
      <CenterItems>
        <motion.div variants={textVariants} initial="hidden" animate="visible">
          <motion.div variants={textChildVariants}>
            <Text large>{`Let's chat!`}</Text>
            <Text small>{`Drop me a line if you have any questions or want to work together.`}</Text>
          </motion.div>
        </motion.div>

        <motion.div variants={variants} initial="hidden" animate="visible">
          <motion.div variants={childVariants}>
            <div style={{ marginTop: 30 }}>
              <TextField
                id="filled-basic"
                variant="outlined"
                InputProps={{ className: classes.input }}
                className={classes.root}
                style={{ width: 700 }}
                defaultValue="Name"
              />
            </div>
          </motion.div>
          <motion.div variants={childVariants}>
            <div style={{ marginTop: 10 }}>
              <TextField
                id="filled-basic"
                variant="outlined"
                InputProps={{ className: classes.input }}
                className={classes.root}
                style={{ width: 700 }}
                defaultValue="Email"
              />
            </div>
          </motion.div>
          <motion.div variants={childVariants}>
            <div style={{ marginTop: 10 }}>
              <TextField
                id="outlined-multiline-static"
                multiline
                rows={7}
                variant="outlined"
                InputProps={{ className: classes.input }}
                className={classes.root}
                style={{ width: 700 }}
                defaultValue="Your message"
              />
            </div>
          </motion.div>
        </motion.div>
      </CenterItems>
    </div>
  );
};

export default Contact;
