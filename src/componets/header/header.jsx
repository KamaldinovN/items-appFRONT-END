import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import React from "react";
import { Link } from "react-router-dom";

import style from "./header.scss";
import axios from "axios";

function Header({
  id,
  SKU,
  name,
  price,
  type,
  weight,
  size,
  height,
  length,
  width,
}) {
  const [head, setHead] = React.useState(true);
  const addItem = () => {
    axios
      .post("https://productistkamaldinov.herokuapp.com/add", {
        SKU: SKU,
        name: name,
        price: price,
        type: type,
        weight: weight,
        size: size,
        height: height,
        length: length,
        width: width,
      })
      .then(() => {
        console.log("success");
      });
    handleChangeTrue();
  };

  const deleteItem = () => {
    axios
      .delete(`https://productistkamaldinov.herokuapp.com/delete/${id}`)
      .then(() => {
        console.log("Data Deleted");
      });
  };
  // React.useEffect(() => {
  //   deleteItem();
  // }, [items]);

  const handleChangeFalse = () => {
    setHead(false);
  };
  const handleChangeTrue = () => {
    setHead(true);
  };

  return (
    <>
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          {head ? (
            <>
              <Container>
                <Link className="logo" to="/">
                  <Navbar.Brand> Product List</Navbar.Brand>
                </Link>
                <Form className="d-flex">
                  <Link to="/add-product">
                    <Button
                      onClick={handleChangeFalse}
                      className={style.btn}
                      variant="outline-success"
                    >
                      Add
                    </Button>
                  </Link>
                  <Button
                    onClick={deleteItem}
                    id="delete-product-btn"
                    variant="outline-danger"
                  >
                    Mass delete
                  </Button>
                </Form>
              </Container>
            </>
          ) : (
            <>
              <Container>
                <Link className="logo" to="/add-product">
                  {" "}
                  <Navbar.Brand> Add product</Navbar.Brand>
                </Link>
                <Form className="d-flex">
                  <Link to="/">
                    <Button
                      onClick={addItem}
                      className={style.btn}
                      variant="outline-success"
                    >
                      Save
                    </Button>
                  </Link>
                  <Link to="/">
                    <Button onClick={handleChangeTrue} variant="outline-danger">
                      Cancel
                    </Button>
                  </Link>
                </Form>
              </Container>
            </>
          )}
        </Navbar>
      </Container>
    </>
  );
}

export default Header;
