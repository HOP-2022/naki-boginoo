import React from "react";
import "@fontsource/ubuntu";

function Footer() {
  const styles = {
    container: {
      width: "100vw",
      // height: "100vh"
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "50px"
    },
    p1: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "18px",
      color: "#000000",
    },
    p2: {
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "18px",
      textAlign: "center",
      color: "#000000",
      opacity: 0.2,
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.p1}>Made with ♥️ by Nest Academy</div>
      <div style={styles.p2}>©boginoo.io 2020</div>
    </div>
  );
}

export default Footer;
