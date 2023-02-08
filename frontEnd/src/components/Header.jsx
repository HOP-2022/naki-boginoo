import React, { useContext } from "react";
import "@fontsource/ubuntu";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../components/HIstoryContext";
import axios from "axios";
function Header() {
  const { handleChange, setData, setAuth } = useContext(Context);
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

  const logout = () => {
    localStorage.removeItem("token");
    setAuth("");
  };
  const { pathname } = useLocation();
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
      paddingRight: "30px",
      textDecoration: "none",
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
      marginRight: "30px",
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
      marginRight: "30px",
    },
    hidden: {
      visibility: "hidden",
    },
  };
  return (
    <div style={styles.container}>
      <button
        style={
          pathname === "/signin" ||
          pathname === "/signup" ||
          pathname === "/roles"
            ? styles.hidden
            : styles.button
        }
        onClick={handleClick}
      >
        Түүх
      </button>
      <Link style={styles.howItWorks} to="/">
        xэрхэн ажилладаг вэ?
      </Link>
      <Link
        style={
          pathname === "/signin" ||
          pathname === "/signup" ||
          pathname === "/roles"
            ? styles.hidden
            : styles.button1
        }
        to="/signin"
      >
        Нэвтрэх
      </Link>
      <Link
        style={
          pathname === "/signin" ||
          pathname === "/signup" ||
          pathname === "/roles"
            ? styles.hidden
            : styles.button1
        }
        to="/signin"
        onClick={logout}
      >
        Гарах
      </Link>
      <Link
        style={
          pathname === "/signin" ||
          pathname === "/signup" ||
          pathname === "/roles"
            ? styles.hidden
            : styles.button1
        }
        to="/roles"
        onClick={logout}
      >
        roles
      </Link>
    </div>
  );
}

export default Header;
