import { useCallback, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState({});
  const [shortLink, setShortLink] = useState("none");
  const [check, setCheck] = useState(0);
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const fetchApi = useCallback(async () => {
    try {
      const respone = await axios.get(
        `https://api.shrtco.de/v2/shorten?url=${input}`
      );
      console.log(respone);
      setData(respone.data.result);
    } catch (err) {
      console.log(err);
    }
  }, [input]);

  return (
    <div className="App">
      <form>
        <span>Enter a Link :</span>
        <input
          placeholder="example.com"
          value={input}
          onChange={handleInputChange}
        ></input>
        <button
          onClick={(e) => {
            e.preventDefault();
            if (check === 1) setShortLink(data.short_link);
            else if (check === 2) setShortLink(data.short_link2);
            else if (check === 3) setShortLink(data.short_link3);
            setInput("");
          }}
        >
          Submit
        </button>
        <br></br>
        <button
          onClick={(e) => {
            e.preventDefault();
            fetchApi();
            setCheck(1);
          }}
        >
          shrtco.de
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            fetchApi();
            setCheck(2);
          }}
        >
          9qr.de
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            fetchApi();
            setCheck(3);
          }}
        >
          shiny.link
        </button>
      </form>
      <h3>{shortLink}</h3>
    </div>
  );
}

export default App;
