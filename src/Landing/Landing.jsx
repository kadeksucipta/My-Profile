import {
  faGitAlt,
  faGithub,
  faInstagram,
  faLinkedin,
  faReact,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faDownload, faExternalLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import kadek from "./kadek.png";
import html from "./aset/html.png";
import css from "./aset/css.png";
import js from "./aset/js.png";
import react from "./aset/react.png";
import node from "./aset/node.png";
import express from "./aset/express.png";
import mongo from "./aset/mongo.png";
import mern from "./aset/MERN.png";
import wa from "./aset/wa2.png";
import portal from "./aset/portal.png"

import "./Landing.css";
import AnimatedPage from "../Component/animated";

// const PDF_FILE_URL = "http://localhost:8000/CV_Kadek sucipta.pdf";

const Landing = () => {
  const [products, setProducts] = useState([]);
  const [project, setProject] = useState([]);
  const [projectDua, setProjectDua] = useState([]);
  const [projectTiga, setProjectTiga] = useState([]);
  const [tags, setTags] = useState([]);

  // const downloadFileAtURL = (url) => {
  //   fetch(url)
  //     .then((response) => response.blob())
  //     .then((blob) => {
  //       const blobURL = window.URL.createObjectURL(new Blob([blob]));
  //       const fileName = url.split("/").pop();
  //       const aTag = document.createElement("a");
  //       aTag.href = blobURL;
  //       aTag.setAttribute("download", fileName);
  //       document.body.appendChild(aTag);
  //       aTag.click();
  //       aTag.remove();
  //     });
  // };

  useEffect(() => {
    fetchProducts();
    fetchProject();
    fetchProjectDua();
    fetchProjectTiga();
    fetchTags();
  }, []);

  const fetchProducts = () => {
    fetch(`https://agreeable-lime-slippers.cyclic.app/api/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
        console.log(data);
      });
  };

  const fetchProject = () => {
    fetch(`https://agreeable-lime-slippers.cyclic.app/api/project`)
      .then((res) => res.json())
      .then((data) => {
        setProject(data.data);
        console.log(data);
      });
  };

  const fetchProjectDua = () => {
    fetch(`https://agreeable-lime-slippers.cyclic.app/api/projectdua`)
      .then((res) => res.json())
      .then((data) => {
        setProjectDua(data.data);
        console.log(data);
      });
  };

  const fetchProjectTiga = () => {
    fetch(`https://agreeable-lime-slippers.cyclic.app/api/projecttiga`)
      .then((res) => res.json())
      .then((data) => {
        setProjectTiga(data.data);
        console.log(data);
      });
  };

  const fetchTags = () => {
    fetch(`https://agreeable-lime-slippers.cyclic.app/api/tags`)
      .then((res) => res.json())
      .then((data) => {
        setTags(data);
        console.log(data);
      });
  };

  return (
    <AnimatedPage>
      <React.Fragment>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "white",
            width: "50px",
            height: "50px",
          }}
        ></div>

        <Container>
          <div className="lds-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>

          <div className="content">
            <div className="img-wraper">
              <img className="picture" src={kadek} />{" "}
            </div>
            <div className="title-name">
              <h1 className="name">
                <strong>
                  Hello IM <br />
                  KADEK SUCIPTA
                </strong>
              </h1>
              <p style={{ fontSize: "30px" }} className="name">
                Front End Web developer
              </p>
              <div className="icon-sosmed">
                <a href="https://www.linkedin.com/in/kadek-sucipta-a12559238/">
                  <FontAwesomeIcon
                    className="git"
                    style={{
                      marginRight: "10px",
                      fontSize: "30px",
                      color: "black",
                    }}
                    icon={faLinkedin}
                  />
                </a>

                <a href="https://github.com/kadeksucipta">
                  <FontAwesomeIcon
                    style={{
                      marginRight: "10px",
                      fontSize: "30px",
                      color: "black",
                    }}
                    icon={faGithub}
                  />
                </a>
                <a href="https://www.instagram.com/kadekscpta/">
                  <FontAwesomeIcon
                    style={{ fontSize: "30px", color: "black" }}
                    icon={faInstagram}
                  />
                </a>
              </div>
              <div className="perkenalan">
                <p style={{ fontSize: "20px" }} className="name-perkenalan">
                  Junior Front End developer yang mampu menggunakan aplikasi
                  MERN Stack untuk membuat Website.
                </p>
              </div>
              <div className="name">
                {/* <button
                  className="btn-download"
                  style={{ marginRight: "10px" }}
                  // onClick={() => {
                  //   downloadFileAtURL(PDF_FILE_URL);
                  // }}
                >
                  <FontAwesomeIcon icon={faDownload} /> Download CV
                </button> */}

                  <a
                  href="https://drive.google.com/file/d/1rJNZMk20eQI562H4Kfu1LMLcLWfkLESi/view?usp=sharing"
                  className="btn-download"
                  style={{ marginRight: "10px" }}
                  // onClick={() => {
                  //   downloadFileAtURL(PDF_FILE_URL);
                  // }}
                >
                  <FontAwesomeIcon icon={faDownload} /> Download CV
                </a>
              </div>
            </div>
          </div>
          <Container></Container>
          <Container>
            <div className="skillshet">
              <div className="text-skill">
                <h2>
                  <strong>
                    Aplikasi yang saya gunakan
                    <br />
                  </strong>
                  <div
                    style={{
                      background: "white",
                      width: "50%",
                      height: "5px",
                      marginTop: "5px",
                    }}
                  ></div>
                  <br />
                  <h4 className="justify">
                    Saya dapat membuat website yang fantastis dengan menggunakan
                    tools berikut.
                  </h4>
                </h2>
              </div>
              <div className="tools">
                <div className="all-skill">
                  <img className="tools-skill" src={html} alt="" />
                  <img className="tools-skill" src={css} alt="" />
                  <img className="tools-skill" src={js} alt="" />
                  <img className="tools-skill" src={react} alt="" />
                  <img className="tools-skill" src={node} alt="" />
                  <img className="tools-skill" src={express} alt="" />
                  <img className="tools-skill" src={mongo} alt="" />
                </div>
              </div>
            </div>
          </Container>

          <br />
          <div className="proyek">
            <h2 className="text-center" id="project">
              <strong>Proyek ku</strong>
            </h2>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "white",
                  width: "15%",
                  height: "5px",
                  marginTop: "0",
                }}
              ></div>
            </div>
            <br />
            <div className="box-bawah">
              {products?.map((item, index) => (
                <Card
                  style={{ borderRadius: "0" }}
                  className="card-all"
                  key={index}
                >
                  <div className="image">
                    <Card.Img
                      style={{ borderRadius: "0", objectFit: "contain" }}
                      variant="top"
                      src={"https://agreeable-lime-slippers.cyclic.app/images/" + item.image_url}
                    />
                  </div>
                  <div className="details">
                    <div className="center">
                      <Card.Title>
                        <strong>{item.name}</strong>
                      </Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <div>
                        {item?.tags?.map((value, index) => (
                          <button key={index} className="tag-porto">
                            {value.name}
                          </button>
                        ))}
                      </div>
                      <div className="icon-porto">
                        <a href="https://github.com/kadeksucipta/Otak-Business-FE/blob/main/src/Home/Home.jsx">
                          <FontAwesomeIcon
                            style={{
                              fontSize: "23px",
                              color: "rgba(184,119,27,1)",
                              marginRight: "20px",
                            }}
                            icon={faGithub}
                          />
                        </a>
                        <a href="https://coffee-shop-4hs0wkxie-kadeksucipta.vercel.app/Home">
                          <FontAwesomeIcon
                            style={{
                              fontSize: "23px",
                              color: "rgba(184,119,27,1)",
                            }}
                            icon={faExternalLink}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {project?.map((item, index) => (
                <Card
                  style={{ borderRadius: "0" }}
                  className="card-all"
                  key={index}
                >
                  <div className="image">
                    <Card.Img
                      style={{ borderRadius: "0", objectFit: "contain" }}
                      variant="top"
                      src={"https://agreeable-lime-slippers.cyclic.app/images/" + item.image_url}
                    />
                  </div>
                  <div className="details">
                    <div className="center">
                      <Card.Title>
                        <strong>{item.name}</strong>
                      </Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <div>
                        {item?.tags?.map((value, index) => (
                          <button key={index} className="tag-porto">
                            {value.name}
                          </button>
                        ))}
                      </div>
                      <div className="icon-porto">
                        <a href="https://github.com/kadeksucipta/kadek.sucipta.github.io/blob/main/index.html">
                          <FontAwesomeIcon
                            style={{
                              fontSize: "23px",
                              color: "rgba(184,119,27,1)",
                              marginRight: "20px",
                            }}
                            icon={faGithub}
                          />
                        </a>
                        <a href="https://kadeksucipta.github.io/kadek.sucipta.github.io/">
                          <FontAwesomeIcon
                            style={{
                              fontSize: "23px",
                              color: "rgba(184,119,27,1)",
                            }}
                            icon={faExternalLink}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {projectDua?.map((item, index) => (
                <Card
                  style={{ borderRadius: "0" }}
                  className="card-allbawah"
                  key={index}
                >
                  <div className="image">
                    <Card.Img
                      style={{ borderRadius: "0", objectFit: "contain" }}
                      variant="top"
                      // src={"https://agreeable-lime-slippers.cyclic.app/images/" + item.image_url}
                      src={portal}
                    />
                  </div>
                  <div className="details">
                    <div className="center">
                      <Card.Title>
                        <strong>{item.name}</strong>
                      </Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <div>
                        {item?.tags?.map((value, index) => (
                          <button key={index} className="tag-porto">
                            {value.name}
                          </button>
                        ))}
                      </div>
                      <div className="icon-porto">
                        <a href="https://github.com/kadeksucipta/Portal-freelance-FE/blob/main/src/page/Home/Homepage.jsx">
                          <FontAwesomeIcon
                            style={{
                              fontSize: "23px",
                              color: "rgba(184,119,27,1)",
                              marginRight: "20px",
                            }}
                            icon={faGithub}
                          />
                        </a>
                        <a href="https://portal-freelance-fe.vercel.app/Homepage">
                          <FontAwesomeIcon
                            style={{
                              fontSize: "23px",
                              color: "rgba(184,119,27,1)",
                            }}
                            icon={faExternalLink}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}

              {projectTiga?.map((item, index) => (
                <Card
                  style={{ borderRadius: "0", objectFit: "contain" }}
                  className="card-allbawah"
                  key={index}
                >
                  <div className="image">
                    <Card.Img
                      style={{ borderRadius: "0", objectFit: "contain" }}
                      variant="top"
                      src={"https://agreeable-lime-slippers.cyclic.app/images/" + item.image_url}
                    />
                  </div>
                  <div className="details">
                    <div className="center">
                      <Card.Title>
                        <strong>{item.name}</strong>
                      </Card.Title>
                      <Card.Text>{item.description}</Card.Text>
                      <div>
                        {item?.tags?.map((value, index) => (
                          <button key={index} className="tag-porto">
                            {value.name}
                          </button>
                        ))}
                      </div>
                      <div className="icon-porto">
                        <a href="https://github.com/kadeksucipta/gundala-serach-engine/blob/main/index.html">
                          <FontAwesomeIcon
                            style={{
                              fontSize: "23px",
                              color: "rgba(184,119,27,1)",
                              marginRight: "20px",
                            }}
                            icon={faGithub}
                          />
                        </a>
                        <a href="https://gundala-serach-engine.vercel.app/">
                          <FontAwesomeIcon
                            style={{
                              fontSize: "23px",
                              color: "rgba(184,119,27,1)",
                            }}
                            icon={faExternalLink}
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </Container>

        <Container>
          <span class="loader"></span>
        </Container>

        <Container style={{marginTop: "100px", marginBotom: "100pxs"}}>
        <h3 className="title-contact"><strong>Contact me</strong></h3>
        <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "white",
                  width: "20%",
                  height: "5px",
                  marginTop: "-5px",
                }}
              ></div>
            </div>
        <div className="scan-wa">
      
          <h3 className="text-wa"><FontAwesomeIcon icon={faWhatsapp} /> 081917057795 |</h3>
          
          <h3 className="text-email"><FontAwesomeIcon icon={faEnvelope} /> kadek.sucipta005@gmail.com</h3>
        </div>

        </Container>

        <Container>
          <div className="about-me">
            <div className="me-2">
              <h2>
                <strong>
                  Tentang saya
                  <br />
                </strong>
                <div
                  style={{
                    background: "white",
                    width: "25%",
                    height: "5px",
                    marginTop: "5px",
                  }}
                ></div>
                <br />
                <h4 className="justify">
                  Saya Kadek sucipta seorang Junior front end developer dari
                  Lombok NTB yang memiliki minat di dunia programming khususnya
                  Web Developer, saya selalu belajar bagaimana cara membuat dan
                  memecahkan sebuah masalah dari proses pembuatan website.
                </h4>
              </h2>
            </div>
            <div className="mern-atas">
              <img className="mern" src={mern} alt="" />
            </div>
          </div>
        </Container>
        <Container>
          <div className="lds-grid">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Container>
        <footer className="footer-page">
          <strong>
            &copy; {new Date().getFullYear()} Copyright,{" "}
            {"Kadek FE Dev, All rights reserved."}
          </strong>
        </footer>
        <div
          style={{
            background: "white",
            width: "50px",
            height: "50px",
            float: "right",
          }}
        ></div>
      </React.Fragment>
    </AnimatedPage>
  );
};

export default Landing;
