import React, { useState } from 'react';
import { TextField, Input, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Container, Box, Divider, Grid } from '@mui/material';
import './App.css';

function App() {
  // App State for input method
  const [inputMethod, setInputMethod] = useState('Link');
  const [ URL, setURL ] = useState('');
  const [ PDF, setPDF ] = useState('');

  const changeInput = (event, value) => {
    setInputMethod(value);
  }

  return (
    <div>
      <div className="header">
        <img src="/MonocleLogo.png" height="200" width="200"/>
        <h1>Monocle: Privacy Policies Simplied</h1>
      </div>

      <div className="policy-input">
        <FormControl component="fieldset">
          <FormLabel component="legend">Provide a Link or PDF</FormLabel>
          <RadioGroup 
            row aria-label="input-select" 
            name="row-radio-buttons-group" 
            value={inputMethod}
            onChange={changeInput}
          >
            <FormControlLabel value="Link" control={<Radio />} label="Link" />
            <FormControlLabel value="PDF" control={<Radio />} label="PDF" />
          </RadioGroup>
        </FormControl>
        <div>
          {inputMethod === 'Link' ?
            <TextField 
              id="outlined-basic" 
              label="Link" 
              variant="outlined" 
              placeholder="Enter a Link"
              onChange={(e) => setURL(e.target.value)}
            />
            :
            <label htmlFor="contained-button-file">
              <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(e) => console.log(e.target.value)}/>
            </label>
          }

        </div>
        <div className="button">
          <Button size="large" variant="contained" onClick={() => console.log('clicked')}>
            Go
          </Button>
        </div>
      </div>

        <Grid container sx={{backgroundColor: '#483434', padding: '20px'}}>
          <Grid item xs={4}>
            <h1 className="whiteText">What is Monocle?</h1>
          </Grid>
          <Grid item xs={8}>
            <h4 className="whiteText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vulputate ut pharetra sit. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Arcu risus quis varius quam quisque id. Cras fermentum odio eu feugiat pretium nibh ipsum. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Ultricies mi eget mauris pharetra et ultrices. Venenatis a condimentum vitae sapien. Lectus proin nibh nisl condimentum id venenatis a condimentum. Enim neque volutpat ac tincidunt vitae semper quis. Volutpat lacus laoreet non curabitur. Leo urna molestie at elementum eu facilisis sed odio morbi. A iaculis at erat pellentesque adipiscing commodo elit at. Facilisi nullam vehicula ipsum a arcu cursus.</h4>
          </Grid>
        </Grid>

        <Grid container sx={{backgroundColor: '#6B4F4F', padding: '5px'}}>
          <Grid item xs={4}>
          <h1 className="whiteText">How does it work?</h1>
          </Grid>
          <Grid item xs={8}>
            <h4 className="whiteText">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Diam vulputate ut pharetra sit. Dolor sed viverra ipsum nunc aliquet bibendum enim facilisis. Arcu risus quis varius quam quisque id. Cras fermentum odio eu feugiat pretium nibh ipsum. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Ultricies mi eget mauris pharetra et ultrices. Venenatis a condimentum vitae sapien. Lectus proin nibh nisl condimentum id venenatis a condimentum. Enim neque volutpat ac tincidunt vitae semper quis. Volutpat lacus laoreet non curabitur. Leo urna molestie at elementum eu facilisis sed odio morbi. A iaculis at erat pellentesque adipiscing commodo elit at. Facilisi nullam vehicula ipsum a arcu cursus.</h4>
          </Grid>
        </Grid>
    </div>
  );
}

export default App;
