import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from "axios";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
// import AddButton from "./AddButton";
const DashboardTable = () => {
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/films/").then((data) => {
      console.log(data.data.results);
      setEmp(data.data.results);
    });
  }, []);

  console.log(emp)
  return (
    <Box
      style={{
        marginTop: "8%",
        marginLeft: "5%",
        marginRight: "5%",
        width: "90%",
      }}
    >
      <TableContainer>
        {/* <AddButton /> */}
        <Table>
          <TableHead>
            <TableRow style={{ background: "rgb(29,69,107)" }}>
              <TableCell style={{ color: "white" ,background:"#4D5875"}}>Name</TableCell>
              <TableCell style={{ color: "white",background:"#4D5875" }}>Director</TableCell>
              <TableCell style={{ color: "white" ,background:"#4D5875"}}>Release Date</TableCell>
              <TableCell style={{ color:"#4D5875" ,background:"#4D5875"}}>Release Date</TableCell>
              
            </TableRow>
          </TableHead>
          <TableBody>
             {emp.map((e) => {
              return (
                <TableRow>
                  <TableCell>{e.title}</TableCell>
                  <TableCell>{e.director}</TableCell>
                  <TableCell>{e.release_date}</TableCell>
                 
                   <TableCell><MoreVertIcon/></TableCell>
                  
                </TableRow> 
              );
            })} 
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DashboardTable;