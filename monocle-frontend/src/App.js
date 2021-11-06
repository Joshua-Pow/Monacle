import React, { useState } from 'react';
import { TextField, Input, Button } from '@mui/material';
import './App.css';

function App() {
  const [ URL, setURL ] = useState('');
  const [ PDF, setPDF ] = useState('');

  console.log(URL, PDF);
  return (
    <div>
        <div className="header">
          <h2>Monocle</h2>
        </div>
        <div className="url-mode">
          <TextField 
            id="outlined-basic" 
            label="URL" 
            variant="outlined" 
            placeholder="Enter a URL"
            onChange={(e) => setURL(e.target.value)}
          />
        </div>
        <div className="or">
          OR
        </div>
        <div className="pdf-mode">
          <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={(e) => console.log(e.target.value)}/>
          </label>
        </div>
        <div className="button">
          <Button size="large" variant="contained" color="success" onClick={() => console.log('clicked')}>
            Go
          </Button>
        </div>
    </div>
  );
}

export default App;
