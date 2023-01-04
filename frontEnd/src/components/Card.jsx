import React, { useState } from "react";

function Card(props) {
  const [value, setValue] = useState("");
  const styles = {
    container: {
      width: "773px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    p1: {
      paddingTop: "30px",
      //   width: "141px",
      height: "18px",
      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "16px",
      lineHeight: "18px",
      color: "#000000",
      opacity: 0.5,
    },
    p2: {
      paddingTop: "10px",
      //   width: "264px",
      height: "23px",

      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "20px",
      lineHeight: "23px",
      color: "#000000",
    },
    button: {
      marginTop: "50px",
      border: "0px",
      backgroundColor: "#FFFF",

      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "18px",
      lineHeight: "21px",
      textDecorationLine: "underline",
      color: "#02B589",
    },
    line: {
      marginTop: "30px",
      width: "773px",
      height: "0px",
      left: "325px",
      top: "585px",
      border: "1px solid #E2E2E2",
    },
  };
  return (
    <div>
      <div style={styles.container}>
        <div>
          <div style={styles.p1}>Өгөгдсөн холбоос:</div>
          <div style={styles.p2}>https://www.web-huudas.mn</div>
        </div>
        <div>
          <div style={styles.p1}>Богино холбоос:</div>
          <div style={styles.p2}>{props.props}</div>
        </div>
        <button style={styles.button} onClick={props}>
          Хуулж авах
        </button>
      </div>
      <div style={styles.line}></div>
    </div>
  );
}
export default Card;
