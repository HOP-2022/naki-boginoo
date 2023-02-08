import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import Header from "../components/Header";
import { RoleCard } from "../components/RoleCard";

function AppRoles() {
  const [userData, setUserData] = useState();
  useEffect(() => {
    axios
      .get("http://localhost:3001/users", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-type": "application/json",
        },
      })
      .then(function (response) {
        console.log(response.data.data);
        setUserData(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const styles = {
    container: {
      marginLeft: "500px",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      width: "1000px",
      // height: "100%",
    },
    p: {
      color: "rgb(2, 181, 137)",
    },
  };
  return (
    <>
      <Header />
      <div style={styles.container}>
        <div style={styles.p}>Users</div>
        <div style={styles.p}>user</div>
        <div style={styles.p}>admin</div>
        <div style={styles.p}>superadmin</div>
      </div>
      {userData?.map((el, index) => {
        return <RoleCard data={el} key={index} />;
      })}
    </>
  );
}
export default AppRoles;
