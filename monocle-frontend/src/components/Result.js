import { Card, Container, Grid, List, ListItemText } from '@mui/material';
import InfoCard from './InfoCard'
import React from 'react';
import './Result.css';

export default function Result({ dataCollected, purposeOfData, highlights }) {
  const testList = ['Name', 'Credit Card', 'Payment Method', 'Location', 'Age', 'Address', 'address', 'Picture', 'School', 'Website', 'Cookie', 'IP', 'Payment Information', 'Financial Data'];

  //create a function to see if the word is in the testList array ignoring case and removing punctuation
  const isInList = (word) => {
    let wordNoPunctuation = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
    let wordNoPunctuationLower = wordNoPunctuation.toLowerCase();
    let testListLower = testList.map(word => word.toLowerCase());
    return testListLower.includes(wordNoPunctuationLower);
  }


//create a component to render each word in a string individually
  const highlightKeywords = (string) => {
    let words = string.split(' ');
    //return each word in the words array
    return words.map((word, index) => {
      //if the word is in the testList array, set its background color to yellow
      if (isInList(word)) {
        return <span> <b key={index} style={{backgroundColor: 'yellow'}}>{word}</b></span>
      } else {
        return <span key={index}>{' '+word}</span>
      }
    })
  }



  return (
      <Container sx={{marginBottom: '50px'}}>
        <h1>Monocle Results</h1>

        <h2>Privacy Policy Overview</h2>
        <p>A general overview of key points of the privacy policy.</p>
        <Grid container spacing={2} sx={{margin: '20px'}}>
          <Grid item xs={6}>
            <InfoCard title="Data Collected" itemList={dataCollected}/>
          </Grid>
          <Grid item xs={6}>
            <InfoCard title="How Data is used" itemList={testList}/>
          </Grid>
          <Grid item xs={6}>
            <InfoCard title="Data Retention" itemList={testList}/>
          </Grid>
          <Grid item xs={6}>
            <InfoCard title="Data Disclosure" itemList={testList}/>
          </Grid>
          <Grid item xs={6}>
            <InfoCard title="Data Access" itemList={testList}/>
          </Grid>
        </Grid>

        <h2>Privacy Policy Highlights</h2>
        <p>More detailed snippets of the policy we believe are important.</p>
        <Card sx={{padding: '10px'}}>
          <List className="highlights">
            {highlights.map((highlight, index) => (
              <ListItemText sx={{backgroundColor: (index%2) ? '#eeeeee' : '#FFFFFF'}} key={index}>{highlightKeywords(highlight)}</ListItemText>
            ))}
          </List>
        </Card>

      </Container>
  )
}
