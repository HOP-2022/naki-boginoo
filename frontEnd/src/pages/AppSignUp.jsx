import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import boginoLogo from "../assets/logo.png";
import "@fontsource/ubuntu";
import Footer from "../components/Footer";

function AppSignUp() {
  const styles = {
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    howItWorks: {
      color: "#02B589",
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "25px",
      lineHeight: "23px",
      texTransform: "uppercase",
      paddingLeft: "1600px",
      paddingTop: "50px",
    },
    body: {
      height: "500px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
    },
    nevtreh: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "32px",
      lineHeight: "37px",
      textAlign: "center",

      color: "#02B589",
    },
    input: {
      boxSizing: "border-box",
      width: "381px",
      height: "44px",
      background: "#FFFFFF",
      border: "1px solid #F0F0F0",
      boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.16)",
      borderRadius: "100px",

      paddingLeft: "50px",
      fontfamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "23px",
      color: "#000000",
      opacity: 0.2,
    },
    container1: {
      width: "381px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    checkbox: { border: "1px solid #02B589" },
    namaigsana: {
      paddingRight: "100px",
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "18px",
      color: "#02B589",
    },
    nevtreh1: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "23px",
      textTransform: "uppercase",
      color: "#FFFFFF",

      width: "383px",
      height: "43px",
      backgroundColor: "#02B589",
      border: "0px #02B589",
      borderRadius: "100px",
    },
    link1: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "18px",
      textDecorationLine: "underline",
      color: "#333333",
    },
    link2: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "18px",
      textDecorationLine: "underline",
      color: "#02B589",
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.howItWorks}>xэрхэн ажилладаж вэ?</div>
      <div style={styles.body}>
        <img src={boginoLogo} alt="" />
        <div style={styles.nevtreh}>Бүртгүүлэх</div>
        <div>
          <div>Цахим хаяг</div>
          <input
            style={styles.input}
            placeholder="name@mail.domain"
            type="email"
          />
        </div>
        <div>
          <div>Нууц үг</div>
          <input
            style={styles.input}
            placeholder="••••••••••"
            type="password"
          />
        </div>
        <div>
          <div>Нууц үгээ давтна уу?</div>
          <input
            style={styles.input}
            placeholder="••••••••••"
            type="password"
          />
        </div>
        <button style={styles.nevtreh1}>Бүртгүүлэх</button>
      </div>
      <Footer />
    </div>
  );
}

export default AppSignUp;
