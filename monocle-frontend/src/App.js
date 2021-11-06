import React, { useState } from 'react';
import { TextField, Input, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, CircularProgress, Container, Box, Divider, Grid } from '@mui/material';
import { uploadPDF } from './firebase/storage';
import Result from './components/Result';
import './App.css';

function App() {
  // App State for input method
  const [ inputMethod, setInputMethod ] = useState('Link');
  const [ URL, setURL ] = useState('');
  const [ PDF, setPDF ] = useState(null);
  const [ PDFPath, setPDFPath ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ done, setDone ] = useState(false);

  const changeInput = (event, value) => {
    setInputMethod(value);
  }

  const onPDFChange = async (e) => {
    const file = e.target.files[0];

    if(file){
      setPDF(file);
    }
    else{
      setPDF(null);
    }
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    if(inputMethod === 'Link'){
      setLoading(true);
      console.log("URL:", URL);
      // axios fetch get
      setLoading(false);
      setDone(false);
    }
    else{
      if(PDF){
        setLoading(true);
        const pdfPath = await uploadPDF(PDF);
        setPDFPath(pdfPath);
        setPDF(null);
        console.log('Uploaded: ', pdfPath);
        // axios fetch get
        setLoading(false);
        setDone(false);
        return;
      }
      else{
        alert('Please choose a PDF');
        return;
      }
    }
  }

  return (
    <div>
      <div className="header">
        <img src="/MonocleLogo.png" height="200" width="200"/>
        <h1>Monocle: Privacy Policies Simplied</h1>
      </div>

      {loading ? 
        <div className="progress">
          <CircularProgress />
        </div>
      :
        (done ? 
          <Result />
        :
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
                  <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={onPDFChange}/>
                </label>
              }

            </div>
            <div className="button">
              <Button size="large" variant="contained" onClick={submitHandler}>
                Go
              </Button>
            </div>
          </div>
        )
      }

      

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
