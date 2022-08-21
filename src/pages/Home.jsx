import Row from "react-bootstrap/Row";
import Cards from "../componets/card/card";
import Container from "react-bootstrap/Container";
import React from "react";
import Skeleton from "../componets/card/Skeleton";
import axios from "axios";

// eslint-disable-next-line
import style from "./Home.scss";
import { AppContext } from "../App";

function Home() {
  const [items, setItems] = React.useState();
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    axios.get("http://localhost:5000/get").then((res) => {
      setItems(res.data);
      setLoading(false);
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container className="flex">
        <Row>
          {isLoading
            ? [...new Array(8)].map((_, index) => <Skeleton key={index} />)
            : items?.map((obj) => <Cards key={obj.id} {...obj} />)}
        </Row>
      </Container>
    </>
  );
}

export default Home;
