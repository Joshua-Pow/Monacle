import { Card, Container, Grid, List } from '@mui/material';
import InfoCard from './InfoCard'
import React from 'react';
import './Result.css';

export default function Result({ results }) {

  return (
      <Container sx={{marginBottom: '50px'}}>
        <h1>Monocle Results</h1>

        <h2>Privacy Policy Overview</h2>
        <p>A general overview of key points of the privacy policy.</p>
        <Grid container spacing={2} sx={{margin: '20px'}}>
          <Grid item xs={6}>
            <InfoCard title="Data Collected" itemList={results['Data Collected']}/>
          </Grid>
          <Grid item xs={6}>
            <InfoCard title="How Data is used" itemList={results['Data Used']}/>
          </Grid>
          <Grid item xs={6}>
            <InfoCard title="Data Disclosure" itemList={results['Disclosure']}/>
          </Grid>
          <Grid item xs={6}>
            <InfoCard title="Data Rights" itemList={results['Data Rights']}/>
          </Grid>
        </Grid>

        <h2>Privacy Policy Highlights</h2>
        <p>More detailed snippets of the policy we believe are important.</p>
        <Card sx={{padding: '10px'}}>
          <List className="highlights">
            {/* {highlights.map((highlight, index) => (
              <ListItemText key={index}>{highlight}</ListItemText>
            ))} */}
          </List>
        </Card>

      </Container>
  )
}
