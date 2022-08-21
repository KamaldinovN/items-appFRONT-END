import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
// eslint-disable-next-line
import style from "./pages/Home.scss";

import Home from "./pages/Home.jsx";
import ProductAdd from "./pages/ProductAdd";
import Footer from "./componets/footer/footer";
import Header from "./componets/header/header";

export const AppContext = React.createContext("");

function App() {
  const [SKU, setSKU] = React.useState("");
  const [name, setName] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [type, setType] = React.useState("");
  const [weight, setWeight] = React.useState();
  const [size, setSize] = React.useState();
  const [height, setHeight] = React.useState();
  const [length, setLength] = React.useState();
  const [width, setWidth] = React.useState();
  const [id, setId] = React.useState();
  return (
    <>
      <AppContext.Provider value={{ id, setId }}>
        <Header
          id={id}
          SKU={SKU}
          name={name}
          price={price}
          type={type}
          width={width}
          length={length}
          size={size}
          weight={weight}
          height={height}
        />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route
            path={"/add-product"}
            element={
              <ProductAdd
                setSKU={setSKU}
                setName={setName}
                setPrice={setPrice}
                setType={setType}
                setWeight={setWeight}
                setSize={setSize}
                setHeight={setHeight}
                setLength={setLength}
                setWidth={setWidth}
              />
            }
          />
        </Routes>
        <Footer />
      </AppContext.Provider>
    </>
  );
}

export default App;
