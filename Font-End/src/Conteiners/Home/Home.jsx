import React, { useEffect, useState } from 'react'

 import archivo from "../../Utils/archivo.json"
import Cards2 from '../../Components/Card/Card'
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import { Button, Paper, TextField } from "@mui/material";



function Home() {
    const [usuarios, SetUsuarios] = useState([]);

    useEffect(() => {
       SetUsuarios(archivo) 
    },[])
  return (
      <div><Paper style={{margin: '50px auto', maxWidth: '80%', padding: '20px', textAlign: 'center' }}>
           <TextField 
        label="Nuevo Usuario" 
        variant="outlined" 
        value={""} 
        onChange={"handleChange"} 
        style={{ marginRight: '50px' }} 
          />
          
          <Fab color="primary" aria-label="add">
        <AddIcon />
      </Fab>
      </Paper>
       
          <Cards2 usuarios={usuarios} />

    </div>
  )
}

export default Home