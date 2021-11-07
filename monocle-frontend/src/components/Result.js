import React from 'react';
//import { TextField } from '@mui/material';
import './Result.css';

export default function Result({ dataCollected, purposeOfData, highlights }) {
    // loop through strings
    return (
        <div className="result">
            {dataCollected}
            {purposeOfData}
            {highlights}
        </div>
    )
}
