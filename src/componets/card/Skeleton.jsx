import React from "react";
import ContentLoader from "react-content-loader";
import Col from "react-bootstrap/Col";
import style from "./card.scss";

const Skeleton = (props) => (
  <Col xxl={3} className="grid">
    <ContentLoader
      speed={2}
      width={300}
      height={170}
      viewBox="0 0 300 170"
      backgroundColor="#e0e0e0"
      foregroundColor="#c7c7c7"
      {...props}
    >
      <rect x="7" y="4" rx="14" ry="14" width="286" height="163" />
    </ContentLoader>
  </Col>
);

export default Skeleton;
