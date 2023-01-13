import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import React from "react";

const Redirect = () => {
  const { id } = useParams();
  axios
    .get(`http://localhost:3001/links/${id}`)
    .then(function (response) {
      console.log(response);
      window.location.replace(response.data.data.link);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default Redirect;
