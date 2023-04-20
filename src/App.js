import { useEffect, useState } from "react";
import "./App.css";
import Main from "./components/Main";
import Header from "./components/Header";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import FamilyPackage from "./components/FamilyPackage";
import CouplePackage from "./components/CouplePackage";
import Contact from "./components/Contact";
import LoadingBar from 'react-top-loading-bar'


/************************************************************************** */


function App() {
  const apiKey=process.env.REACT_APP_API_KEY
  const [destinationsData, setDestinationsData] = useState([]);
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    async function fetchData() {
      const data1 = await apiGet("geoname", "name=alo");
      const data2 = await apiGet(
        "radius",
        `radius=1000&limit=9&offset=0&lon=${data1.lon}&lat=${data1.lat}&rate=2&format=json`
        );
        setProgress(50)
        const data3 = await Promise.all(
          data2.map(async (item) => {
            const obj = await apiGet(`xid/${item.xid}`);
            return obj;
          })
          );
          setProgress(100);
      setDestinationsData(data3);
    }
    fetchData();
  }, []);

  function apiGet(method, query) {
    return new Promise(function (resolve, reject) {
      var otmAPI =
        "https://api.opentripmap.com/0.1/en/places/" +
        method +
        "?apikey=" +
        apiKey;
      if (query !== undefined) {
        otmAPI += "&" + query;
      }
      fetch(otmAPI)
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch(function (err) {
          console.log("Fetch Error :-S", err);
        });
    });
  }

  return (
    <>
      <Router basename="/matours">
      <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Header destinationsData={destinationsData}/>
        <Routes>
          
          <Route
            path="/"      
                  element={
              <>
                <Main destinationsData={destinationsData} />
              </>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/family" element={<FamilyPackage/>} />
          <Route path="/couple" element={<CouplePackage/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Main  destinationsData={destinationsData}/>} />
    
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
