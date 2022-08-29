import React from 'react'
import CreateTask from './CreateTask'
import ListTask from './ListTask'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { useState } from 'react'
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
// import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
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


export default function Display() {

  function createObject(value, inputType) {
    setOject({ ...object, [inputType]: value });
  }

  const [object, setOject] = useState({
    TaskName: "",
    Description: "",
    Data: "",
  });


  return (

    <Grid2 container >
        <CreateTask />
        {/* <ListTask /> */}
    </Grid2>
  )
}
