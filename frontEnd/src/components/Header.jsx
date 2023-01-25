import React, { useContext } from "react";
import "@fontsource/ubuntu";
import { Link } from "react-router-dom";
import { Context } from "../components/HIstoryContext";
import axios from "axios";
import { useState } from "react";
function Header() {
  const { handleChange, history, setData } = useContext(Context);
  const handleClick = async () => {
    await axios
      .get("http://localhost:3001/links", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response.data.data);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    handleChange();
  };
  const styles = {
    container: {
      width: "100vw",
      //   height: "100vh",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      marginTop: "40px",
    },
    howItWorks: {
      color: "#02B589",
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "25px",
      lineHeight: "23px",
      texTransform: "uppercase",
      paddingRight: "80px",
    },
    button: {
      width: "182px",
      height: "44px",
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "23px",
      textTransform: "uppercase",
      color: "#FFFFFF",
      backgroundColor: "#02B589",
      border: "1px solid #02B589",
      borderRadius: "100px",
      marginRight: "80px",
    },
    button1: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "182px",
      height: "44px",
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "23px",
      textTransform: "uppercase",
      color: "#FFFFFF",
      backgroundColor: "#02B589",
      border: "1px solid #02B589",
      borderRadius: "100px",
      textDecoration: "none",
      marginRight: "80px",
    },
  };
  return (
    <div style={styles.container}>
      <button style={styles.button} onClick={handleClick}>
        Түүх
      </button>
      <div style={styles.howItWorks}>xэрхэн ажилладаж вэ?</div>
      <Link style={styles.button1} to="/signin">
        Нэвтрэх
      </Link>
    </div>
  );
}

export default Header;
