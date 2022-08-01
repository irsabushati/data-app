import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import '../App.css';
import Button from '@mui/material/Button';

export default function AddData({closeAddModal,addPost}) {

  const [addData, setAddData] = useState({
    title: ' ', 
    body: ' '
  })

  const handleAddDataChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newAddedData = {...addData};
    newAddedData[fieldName] = fieldValue;

    setAddData(newAddedData);
  }

  const handleAddSubmit = (event) => {
    console.log("event",event);
    event.preventDefault();

    const newRow = {
      
      title: addData.title,
      body: addData.body
    }

    addPost(newRow);
    closeAddModal(false)
  }
  
  return (
    <div className='modalBackground'>
    <div className='modalContainer'>
      <form onSubmit={handleAddSubmit}>
        <h1> Add new data</h1>
        <TextField id="demo-helper-text-misaligned-no-helper" label="Title" name='title' onChange={handleAddDataChange} sx={{ width: '41ch' }} required />
        <br></br>
        <br></br>
        <TextField id="demo-helper-text-misaligned-no-helper" label="Description" name='body' onChange={handleAddDataChange} sx={{ width: '41ch' }} required />
        <div className='buttons'>
          <Button variant="contained" color="inherit" type="submit" >Add</Button>
          <Button variant="outlined"  color="inherit" onClick={() => closeAddModal(false)}>Cancel</Button>
        </div>
      </form>
    </div>
    </div>
  )
}
