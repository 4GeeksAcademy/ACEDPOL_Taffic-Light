//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import TrafficLight from "./component/TrafficLight.jsx";

//render your react application
let app = ReactDOM.createRoot(document.getElementById('app'));
app.render(<TrafficLight />);

