import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { MdDelete } from "react-icons/md";
import { removeItem } from "../Store/cartSlice";


const Wishlist = () => {
    let cartProducts = useSelector((state) => {
        return state.cart;
    });
    //   console.log(cartProducts);

    let dispatch=useDispatch()
    let handleDelete = (reduxItemId) => {
        dispatch(removeItem(reduxItemId))
    }
    
  return (
    <div>
      {/* <article>
        <span>Wishlist</span>
        <Button onClick={() => navigate("/newproduct")}>Click me !</Button>
      </article> */}
      {/* <h1>Product List</h1> */}
      {cartProducts.length !== 0 ? (
        <section className="products">
          {cartProducts.map((prdct) => (
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
                <Button variant="danger" onClick={() => handleDelete(prdct.id)}>
                  {" "}
                  <MdDelete />{" "}
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </section>
          ) :
              <h1>Please purchase something</h1>
    }
      {/* {error && <p>{error}</p>} */}
    </div>
  );
};

export default Wishlist;
