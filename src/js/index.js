//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import SecondsCounter from "./component/SecondsCounter.jsx";

let counter = 0;
setInterval(function () {
	ReactDOM.render(
		<SecondsCounter seconds={counter} />,
		document.getElementById("app")
	);
	counter += 1;
}, 1000);
