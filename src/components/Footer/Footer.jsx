import React from 'react';
import CruzRojaLogo from "../../resources/cruz-roja-logo.png"


export default function Footer (){
  const estiloHeader = {
    backgroundColor: 'white',
    height: '80px', // Puedes ajustar la altura según tus necesidades
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  };

  const estiloLogo = {
    maxWidth: '100%', // Ajusta el tamaño máximo del logo según tus necesidades
    maxHeight: '80%', // Ajusta el tamaño máximo del logo según tus necesidades
    margin: 'auto 2em'
  };

  return (
    <div style={estiloHeader}>
      <img src={CruzRojaLogo} alt="Logo" style={estiloLogo} />
    </div>
  );
};
;