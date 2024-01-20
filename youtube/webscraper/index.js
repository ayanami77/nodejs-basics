const PORT = 8000;
const URL = "https://www.oreilly.co.jp/ebook/#all_titles";

const express = require("express");
const axios = require("axios");
const cheerio = require("cheerio");

const app = express();
app.listen(PORT, console.log("server is running"));

axios(URL)
  .then((res) => {
    const parsedHTML = res.data;
    const $ = cheerio.load(parsedHTML);

    $("td.title", parsedHTML).each(function () {
      const ebookTitle = $(this).find(".ebookTitle").text();
      console.log(ebookTitle);
    });
  })
  .catch((err) => console.log(err));
