import Container from "react-bootstrap/Container";

import Form from "react-bootstrap/Form";
// eslint-disable-next-line
import style from "./ProductAdd.scss";
import React from "react";

function ProductAdd({
  setSKU,
  setName,
  setSize,
  setPrice,
  setHeight,
  setLength,
  setType,
  setWeight,
  setWidth,
}) {
  const [types, setTypes] = React.useState();

  const handleSkuChange = (event) => {
    setSKU(event.target.value);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };
  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };
  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };
  const handleHeightChange = (event) => {
    setHeight(event.target.value);
  };
  const handleWidthChange = (event) => {
    setWidth(event.target.value);
  };
  const handleLengthChange = (event) => {
    setLength(event.target.value);
  };
  const handleTypeChange = (event) => {
    setType(event.target.value);
    setTypes(event.target.value);
  };

  let form;

  if (types === "DVD-disk") {
    form = (
      <>
        <Form id="DVD">
          <Form.Label>Size(MB):</Form.Label>
          <Form.Control onChange={handleSizeChange} id="size" type="number" />
          <Form.Text>Please, provide disk space in MB </Form.Text>
        </Form>
      </>
    );
  }
  if (types === "Furniture") {
    form = (
      <>
        <Form id="Furniture">
          <Form.Label>Height(CM):</Form.Label>
          <Form.Control
            onChange={handleHeightChange}
            id="height"
            type="number"
          />
          <Form.Label>Width(CM):</Form.Label>
          <Form.Control onChange={handleWidthChange} id="width" type="number" />
          <Form.Label>Length(CM):</Form.Label>
          <Form.Control
            onChange={handleLengthChange}
            id="length"
            type="number"
          />
          <Form.Text>Please, provide dimensions in HxWxL</Form.Text>
        </Form>
      </>
    );
  }
  if (types === "Book") {
    form = (
      <>
        <Form id="Book">
          <Form.Label>Weight(KG):</Form.Label>
          <Form.Control
            onChange={handleWeightChange}
            id="weight"
            type="number"
          />
          <Form.Text>Please, provide weight in KG</Form.Text>
        </Form>
      </>
    );
  }

  return (
    <>
      <Container className="flex">
        <>
          <Container className="form">
            <Form>
              <Form.Label>SKU:</Form.Label>
              <Form.Control onChange={handleSkuChange} id="sku" type="text" />
              <br />
              <Form.Label>Name:</Form.Label>
              <Form.Control onChange={handleNameChange} id="name" type="text" />
              <br />
              <Form.Label>Price $:</Form.Label>
              <Form.Control
                onChange={handlePriceChange}
                id="price"
                type="number"
              />
              <br />
              <Form.Label>Type Switcher</Form.Label>
              <select
                className="select"
                id="productType"
                onChange={handleTypeChange}
              >
                <option value="">Type Switcher</option>
                <option value="DVD-disk">DVD-disk</option>
                <option value="Book">Book</option>
                <option value="Furniture">Furniture</option>
              </select>
              {form}
            </Form>
          </Container>
        </>
      </Container>
    </>
  );
}

export default ProductAdd;
