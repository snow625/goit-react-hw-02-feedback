import PropTypes from "prop-types";
import style from "./feedbackOptions.module.css";
const FeedbackOptions = (props) => {
  const { options, onLeaveFeedback } = props;
  const btnNames = Object.keys(options);
  const elements = btnNames.map((el) => {
    const btnName = el.replace(el[0], el[0].toUpperCase());
    return (
      <li key={el}>
        <button
          className={style.btn}
          onClick={() => {
            onLeaveFeedback(`${el}`);
          }}
          type="button"
        >
          {btnName}
        </button>
      </li>
    );
  });

  return <ul className={style.list}>{elements}</ul>;
};

export default FeedbackOptions;

FeedbackOptions.defaultProps = {
  options: {},
};

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }),
  onLeaveFeedback: PropTypes.func.isRequired,
};
