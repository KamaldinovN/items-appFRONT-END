// eslint-disable-next-line
import style from "./footer.scss";
import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <>
      <Container>
        <div className="text">
          {" "}
          Made by{" "}
          <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
            Nazar Kamaldinov n.kamaldinov@gmail.com
          </a>{" "}
          for Scandiweb Test Assigment
        </div>
      </Container>
    </>
  );
}
export default Footer;
