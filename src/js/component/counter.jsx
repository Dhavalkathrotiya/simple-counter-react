import React from "react";
import propTypes from "prop-types";

function Counter(props) {
	return (
		<div className="bigCounter">
			<div className="clock">
				<i className="fa-regular fa-clock"></i>
			</div>
			<div className="six fw-bold">{props.digitSix}</div>
			<div className="five fw-bold">{props.digitFive}</div>
			<div className="four fw-bold">{props.digitFour}</div>
			<div className="tree fw-bold">{props.digitThree}</div>
			<div className="two fw-bold">{props.digitTwo}</div>
			<div className="one fw-bold">{props.digitOne}</div>
		</div>
	);
}

Counter.propTypes = {
	digitSix: propTypes.number,
	digitFive: propTypes.number,
	digitFour: propTypes.number,
	digitThree: propTypes.number,
	digitTwo: propTypes.number,
	digitOne: propTypes.number,
};

export default Counter;
