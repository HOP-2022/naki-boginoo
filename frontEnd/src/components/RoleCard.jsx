import React, { useEffect, useRef } from "react";
import axios from "axios";
import { useState } from "react";

export function RoleCard({ data }) {
  const neg = useRef("");
  const hoyr = useRef("");
  const gurav = useRef("");
  useEffect(() => {
    console.log(neg.current.checked);
    if (data.role === "user") {
      neg.current.checked = true;
    }
    if (data.role === "admin") {
      hoyr.current.checked = true;
    }
    if (data.role === "superadmin") {
      gurav.current.checked = true;
    }
  });
  let role = "";
  const userController = () => {
    gurav.current.checked = false;
    hoyr.current.checked = false;
    role = "user";
    axios
      .put(`http://localhost:3001/users/${data._id}`, {
        role: role,
      })
      .then(function (response) {
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const adminController = () => {
    neg.current.checked = false;
    gurav.current.checked = false;
    role = "admin";
    axios
      .put(`http://localhost:3001/users/${data._id}`, {
        role: role,
      })
      .then(function (response) {
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const superadminController = () => {
    neg.current.checked = false;
    hoyr.current.checked = false;
    role = "superadmin";
    axios
      .put(`http://localhost:3001/users/${data._id}`, {
        role: role,
      })
      .then(function (response) {
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const styles = {
    container: {
      marginLeft: "500px",
      width: "1000px",
      display: "flex",
      // flexDirection: "row"
      justifyContent: "space-between",
    },
    input: {},
  };
  return (
    <div style={styles.container}>
      <div>{data.email}</div>
      <input
        type="checkbox"
        ref={neg}
        style={styles.input}
        onClick={userController}
      />
      <input
        type="checkbox"
        ref={hoyr}
        style={styles.input}
        onClick={adminController}
      />
      <input
        type="checkbox"
        ref={gurav}
        style={styles.input}
        onClick={superadminController}
      />
    </div>
  );
}
