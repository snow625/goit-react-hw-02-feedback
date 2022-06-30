import { Component } from "react";
import Section from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";

import "modern-normalize/modern-normalize.css";
import "./index.css";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changed = () => {
    const arrOfValue = Object.values(this.state);
    const total = arrOfValue.reduce((acc, el) => {
      return acc + el;
    });
    return total > 0 ? true : false;
  };

  handleClick = (name) => {
    this.setState((prevState) => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { state } = this;
    let total = 0;
    for (const key in state) {
      if (Object.hasOwnProperty.call(state, key)) {
        total += state[key];
      }
    }
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const { countTotalFeedback } = this;
    const procent = (good / countTotalFeedback()) * 100;
    return procent ? Math.round(procent) : 0;
  };

  render() {
    const {
      state,
      handleClick,
      countTotalFeedback,
      countPositiveFeedbackPercentage,
      changed,
    } = this;
    const { good, neutral, bad } = state;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions options={state} onLeaveFeedback={handleClick} />
        </Section>
        <Section title="Statistics">
          {changed() ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={`${countPositiveFeedbackPercentage()}%`}
            ></Statistics>
          ) : (
            <Notification message="There is no feedback." />
          )}
        </Section>
      </>
    );
  }
}
export default App;
