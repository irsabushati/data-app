import { Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { Fragment } from 'react';
import '../App.css';
import {useState,useEffect} from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddData from './AddData';

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

export default function Posts() {
    
  const [openAddModal, setOpenAddModal] = useState(false);

    // Material UI styling
    
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => setPosts(data))
    }, []);

    const addData = (newRow) => {
      setPosts((oldState) => {
        return [...oldState, newRow];
      })
    } 

    const deletePost = (id) => {
      setPosts(posts.filter(posts => posts.id !== id))
    }

  return (

    <> 
    <Button variant="outlined" color="inherit" onClick={()=> setOpenAddModal(true)}>Add data</Button>
    {openAddModal && <AddData closeAddModal={setOpenAddModal} addPost={addData} />} 
    <TableContainer sx={{ maxHeight: 465 }}>
    <Table stickyHeader aria-label="sticky table" className='table'>
        <TableHead>
            <StyledTableRow>
                <StyledTableCell><b>Title</b></StyledTableCell>
                <StyledTableCell><b>Description</b></StyledTableCell>
                <StyledTableCell className='column-3'><b>Actions</b></StyledTableCell>
            </StyledTableRow>
        </TableHead>
        <TableBody className='table-body'>
            {posts.map(post => (
              <StyledTableRow>
                <StyledTableCell>{post.title}</StyledTableCell>
                <StyledTableCell>{post.body}</StyledTableCell>
                <StyledTableCell className='column-3'> 
                <Button variant="outlined" color="inherit">Edit</Button>
                &nbsp;
                <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={() => deletePost(post.id)}>Delete</Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
    </Table>
    </TableContainer>
    </>
    
  );
}
