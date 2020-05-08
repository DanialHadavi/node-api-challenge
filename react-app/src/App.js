import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [editing, setEditing] = useState(false);
  const [quote, setQuote] = useState([]);
  const [action, setAction] = useState([]);

  const reloadPage = () => {
    window.location.reload();
  };
  useEffect(() => {
    axios
      .get("/api/projects")
      .then((res) => setQuote(res.data))
      .then((err) => console.log(err));
  }, []);
  useEffect(() => {
    axios
      .get("/api/actions")
      .then((res) => setAction(res.data))
      .then((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="App">
        {quote.map((quote) => (
          <div
            onClick={() => setEditing(true)}
            className="quote-card"
            key={quote.id}
          >
            <h3> {quote.name}</h3>
            <h3>{quote.description}</h3>
            {editing &&
              action.map((action) => (
                <ul>
                  <li>{action.description}</li>
                  <li> {action.notes} </li>
                </ul>
              ))}

            <br></br>
          </div>
        ))}
      </div>{" "}
    </>
  );
}

export default App;
