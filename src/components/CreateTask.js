import * as React from "react";
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

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

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





export default function CreateTask() {
  const [object, setOject] = useState({
    TaskName: "",
    Description: "",
    Data: "",
  });

  const [task, setTask] = useState([]);

  function createObject(value, inputType) {
    setOject({ ...object, [inputType]: value });
  }

  function addTask() {
    setTask([...task, object]);
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2} columns={16}>
        <Grid xs={8}>
          <Item>
            <Grid container direction="column">
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "75ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  value={object.TaskName}
                  onChange={(e) => {
                    createObject(e.target.value, "TaskName");
                  }}
                  id="filled-basic"
                  label="Task-Name"
                  variant="filled"
                />
                <TextField
                  onChange={(e) => {
                    createObject(e.target.value, "Description");
                  }}
                  id="filled-basic"
                  label="Description"
                  variant="filled"
                />
                <TextField
                  onChange={(e) => {
                    createObject(e.target.value, "Data");
                  }}
                  id="filled-basic"
                  label="Data"
                  variant="filled"
                />
                <Button onClick={() => addTask()}>ADD TASK</Button>
              </Box>
            </Grid>
          </Item>
        </Grid>
        <Grid xs={8}>
          <Item>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Task-Name</StyledTableCell>
                    <StyledTableCell align="right"></StyledTableCell>
                    <StyledTableCell align="right">
                      
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Description
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      Data
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {task.map((e) => (
                    <StyledTableRow key={e.TaskName}>
                      <StyledTableCell component="th" scope="row">
                        {e.TaskName}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {""}
                      </StyledTableCell>
                      <StyledTableCell align="right"></StyledTableCell>
                      <StyledTableCell align="right">
                        {e.Description}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {e.Data}
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
