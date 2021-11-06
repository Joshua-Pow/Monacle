import { TextField, Input, Button } from '@mui/material';
import './App.css';

function App() {
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
          />
        </div>
        <div className="or">
          OR
        </div>
        <div className="pdf-mode">
        <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" multiple type="file" />
          <Button variant="contained" component="span">
            Upload
          </Button>
        </label>
        </div>
    </div>
  );
}

export default App;
