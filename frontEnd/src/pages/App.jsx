import { useState, useContext } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import boginoLogo from "../assets/logo.png";
import Card from "../components/Card";
import Task from "../components/Task";
import { Context } from "../components/HIstoryContext";
import "@fontsource/ubuntu";
import axios from "axios";

function App() {
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
  const [link, setLink] = useState("");
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState(
    "https://www.youtube.com/watch?v=CgeUfinpJeA"
  );
  const URL = "http://localhost:3001/links";
  const { history, handleChange, data } = useContext(Context);
  const linkSender = () => {
    if (link !== "") {
      console.log(link);
      axios({
        url: URL,
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
        data: {
          link,
        },
      })
        .then(function (res) {
          setUrl(res.data.data.link);
          setShortUrl("localhost:3000/" + res.data.data._id);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <div style={styles.container}>
      <Header />
      <div style={styles.body}>
        <img src={boginoLogo} alt="" />
        <form
          style={styles.inputbutContainer}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            style={styles.input}
            type="text"
            id="inputId"
            placeholder="https://www.web-huudas.mn"
            onChange={(e) => {
              setLink(e.target.value);
            }}
          />
          <button style={styles.button} onClick={linkSender}>
            Богиносгох
          </button>
        </form>
        {url && <Task link={url} shortLink={shortUrl} />}
        {history
          ? data.map((el, index) => {
              return (
                <Card link={el.link} shortLink={el.shortLink} key={index} />
              );
            })
          : ""}
      </div>
      <Footer />
    </div>
  );
}

export default App;
