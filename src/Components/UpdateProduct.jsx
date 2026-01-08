import React, { useEffect, useState } from "react";
import { Button, Grid, Paper, TextField, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";


const UpdateProduct = () => {
   let [updateProduct, setupdateProduct] = useState({
    id: "",
    title: "",
    price: 500,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: {
      rate: 0,
      count: 0,
    },
  });

  let papperStyle = {
    width: 400,
    margin: "20px auto",
    padding: "20px",
  };

  let { id } = useParams()
  let navigate=useNavigate()
  // console.log(id);
  useEffect(() => {
    axios.get(`http://localhost:5000/products/${id}`)
    .then(res => setupdateProduct(res.data))
  },[] )
    
  // alert(Button.cliked)

  let handleChange = (e) => {
    let { value, name } = e.target;
    let fieldName = name.split("rating.")[1];

    if (name.includes("rating.")) {
      setupdateProduct({
        ...updateProduct,
        rating: {
          ...updateProduct.rating,
          [fieldName]: value,
        },
      });
    } else {
      setupdateProduct({
        ...updateProduct,
        [name]: value,
      });
    }
  };
  // console.log(newProduct);

  let handleAdd = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    }).then(() => {
      alert("Saved Suxxfully");
      navigate("/product")
    });
  };

  if (updateProduct!==null) {
    return (
      <Paper elevation={20} style={papperStyle}>
        <Typography variant="h5" textAlign={"center"}>
          Update Product
        </Typography>
        <Grid
          component="form"
          style={{ display: "grid", gap: "20px" }}
          onSubmit={handleAdd}
        >
          <TextField
            value={updateProduct.title}
            name="title"
            label="Title"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            value={updateProduct.category}
            name="category"
            label="Category"
            variant="outlined"
            fullWidth
            onChange={handleChange}
          />
          <Grid container spacing={2}>
            <Grid size={6}>
              <TextField
                value={updateProduct.rating.rate}
                name="rating.rate"
                type="number"
                label="Rate"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
            <Grid size={6}>
              <TextField
                value={updateProduct.rating.count}
                name="rating.count"
                type="number"
                label="Count"
                variant="outlined"
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Button type="submit" variant="contained" fullWidth color="success">
            Add
          </Button>
        </Grid>
      </Paper>
    );    
  }
  else {
    <div>Loading...</div>
  }

};



export default UpdateProduct