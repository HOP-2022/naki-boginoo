import React from "react";
function Task({ link, shortLink }) {
  const styles = {
    container: {
      width: "773px",
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
  };
  return (
    <div>
      <div style={styles.container}>
        <div>
          <div style={styles.p1}>Өгөгдсөн холбоос:</div>
          <div style={styles.p2}>{link}</div>
        </div>
        <div>
          <div style={styles.p1}>Богино холбоос:</div>
          <div style={styles.p2}>{shortLink}</div>
        </div>
        <button
          style={styles.button}
          onClick={() => {
            navigator.clipboard.writeText(shortLink);
          }}
        >
          Хуулж авах
        </button>
      </div>
    </div>
  );
}
export default Task;
