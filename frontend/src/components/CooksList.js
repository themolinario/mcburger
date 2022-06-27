import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from "@mui/material/Button";

import searchCook from "../actions/admin/searchCook";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import removeCook from "../actions/admin/removeCook";
import {Formik} from "formik";



export default function CooksList() {
  const dispatch = useDispatch();
  const cooks = useSelector(state => state.cooks.cooks || []);
  useEffect(() => {
    dispatch(searchCook('cook'))
  }, [dispatch]);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome Cuoco</TableCell>
            <TableCell >Cognome</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cooks.map((row) => (
            <TableRow
              key={row.firstName}
            >
              <TableCell>
                {row.firstName}
              </TableCell>
              <TableCell >{row.lastName}</TableCell>
              <TableCell>
                <Formik
                  initialValues={{}}
                  onSubmit={(values, actions) => {
                    dispatch(removeCook({
                      id: row._id,
                      firstName: row.firstName,
                      lastName: row.lastName,
                      actions,
                    }));
                  }}
                >
                  {({
                      handleSubmit,
                      isSubmitting,
                    }) => (
                <Button variant="contained" color="error" disabled={isSubmitting} onClick={handleSubmit}>Rimuovi</Button>
                    )}
                </Formik>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

