import Notification from "../Notification";
import style from "./statistics.module.css";

import PropTypes from "prop-types";

const Statistics = (props) => {
  const { good, neutral, bad, total, positivePercentage } = props;
  const keys = Object.keys(props);
  let counter = props.total;

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
  return counter ? (
    <ul className={style.list}>{elements}</ul>
  ) : (
    <Notification message="There is no feedback." />
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};

Notification.propTypes = {
  message: PropTypes.string,
};
