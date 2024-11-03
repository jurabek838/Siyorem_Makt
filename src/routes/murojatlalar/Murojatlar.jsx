import "./App.css"
import { useState } from "react";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { CgTrashEmpty } from "react-icons/cg";

function createData(
  name: string,
  calories: string,
  fat: number,
  carbs: string,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('1', "Jurabeek Nematov", '+998900113861', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. ', <CgTrashEmpty className="table_trash_icon" />),
  createData('2', "Jurabeek Nematov", '+998900113861', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. ', <CgTrashEmpty className="table_trash_icon" />),
  createData('3', "Jurabeek Nematov", '+998900113861', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. ', <CgTrashEmpty className="table_trash_icon" />),
  createData('4', "Aslbek Boyjanov", '+998900113861', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. ', <CgTrashEmpty className="table_trash_icon" />),
];

const Murojat_table_two = ({language}) => {
  const [date, setDate] = useState(new Date());
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();
  return (

    <div className="Murojat_table_one_contentt">
      <div>
          <h2 className='Bugungi_two'> {language === "UZ" ? "Bugungi murojatlar" : "Applications today"} </h2>
        </div>
      <div className="Murojat_table_one">
        <div className="dfghjmbj">
      
          
        </div>
        <div className="murojat_table1">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow className="murojat_table">
                  <TableCell> <p className="suouu" >№</p> </TableCell>
                  <TableCell> <p className="suouu" >O’quvchi ismi</p> </TableCell>
                  <TableCell> <p className="suouu" >Telefon omern</p> </TableCell>
                  <TableCell> <p className="suouu" >Izoh</p> </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell className="table-cell-name">{row.calories}</TableCell>
                    <TableCell className="table-cell-phone">{row.fat}</TableCell>
                    <TableCell className="table-cell-comment">{row.carbs}</TableCell>
                    <TableCell className="table-cell-icon">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        
      </div>
      <div>
          <h2 className='Bugungi_two'>6.01.2024  {language === "UZ" ? "kungi murojatlar" : "day applications"}</h2>
        </div>
      <div className="Murojat_table_one">
        <div className="dfghjmbj">
         
       
        </div>
        <div className="murojat_table1">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow className="murojat_table">
                  <TableCell> <p className="suouu" >№</p> </TableCell>
                  <TableCell> <p className="suouu" >O’quvchi ismi</p> </TableCell>
                  <TableCell> <p className="suouu" >Telefon omern</p> </TableCell>
                  <TableCell> <p className="suouu" >Izoh</p> </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.name}
                    </TableCell>
                    <TableCell className="table-cell-name">{row.calories}</TableCell>
                    <TableCell className="table-cell-phone">{row.fat}</TableCell>
                    <TableCell className="table-cell-comment">{row.carbs}</TableCell>
                    <TableCell className="table-cell-icon">{row.protein}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
        
      </div>
    </div >
  )
}

export default Murojat_table_two