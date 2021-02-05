import React, { Component, useState } from 'react';
import Text from './../../Text';
import TextField from '@material-ui/core/TextField';
import { rgbToHex } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
  return (
    <div style={{ minHeight: 1000, paddingTop: 150 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          flexDirection: 'column',
        }}
      >
        <Text large>{`Let's chat!`}</Text>
        <Text small>{`Drop me a line if you have any questions or want to work together.`}</Text>
        {/* <div style={{ backgroundColor: 'white' }}> */}
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

        {/* </div> */}
      </div>
    </div>
  );
};

export default Contact;
