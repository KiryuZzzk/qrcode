import React from 'react';
import CapacitacionLogo from "../../resources/capacitacion-logo.png"
import Cards from '../Cards/Cards';
import CodigoQR from "../../resources/qrstudents/codigo-qr.png"
import styled from 'styled-components';
import { Box } from '@mui/material';

export default function MainSection (){



  const LogoCapacitacion = styled.img`
    width: 15%;
    height: auto;
    margin-left: 20px;
    border: 4px solid #065c2f;
    border-radius: 10px;
    display:flex;
    flex-shrink: 1;
    @media (max-width: 724px) {
    display:none;
  }
`;

  const FotoQR = styled.img`
    width: 10%;
    height: auto;
    box-shadow:8px 8px 4px rgba(0, 0, 0, 0.2);
    border: 4px solid black;
    border-radius: 10px;
    margin-right: 20px;
    @media (max-width: 685px) {
      display:none;
  }
`;

  return (
    <Box sx={{display:"flex", justifyContent: "center", alignItems: "center", py:"30px", height:"80%"}}>
      <FotoQR src={CodigoQR}/>
      <Cards/>
      <LogoCapacitacion src={CapacitacionLogo}/>
    </Box>
  );
};
;