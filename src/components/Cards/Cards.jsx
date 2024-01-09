import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, Button } from '@mui/material';
import { useState } from 'react';
import styled from 'styled-components';
import { MdBloodtype } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";

const FotoAlumno = styled.img`
  max-width: 100%;
  max-height: 200px;
  width: auto;
  border-radius: 50%;
  border: 4px solid white;
  outline: 4px solid #065c2f;
`;

export default function Cards() {


  const [showContact1, setShowContact1] = useState(true);
  const [showContact2, setShowContact2] = useState(false);

  function ManageShow1(){
      setShowContact1(!showContact1)
      setShowContact2(false);
  }

  function ManageShow2(){
    setShowContact2(!showContact2)
    setShowContact1(false);
}

  return  <Box
  sx={{
    display: 'grid',
    gridGap: '0px 10px',
    gridTemplateColumns: 'repeat(2, 1fr)',
    width: '60%',
    padding: '20px',
    backgroundColor: '#0F8A4B',
    borderRadius: '20px',
    m: '0',
    border: '6px solid #065c2f',
    boxShadow: '8px 8px 4px rgba(0, 0, 0, 0.2)',
    '@media (max-width: 682px)': {
      width: '80%',
    },
    '@media (max-width: 502px)': {
      width: '100%',
    }, '@media (max-width: 512px)': {
      gridTemplateColumns: '1fr', width:'80%',
    }
  }}
>

    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:"center",gridRow: '1 / 2', gridColumn: '1 / 2', pb:"20px"}}>
      <Box><FotoAlumno src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Portrait_of_an_Iguana.jpg/640px-Portrait_of_an_Iguana.jpg" style={{maxHeight:"200px", width:"auto"}}/></Box>
    </Box>

    <Box sx={{gridRow: '2 / 3', gridColumn: '1 / 2'}}>
      <Typography gutterBottom variant="h4" component="div" align="center" sx={{color:'white'}}>
        <strong>Abigail Martínez Gómez</strong>
      </Typography>
        <Typography variant="h6" color="text.secondary" align="center">
          <span style={{ display: 'inline', padding:"2px 5px" }}>
            <strong>Alumno TUM Básico</strong>
          </span>
        </Typography>
        <Typography variant="h6" color="text.secondary" align="center">
          <span style={{ display: 'inline' }}>
          <strong>Las Águilas, Ciudad de México </strong>
          </span>
        </Typography>
      <Typography variant="h6" color="text.secondary" align="center">
      <strong>CURP:</strong> MAG00223044DFRTA44S
      </Typography>
      <Typography variant="h6" color="text.secondary" align="center">
      <strong>Matrícula:</strong> TUMB0003221943 <br/>
      </Typography>
    </Box>

    <Box  sx={{ display: 'flex', backgroundColor: 'white', borderRadius: '12px 12px 0 0', 
    p:'10px', pl:'15px', mb:"0", border: "3px solid #065c2f", borderBottom:"0", flexDirection:"column",
    gridRow: '1 / 2', gridColumn: '2 / 3', position:"relative", top:"5px", '@media (max-width: 512px)': {
      gridRow: '3 / 4', gridColumn: '1 / 2'
    } }}>
      
      <Box sx={{display:"flex", alignItems:"center",  mb:"10px", justifyContent:"center"}}>
        <MdBloodtype color="#CE1126" size={30} />
        <strong>Tipo de sangre:{'\u00A0\u00A0'}</strong> A+
      </Box>

      <Box sx={{display:"flex", alignItems:"center" , pb:"6px"}}>
        <FaDotCircle color="#CE1126" size={5} style={{ marginRight: '5px' }} />
        <Typography variant="body"><strong>Edad: </strong>18 años </Typography>
      </Box>

      <Box sx={{display:"flex", alignItems:"center" , pb:"6px"}}>
        <FaDotCircle color="#CE1126" size={5} style={{ marginRight: '5px' }} />
        <Typography variant="body"><strong>Alergias: </strong>Negadas </Typography>
      </Box>

      <Box sx={{display:"flex", alignItems:"center" , pb:"6px"}}>
        <FaDotCircle color="#CE1126" size={5} style={{ marginRight: '5px' }}/>
        <Typography variant="body"><strong>Medicamentos: </strong>Salbutamol y bromuro de ipratropio</Typography>
      </Box>

      <Box sx={{display:"flex", alignItems:"center" , pb:"6px"}}>
        <FaDotCircle color="#CE1126" size={5} style={{ marginRight: '5px' }}/>
        <Typography variant="body"><strong>Padecimientos: </strong>Asma</Typography>
      </Box>

      <Box sx={{display:"flex", alignItems:"center" , pb:"6px"}}>
        <FaDotCircle color="#CE1126" size={5} style={{ marginRight: '5px' }}/>
        <Typography variant="body"> <strong>Detalles: </strong>Crisis asmáticas con esfuerzo físico</Typography>
      </Box>
    </Box>

    <Box  sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around', backgroundColor: 'white', 
    borderRadius: '0 0 12px 12px', p:'10px', pl:'15px', mt:"0", border: "3px solid #065c2f", borderTop:"0", gridRow: '2 / 3', 
    gridColumn: '2 / 3', '@media (max-width: 512px)': {
      gridRow: '4 / 5', gridColumn: '1 / 2'
    }}}>
      <Button variant="contained" onClick={ManageShow1} sx={{backgroundColor: '#CE1126', '&:hover': {
          backgroundColor: '#f12d44'},'&:active': {backgroundColor: '#8b0414'} }}>Contacto de emergencia 1</Button>
      {showContact1 && <Typography gutterBottom variant="body" color="black">
            <strong>Nombre:</strong> Rafael Martínez Juárez <br/>
            <strong>Parentesco:</strong> Padre <br/>
            <strong>Teléfono:</strong> 55 1221 6344
          </Typography>}
      <Button variant="contained" onClick={ManageShow2} sx={{backgroundColor: '#CE1126 ' , '&:hover': {
          backgroundColor: '#f12d44'},'&:active': {backgroundColor: '#8b0414'}}}> Contacto de emergencia 2</Button>
      {showContact2 && <Typography gutterBottom variant="body" color="black">
            <strong>Nombre:</strong> Fernando Martínez Gómez <br/>
            <strong>Parentesco:</strong> Hermano <br/>
            <strong>Teléfono:</strong> 55 1661 6614
          </Typography>}
    </Box>
</Box>


}


