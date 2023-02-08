const axios = require("axios");
const users1 = [
  {
    first_name: "Kevon",
    last_name: "Fillan",
    email: "kfillan0@barnesandnoble.com",
    gender: "Male",
  },
  {
    first_name: "Jean",
    last_name: "Delhanty",
    email: "jdelhanty1@usatoday.com",
    gender: "Male",
  },
  {
    first_name: "Kamillah",
    last_name: "Leddy",
    email: "kleddy2@blogspot.com",
    gender: "Female",
  },
  {
    first_name: "Duke",
    last_name: "MacKimm",
    email: "dmackimm3@nps.gov",
    gender: "Male",
  },
  {
    first_name: "Corella",
    last_name: "Foxton",
    email: "cfoxton4@hao123.com",
    gender: "Female",
  },
  {
    first_name: "Thedric",
    last_name: "Studart",
    email: "tstudart5@huffingtonpost.com",
    gender: "Male",
  },
  {
    first_name: "Winthrop",
    last_name: "Jurewicz",
    email: "wjurewicz6@imgur.com",
    gender: "Male",
  },
  {
    first_name: "Dominga",
    last_name: "Crayton",
    email: "dcrayton7@disqus.com",
    gender: "Female",
  },
  {
    first_name: "Teodoro",
    last_name: "Chattington",
    email: "tchattington8@biblegateway.com",
    gender: "Male",
  },
  {
    first_name: "Rogerio",
    last_name: "Trenouth",
    email: "rtrenouth9@who.int",
    gender: "Male",
  },
  {
    first_name: "Doroteya",
    last_name: "Dunnan",
    email: "ddunnana@bluehost.com",
    gender: "Female",
  },
  {
    first_name: "Maurice",
    last_name: "Mariolle",
    email: "mmariolleb@nsw.gov.au",
    gender: "Male",
  },
];

function createPost(data) {
  // console.log(data);
  axios.post("http://localhost:3001/users1", data).then((res) => {
    console.log(res);
  });
}

function createPosts() {
  users1.map((el, ind) => {
    createPost(el);
  });
}

createPosts();
