import React, { useEffect } from "react";
import {Link, useNavigate} from "react-router-dom";
import styles from "./styles/HomePage.module.css";

//bootstrap components
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

export default function HomePage() {
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("Token") !== null) {
      navigate("/newsfeed");
    }
  });
  return (
    //using bootstrap and custom css to make homepage
    {}
    
  );
}
 
