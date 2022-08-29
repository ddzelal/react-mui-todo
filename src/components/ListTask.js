import React from 'react'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
// import { useState } from 'react';
// import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
// import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
// import { styled } from '@mui/material/styles';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
// import Paper from '@mui/material/Paper';
import Checkbox from "@mui/material/Checkbox";
import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";

export default function ListTask() {

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const label = { inputProps: { "aria-label": "Checkbox demo" } };

////OVO JE SVE ZA TABEKU

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
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));



    function addTask() {
        setTask([...task, object]);
        setEmpty(() => "");
      }
    
      function removeTask(i){
        let remArr = [...task]
         let novi = remArr.filter(el =>  el !== task[i] )
        
         setTask(novi)
      }

      const [empty, setEmpty] = useState();
      const [task, setTask] = useState([]);
      const [object, setOject] = useState({
        TaskName: "",
        Description: "",
        Data: "",
      });

    

  return (
    <Grid2 container >
    <Grid xs={8}>
          <Item>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Task-Name</StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                    <StyledTableCell align="right">Description</StyledTableCell>
                    <StyledTableCell align="right">Data</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                    {task.map((e , i) => (
                    <StyledTableRow key={e.TaskName}>
                      <StyledTableCell component="th" scope="row">
                        {e.TaskName}
                        <Checkbox {...label} defaultChecked />
                        <Stack direction="row" spacing={2}>
                        <Button onClick={()=> {removeTask(i)}} variant="outlined" color="error">
                          Delete 
                        </Button>
                      </Stack>
                      </StyledTableCell>
                      <StyledTableCell align="right">{""}</StyledTableCell>
                      <StyledTableCell align="right"></StyledTableCell>
                      <StyledTableCell align="right">
                        {e.Description}
                      </StyledTableCell>
                      <StyledTableCell align="right">{e.Data}</StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Item>
        </Grid>
    </Grid2>
  )
}
