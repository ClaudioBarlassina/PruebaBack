import React from "react";
import IconButton from "@mui/material/IconButton";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Container,
} from "@mui/material";
import UpdateIcon from "@mui/icons-material/Update";
import DeleteIcon from "@mui/icons-material/Delete";

function Card({usuarios}) {


  return (
    <div>
      <Container maxWidth="sm" style={{ marginTop: "50px" }}>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Nombre</TableCell>
                {/* <TableCell>Edad</TableCell>
                <TableCell>Correo</TableCell>
                <TableCell>Telefono</TableCell> */}
                <TableCell>Accion</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {usuarios.map(usuario => (

             
              <TableRow key={usuario.id}>
                <TableCell>{usuario.id}</TableCell>
                <TableCell>{usuario.nombre}</TableCell>
                {/* <TableCell>{usuario.edad}</TableCell>
                <TableCell>{usuario.correo}</TableCell>
                <TableCell>{usuario.telefono}</TableCell> */}
                <TableCell>
                  <IconButton aria-label="update">
                    <UpdateIcon />
                  </IconButton>
                  <IconButton>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                </TableRow>
                 ))}
            </TableBody>
          </Table>
        </Paper>
      </Container>
    </div>
  );
}

export default Card;
