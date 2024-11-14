import React, { useState } from "react";
import "../../styles/index.css"

//create your first component
const TrafficLight = () => {
	const [value, setValue] = useState("");

	return (
		<div className="container bg-dark py-2" style={{width: 120, height: 360}}>
			<button onClick={() => setValue("rojo")} className={"rounded-circle bg-danger my-2 " + (value == "rojo" ? "encendido" : "")} style={{width: 100, height: 100}}></button>
			<button onClick={() => setValue("amarillo")} className={"rounded-circle bg-warning my-2 " + (value == "amarillo" ? "encendido" : "")} style={{width: 100, height: 100}}></button>
			<button onClick={() => setValue("verde")} className={"rounded-circle bg-success my-2 " + (value == "verde" ? "encendido" : "")} style={{width: 100, height: 100}}></button>
		</div>
	);
};

export default TrafficLight;
