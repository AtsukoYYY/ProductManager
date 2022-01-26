import { useState, useEffect } from "react";
import { db } from "../fire/config";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import { collection, getDocs, Firestore } from "firebase/firestore/lite";

export const ProductTable = () => {
  const [rows, setRows] = useState([
    { name: "", brand: "", nendo: 0, season: "", hinban: "0" }
  ]);
  useEffect(() => {
    async function getProducts(db: Firestore) {
      const productsCol = collection(db, "products");
      const productsSnapshot = await getDocs(productsCol);
      const productsList = productsSnapshot.docs.map((doc) => doc.data());
      setRows(productsList);
    }
    getProducts(db);
  }, []);
  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>商品名</TableCell>
              <TableCell>ブランド</TableCell>
              <TableCell>品番</TableCell>
              <TableCell>年度</TableCell>
              <TableCell>シーズン</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell>{row.brand}</TableCell>
                <TableCell>{row.hinban}</TableCell>
                <TableCell>{row.nendo}</TableCell>
                <TableCell>{row.season}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
