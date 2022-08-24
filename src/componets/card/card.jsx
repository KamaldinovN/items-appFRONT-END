import style from "./card.scss";
import Card from "react-bootstrap/Card";
import { FormCheck } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import React from "react";
import { AppContext } from "../../App";

function Cards(props) {
  const { setId } = React.useContext(AppContext);
  let add;
  if (props.Type === "DVD-disk") {
    add = `Size: ${props.Size}MB`;
  }
  if (props.Type === "Book") {
    add = `Weight: ${props.Weight}KG`;
  }
  if (props.Type === "Furniture") {
    add = `Dimension: ${props.Height}x${props.Width}x${props.Length}`;
  }

  const [checked, setChecked] = React.useState(true);
  const changeCheckbox = (e) => {
    setChecked(!checked);
    if (checked) {
      let id = e.target.id;
      setId(id);
    }
  };

  return (
    <>
      <Col xs={3} className="grid">
        <Card style={{ width: "18rem" }}>
          <Card.Body className={style.card}>
            <FormCheck
              className="delete-checkbox"
              id={props.id}
              checked={!checked}
              onChange={changeCheckbox}
              type="checkbox"
            ></FormCheck>
            <Card.Subtitle>{props.SKU}</Card.Subtitle>
            <Card.Title>{props.Name}</Card.Title>
            <Card.Text> Price: {props.Price} $</Card.Text>
            <Card.Text>{add}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}

export default Cards;
