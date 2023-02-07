import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "./LOGO PERSONAL.png";
import "./Profile.css";
import personal from "./personal.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Button from "react-bootstrap/Button";
import { faDownload, faPhone } from "@fortawesome/free-solid-svg-icons";
import Card from "react-bootstrap/Card";
import { Form, Link, useNavigate } from "react-router-dom";
import { Nav, NavDropdown } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

const JPG_FILE_URL = "http://localhost:3000/Cv Kadek Sucipta.jpg";

const Profile = () => {
  const navigate = useNavigate();
  const goToProject = () => {
    navigate("/Project");
  };

  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const downloadFileAtURL = (url) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    fetch(`http://localhost:8000/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        console.log(data);
      });
  };

  return (
    <React.Fragment>
      <Navbar
        style={{
          position: "fixed",
          width: "100%",
          background: "white",
          zIndex: "3",
        }}
        className="nav-profile"
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="#home">
            <strong>Kadek</strong>Sucipta
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="box-home">
        <div className="img-profile">
          <img
            style={{
              borderRadius: "100px",
            }}
            alt=""
            src={personal}
            width="200"
            height="200"
            className="foto"
          />{" "}
        </div>
        <div className="text-center">
          <br />
          <h3>
            Kadek{" "}
            <strong style={{ color: "#645CBB", textDecoration: "underline" }}>
              Sucipta
            </strong>
          </h3>
          <h4>
            <strong style={{ color: "#645CBB", textDecoration: "underline" }}>
              Software
            </strong>{" "}
            developer
          </h4>
          <FontAwesomeIcon
            style={{ fontSize: "35px", marginRight: "40px", color: "black" }}
            icon={faInstagram}
          />
          <FontAwesomeIcon
            style={{ fontSize: "35px", marginRight: "40px", color: "black" }}
            icon={faLinkedin}
          />
          <FontAwesomeIcon
            style={{ fontSize: "35px", color: "black" }}
            icon={faGithub}
          />
        </div>
      </div>
      <div className="btn-profile">
        <button
          onClick={() => {
            downloadFileAtURL(JPG_FILE_URL);
          }}
          className="btn-cv"
        >
          Download CV <FontAwesomeIcon icon={faDownload} />
        </button>
        <button onClick={handleShow} className="btn-contact">
          Contact me <FontAwesomeIcon icon={faPhone} />
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <hr style={{ width: "80%" }} />
      </div>
      <div className="btn-skill-project">
        <button className="btn-skill">
          <strong>Skill</strong>
        </button>
        <button className="btn-project">
          <strong onClick={() => goToProject()}>Project</strong>
        </button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <hr style={{ width: "60%" }} />
      </div>
      <h3 style={{ textDecoration: "underline" }} className="text-center">
        My Skill
      </h3>
      <div className="container-profile">
        {products.map((item, index) => (
          <Card
            className="card-profile"
            key={index}
            style={{
              width: "15rem",
              marginLeft: "10px",
              marginRight: "10px",
              marginBottom: "20px",
              boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
              border: "none",
              maxWidth: "100%",
            }}
          >
            <Card.Img
              variant="top"
              src={"http://localhost:8000/images/" + item.image_url}
            />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div className="text-center">
        <footer>© Copyright 2023 Kadek Sucipta. All rights reserved.</footer>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input style={{width: "100%", paddingLeft: "5px", marginBottom: "10px", border: "1px solid silver"}} type="email" placeholder="from:"/>
          <br />
          <input style={{width: "100%", paddingLeft: "5px", marginBottom: "10px", cursor: "not-allowed", border: "1px solid silver"}} type="email" placeholder="kadek.sucipta005@gmail.com" disabled/>
          <textarea style={{width: "100%", paddingLeft: "5px", border: "1px solid silver"}} name="" id="" rows="5" placeholder="..."></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button className="button-batal" onClick={handleClose}>
            Batal
          </Button>
          <Button className="button-kirim" onClick={handleClose}>
            Kirim
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default Profile;
