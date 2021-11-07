import React, { useState } from 'react';
import { TextField, Input, Button, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, CircularProgress, Container, Box, Divider, Grid, formControlClasses } from '@mui/material';
import { uploadPDF } from './firebase/storage';
import { parseLink, parsePDF } from './services/parse';
import Result from './components/Result';
import './App.css';

const dummyData = {
  dataCollected: ["name", "phone number", "address", "location"],
  purposeOfData: ["improvement in customer service", "speed"],
  highlights: ["Lorem ipsum dolor sit amet", "consectetur adipiscing elit", "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"]
}

const tempURL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

function App() {
  // App State for input method
  const [ inputMethod, setInputMethod ] = useState('Link');
  const [ URL, setURL ] = useState('');
  const [ PDF, setPDF ] = useState('');
  const [ PDFPath, setPDFPath ] = useState('');
  const [ loading, setLoading ] = useState(false);
  const [ done, setDone ] = useState(false);
  const [ dataCollected, setDataCollected ] = useState('');
  const [ purposeOfData, setPurposeOfData ] = useState('');
  const [ highlights, setHighlights ] = useState('');

  const changeInput = (event, value) => {
    setInputMethod(value);
  }

  const onPDFChange = async (e) => {
    const file = e.target.files[0];

    if(file){
      setPDF(file);
    }
    else{
      setPDF('');
    }
  }

  const linkHandler = async () => {
    setLoading(true);
    const result = await parseLink(URL);
    // console.log(result[0]);
    setDataCollected(result[0]);
    // setPurposeOfData(result.drinks[0].strInstructionsDE);
    // setHighlights(result.drinks[0].strInstructionsIT);
    setLoading(false);
    setDone(true);
  }

  const pdfHandler = async () => {
    setLoading(true);
    const pdfPath = await uploadPDF(PDF);
    setPDFPath(pdfPath);
    setPDF('');
    console.log('Uploaded: ', pdfPath);
    // axios fetch get
    const result = await parsePDF(pdfPath);
    // setDataCollected(result.drinks[0].strInstructions);
    // setPurposeOfData(result.drinks[0].strInstructionsDE);
    // setHighlights(result.drinks[0].strInstructionsIT);
    console.log(result);
    setLoading(false);
    setDone(true);
  }

  const submitHandler = async (e) => {
    e.preventDefault();

    if(inputMethod === 'Link' && URL === ''){
      alert('Please enter a link');
      return;
    }

    if(inputMethod === 'PDF' && PDF === ''){
      alert('Please attach a PDF');
      return;
    }

    if(inputMethod === 'Link'){
      linkHandler();
    }
    else{
      if(PDF){
        pdfHandler();
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
          <div className="input">
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
      }

      {done ? <Result dataCollected={dataCollected} purposeOfData={purposeOfData} highlights={highlights} /> : null}

      <Grid container spacing={2} sx={{backgroundColor: '#483434', padding: '20px'}}>
          <Grid item xs={4}>
            <h1 className="whiteText">What is Monocle?</h1>
          </Grid>
        <Grid item xs={8}>
          <h4 className="whiteText">
            Ever wonder what you agree to in those privacy policies you don't read? <br/>
            Monocle reduces these lengthly documents down the the most important information about the safety and privacy of your data.
            Simply link the privacy policy website, or upload a PDF and we will scan it and give you a summary of the most important parts of the policy that you should know.
            We focus on showing information such as what data they collect, purpose of data being collected, how it is stored and affiliated companies who have access to the data.
          </h4>
        </Grid>
      </Grid>

      <Grid container sx={{backgroundColor: '#6B4F4F', padding: '20px'}}>
        <Grid item xs={4}>
        <h1 className="whiteText">How does it work?</h1>
        </Grid>
        <Grid item xs={8}>
          <h4 className="whiteText">
            For Monocle, we have built an algorithm to parse the text of the policy privacy. 
            The algorithm looks for specific keywords and pulls out the sentence based on if we think it is important enough for the user.
            To get the text, if a link is provided, we scrape the website and pull the text. If a PDF is provided, we parse the pdf file for the text.
            Once we get the text, we run all the text through our algorithm to determine the key parts of the policy.
          </h4>
        </Grid>
      </Grid>

      <footer>
        <Grid container alignItems="center" sx={{backgroundColor: '#292121', paddingX : '15px'}}>
          <Grid item xs={12}>
          <h4 className="whiteText">MONOCLE - NEWHACKS 2021</h4>
          </Grid>
        </Grid>
      </footer>
    </div>
  );
}

export default App;
