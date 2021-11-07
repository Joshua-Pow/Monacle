import { Card, Container, Grid, List, ListItemText } from '@mui/material';
import InfoCard from './InfoCard'
import React from 'react';
import './Result.css';

export default function Result({ dataCollected, purposeOfData, highlights }) {
  const testList = ['Name', 'Address', 'Payment']

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
          <List>
            <ListItemText primary="Some Sentence we highlight"/>
            <ListItemText primary="Some Sentence we highlight2"/>
            <ListItemText primary="Some Sentence we highlight3"/>
            <ListItemText primary="Some Sentence we highlight4"/>
          </List>
        </Card>

      </Container>
  )
}
