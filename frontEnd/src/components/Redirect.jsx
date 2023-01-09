import axios from "axios";
import { useParams, useLocation } from "react-router-dom";
import React from "react";

const Redirect = () => {
  const { id } = useParams();
  axios
    .get(`http://localhost:8000/links/${id}`)
    .then(function (response) {
      window.location.replace(response.data.data.URL);
    })
    .catch(function (error) {
      console.log(error);
    });
};

export default Redirect;
