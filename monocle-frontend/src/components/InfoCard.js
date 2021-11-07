import { Card } from '@mui/material';
import React from 'react';

export default function ListCard({title, itemList}) {
  if(itemList === undefined || itemList.length <= 0) {
    return (null)
  }

  return (
    <Card sx={{padding: '10px'}}>
      <h3>{title}</h3>
      <ul>
        {itemList.map((item) => {
          return(<li>{item}</li>)
        })}
      </ul>
    </Card>
  )
}