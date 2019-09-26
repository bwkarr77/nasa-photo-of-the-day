import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Main from "./components/Main.jsx";

/*
  // const [urlAdd, setUrlAdd] = useState("");
  // const [copyright, setRights] = useState("");
  // const [date, setDate] = useState("");
  // const [explanation, setExplanation] = useState("");
  // const [hDurl, setHdurl] = useState("");
  // const [mediaType, setMediaType] = useState("");
  // const [title, setTitle] = useState("");
  // const [version, setVersion] = useState("");


*/
function App() {
  const [siteContent, setContent] = useState([]);
  const [urlAdd, setUrlAdd] = useState("");
  const [test, setTest] = useState("");
  const [mediaType, setMediaType] = useState("");

  //Finds today's date...
  let todayDate = new Date();
  let today = `${todayDate.getFullYear()}-${todayDate.getMonth() +
    1}-${todayDate.getDate()}`;
  // let today = "2019-8-25";  //Video file for testing

  useEffect(() => {
    // let today = `2019-09-08`; //Testing for video
    axios
      // //NASA CONTENT
      // .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${today}`)
      .then(results => {
        const siteKeys = Object.keys(results.data).map(each => each);
        //["copyright", "date", "explanation", "hdurl", "media_type", "service_version", "title", "url"]
        // console.log(results.data[siteKeys[0]]);
        siteKeys.forEach(element => {
          console.log(results.data[element]);
        });
        setContent(results.data);
        !results.data.hdurl
          ? setUrlAdd(results.data.url)
          : setUrlAdd(results.data.hdurl);
        console.log(results.data.media_type);
      })
      //
      //

      //  //---Studio gibli stuff---
      // .get(`https://ghibliapi.herokuapp.com/films`)
      // .then(results => {
      //   console.log(results.data[0]);
      //   const siteKeysGibli = Object.keys(results.data[0]).map(each => each);
      //   console.log(siteKeysGibli);
      //   // console.log(results.data[0].id); //prints out the id of results.data
      //   setContent(results.data[0]);
      //   // console.log(siteContent);
      // })
      //
      //
      .catch(err => console.log(err));
    //
    console.log("Hello From Inside");
  }, []);
  console.log(`Hello from Outside`);

  if (!urlAdd) return <h2>Loading...</h2>;
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Header
        title={siteContent.title}
        date={siteContent.date}
        setTest={setTest}
        test={test}
      />
      <Main
        explanation={siteContent.explanation}
        url={urlAdd}
        mediaType={siteContent.media_type}
      />
      <Footer
        copyright={siteContent.copyright}
        service_version={siteContent.service_version}
      />
    </div>
  );
}

export default App;
