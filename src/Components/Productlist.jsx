import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Commet } from "react-loading-indicators";
import useFetch from "./custom-hook/useFetch";
import { MdAddShoppingCart } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import { useDispatch ,useSelector} from "react-redux"
import {addItem } from "../Store/cartSlice"

const Productlist = () => {
  // let [product, setProduct] = useState([]);
  // let [error, setError] = useState([]);
  // let [isLoad, setisLoad] = useState(true);

  // useEffect(() => {;
  //   fetch("http://localhost:4000/products", { method: "GET" })
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json()
  //       }
  //       else {
  //         throw new Error("Search Proper Data");

  //       }
  let { product, error, isLoad, setProduct } = useFetch(
    "http://localhost:5000/products"
  );

  //     })
  //     .then((data) => {
  //       setProduct(data);
  //     })
  //     .catch((error) => {
  //     setError(  error.message);
  //     })
  //     .finally(() => {
  //     setisLoad()
  //   })
  // }, []);
  let handleDelete = (id) => {
    // console.log(id);

    axios.delete(`http://localhost:5000/products/${id}`).then(() => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      });
      let newProductlist = product.filter((prdct) => prdct.id !== id);
      setProduct(newProductlist);
    });
  };
  let navigate = useNavigate();

  let dispatch=useDispatch()
  // console.log(customHook);

  let cartState=useSelector((state)=>{return state.cart})

  let addItemtoCart = (prdct) => {
    let checkProduct = cartState.some(cartProducts => cartProducts.id === prdct.id)
    console.log(checkProduct);
    
    if (!checkProduct) {
      dispatch(addItem(prdct))
      Swal.fire({
            title: "Succes!",
            text: "Product Added Succesfully.",
            icon: "success",
          });
    } else {
      // alert("Product Already Added")
      Swal.fire({
            title: "Ooops!",
            text: "Product Already Added.",
        icon: "error",
            footer:"<p>Add some Other Products</p>"
          });
    }
  }



  if (isLoad) {
    return (
      <div>
        <center>
          <Commet color="#32cd32" size="medium" text="" textColor="" />
        </center>
      </div>
    );
  } else {
    return (
      <div>
        <article>
          <span>To Create New Product</span>
          <Button onClick={() => navigate("/newproduct")}>Click me !</Button>
        </article>
        <h1>Product List</h1>
        {product.length !== 0 && (
          <section className="products">
            {product.map((prdct) => (
              <Card key={prdct.id} style={{ width: "18rem" }} className="prdct">
                <center>
                  <Card.Img
                    variant="top"
                    src={prdct.image}
                    style={{ width: "9rem", height: "12rem" }}
                  />
                </center>
                <Card.Body>
                  <Card.Title>{prdct.title}</Card.Title>
                  <Card.Text> ${prdct.price}</Card.Text>
                </Card.Body>

                <Card.Footer
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                  }}
                >
                  {/* <Card.Text>${prdct.price}</Card.Text> */}
                  <Button variant="primary" onClick={ ()=>addItemtoCart(prdct) }>
                    {/* {" "} */}
                    <MdAddShoppingCart />
                  </Button>
                  <Button
                    variant="secondary"
                    onClick={() => {
                      navigate(`/update/${prdct.id}`);
                    }}
                  >
                    {" "}
                    <FaRegEdit />
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => handleDelete(prdct.id)}
                  >
                    {" "}
                    <MdDelete />{" "}
                  </Button>
                </Card.Footer>
              </Card>
            ))}
          </section>
        )}
        {error && <p>{error}</p>}
      </div>
    );
  }
};

export default Productlist;
