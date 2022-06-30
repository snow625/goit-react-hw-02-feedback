import style from "./statistics.module.css";

import PropTypes from "prop-types";

const Statistics = (props) => {
  const keys = Object.keys(props);

  const elements = keys.map((el) => {
    let elementText = el.replace(el[0], el[0].toUpperCase());

    if (el === "positivePercentage") {
      elementText = "Positive feedback";
    }
    return (
      <li key={el}>
        <p>{`${elementText}: ${props[el]}`}</p>
      </li>
    );
  });
  return <ul className={style.list}>{elements}</ul>;
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string.isRequired,
};
