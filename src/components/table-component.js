import { useState, useEffect } from "react";

// material ui
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  makeStyles,
  Button,
  TextField
} from "@material-ui/core";

// material icons
import { Edit } from "@material-ui/icons";
import { Delete } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  table: {
    minWidth: 0,
  }
}));

export function TableComponent() {
  // use of hooks
  const [users, setUser] = useState([]);

  useEffect(() => {
    setUser([
      { name: 'John', email: 'John@gmail.com', age: 51 },
      { name: 'Sam', email: 'Sam@gmail.com', age: 32 },
      { name: 'Sid', email: 'Sid@gmail.com', age: 46 },
      { name: 'Aman', email: 'Aman@gmail.com', age: 46 },
      { name: 'Kunal', email: 'Kunal@gmail.com', age: 46 },
      { name: 'Sid3', email: 'Sid@gmail.com', age: 46 },
      { name: 'Sid4', email: 'Sid@gmail.com', age: 46 },
    ]);
  }, []);

  // delete user from state
  function deleteUser(index) {
    users.splice(index, 1);
    console.log('users', users);
    setUser([...users]);

  }

  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Age</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {
            users.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">{row.name}</TableCell>
                <TableCell align="center">{row.email}</TableCell>
                <TableCell align="center">{row.age}</TableCell>
                <TableCell align="center">
                  <Button><Edit fontSize="small" /></Button>
                  <Button onClick={() => deleteUser(index)}><Delete fontSize="small" /></Button>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}