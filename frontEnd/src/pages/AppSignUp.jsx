import React from "react";
import Header from "../components/Header";
import boginoLogo from "../assets/logo.png";
import "@fontsource/ubuntu";
import Footer from "../components/Footer";
import { useRef, useState } from "react";
import axios from "axios";

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
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const email = useRef("");
  const password1 = useRef("");
  const password2 = useRef("");

  const superadmin = useRef("");
  const admin = useRef("");

  const handleChange = () => {
    let userRole = "user";
    if (superadmin.current.checked === true) {
      userRole = "superadmin";
    }
    if (admin.current.checked === true) {
      userRole = "admin";
    }
    if (
      email.current.value &&
      password1.current.value &&
      password2.current.value !== "" &&
      password1.current.value === password2.current.value
    ) {
      axios
        .post("http://localhost:3001/users/signup", {
          email: email.current.value,
          password: password1.current.value,
          role: userRole,
        })
        .then(function (response) {
          console.log(response.data);
          window.location.replace("/signin");
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
        <div style={styles.nevtreh}>Бүртгүүлэх</div>
        <div>
          <div>Цахим хаяг</div>
          <input
            style={styles.input}
            placeholder="name@mail.domain"
            type="email"
            ref={email}
          />
        </div>
        <div>
          <div>Нууц үг</div>
          <input
            style={styles.input}
            placeholder="••••••••••"
            ref={password1}
            type={passwordShown ? "text" : "password"}
          />
        </div>
        <div>
          <div>Нууц үгээ давтна уу?</div>
          <input
            style={styles.input}
            placeholder="••••••••••"
            ref={password2}
            type={passwordShown ? "text" : "password"}
          />
        </div>
        <button onClick={togglePassword}>show password</button>
        <div style={{ display: "flex", flexDirection: "row" , paddingRight: "45px"}}>
          <input
            type="checkbox"
            ref={admin}
          />
          <div>admin</div>
        </div>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <input
            type="checkbox"
            ref={superadmin}
          />
          <div>super admin</div>
        </div>
        <button style={styles.nevtreh1} onClick={handleChange}>
          Бүртгүүлэх
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default AppSignUp;
