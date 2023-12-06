import React from "react";
import { useSelector } from "react-redux";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import ProductForm from "./ProductForm";

export default function CreateProduct() {
  const adminBoolean = useSelector((state) => state.adminBoolean);
  console.log("admin boolean", adminBoolean);

  if (adminBoolean === false) {
    return <p> Need Special Permissions to Access Page. </p>;
  }

  return (
    <>
      <Typography variant="h6" style={{ margin: "20px 0" }}>
        Add a New Product for Sale
      </Typography>

      <Container component="main" maxWidth="xs">
        <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" }}>
          <ProductForm />
        </Paper>
      </Container>
    </>
  );
}
