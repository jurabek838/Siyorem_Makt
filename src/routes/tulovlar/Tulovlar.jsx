import "./Tulovlar.css"
import { MdOutlineSaveAlt } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
// import { IoIosArrowDown } from "react-icons/io";
// import { BsBoxArrowInDown } from "react-icons/bs";
// import { MdOutlineSaveAlt } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
// import { useState } from "react";
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
  createData('1', "Muxamadaliyev Ibroxim", '+998900113861', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. ', <CgTrashEmpty className="table_trash_icon" />),
  createData('2', "Muxamadaliyev Ibroxim", '+998900113861', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. ', <CgTrashEmpty className="table_trash_icon" />),
  createData('3', "Muxamadaliyev Ibroxim", '+998900113861', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. ', <CgTrashEmpty className="table_trash_icon" />),
  createData('4', "Muxamadaliyev Ibroxim", '+998900113861', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum nascetur faucibus quam nunc mattis. Etiam ultrices vel nisl nisl nec sed. ', <CgTrashEmpty className="table_trash_icon" />),
  createData( ),
  createData( ),
  createData( ),
];
const Tulovlar = ({language}) => {
  return (
    <div className="nggngnjgdm">
<div>
          <h2 className='Bugungi'> {language === "UZ" ? "To’lov qilish" : "Pay"} </h2>
        </div>

      <div className="input_cards" >
        
        <div>
          <p className="input_cener_text_top" > {language === "UZ" ? "O’quvchi" : "Reader"}   ismi</p>
          <input maxLength={30} className="input_ceter_ucul" type="text" placeholder="Muxamadaliyev Ibroxim" />
        </div>
        <div>
          <p className="input_cener_text_top" >  {language === "UZ" ? "Yo’nalish" : "Direction"}  </p>
          <div className="derdadd">  <input maxLength={10} className="input_ceter_ucul01" type="text" placeholder="Ona-tili" /><p className="arrov_input_border"><IoIosArrowDown className="arrov_input" /></p></div>
        </div>
        <div>
          <p className="input_cener_text_top" >  {language === "UZ" ? "Telefon raqam" : "Phone number"}  </p>
          <input maxLength={13} className="input_ceter_ucul" type="text" placeholder="+998900113861" />
        </div>
      
      </div>

      <div className="input_cards_two" >

        <div>
          <p className="input_cener_text_top" > {language === "UZ" ? "O’qituvchi ismi" : "Teacher name"}   </p>
          <input maxLength={30} className="input_ceter_ucul" type="text" placeholder="Ota-onasi ismi" />
        </div>

        <div>
          <p className="input_cener_text_top" > {language === "UZ" ? "O’qituvchi ismi" : "Teacher name"}   </p>
          <input maxLength={13} className="input_ceter_ucul" type="text" placeholder="++998900113861" />
        </div>

        <div className="new_pupil_child_two">


          <div className="werfghjkl">
            <button className="btn" >To’lov qilish</button>
          </div>
        </div>



      </div>

      <div className="tulovlarni_bajarish">
          <h2 className='tilgan_oy_utish'> {language === "UZ" ? "To’lov qilganlar" : "Teacher name "} </h2>
          <div className="weril">  <p className="input_search"> <IoSearch className="search_icons" /></p> <input maxLength={30} className="inputgred" type="text" placeholder="O’quvchi ismini kiriting" /></div>
        </div>
      

      <div className="Murojat_table_one_contentt">
   
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


    </div>
  )
}

export default Tulovlar