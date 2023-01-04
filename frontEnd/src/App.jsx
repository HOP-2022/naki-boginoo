import { useState, useRef } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import boginoLogo from "./assets/logo.png";
import Card from "./components/Card";

import "@fontsource/ubuntu";

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const enterClick = (event) => {
    if (event.code === "Enter") {
      setList([...list, inputValue]);
      setInputValue("");
    }
  };
  // console.log(inputValue);

  const styles = {
    container: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    },
    body: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
    inputbutContainer: {
      marginTop: "80px",
    },
    input: {
      boxSizing: "border-box",
      width: "581px",
      height: "44px",
      left: "325px",
      top: "424px",
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
    button: {
      width: "192px",
      height: "44px",
      left: "922px",
      top: "424px",
      background: "#02B589",
      border: "#02B589",
      borderRadius: "100px",

      fontFamily: "Ubuntu",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "20px",
      lineHeight: "23px",
      textTransform: "uppercase",
      color: "#FFFFFF",
    },
  };
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.body}>
        <img src={boginoLogo} />
        <div style={styles.inputbutContainer}>
          <input
            placeholder="https://www.web-huudas.mn"
            style={styles.input}
            value={inputValue}
            onKeyPress={enterClick}
            onChange={(event) => {
              setInputValue(event.target.value);
            }}
          />
          <button
            style={styles.button}
            onClick={() => {
              console.log(list);
              setList([...list, inputValue]);
              setInputValue("");
            }}
          >
            Богиносгох
          </button>
        </div>
        {list.map((el, index) => {
          return <Card props={el} key={index} />;
        })}
      </div>
      <Footer />
    </div>
  );
}

export default App;
