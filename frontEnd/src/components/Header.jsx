import React from "react";
import "@fontsource/ubuntu";

function Header() {
  const styles = {
    container: {
      width: "100vw",
      //   height: "100vh",
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: "center",
      marginTop: "40px"
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
  };
  return (
    <div style={styles.container}>
      <div style={styles.howItWorks}>xэрхэн ажилладаж вэ?</div>
      <button style={styles.button}>Нэвтрэх</button>
    </div>
  );
}

export default Header;
