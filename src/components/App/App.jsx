import { useState, useEffect } from 'react';
import Description from '../Description/Description';
import Options from '../Options/Options';
import Feedback from '../Feedback/Feedback';
import Notification from '../Notification/Notification';
import css from './App.module.css';

const App = () => {
  // const [feedbackCount, setFeedback] = useState({
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // });
  const initialFeedbackCount = JSON.parse(
    localStorage.getItem('feedbackCount')
  ) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  const [feedbackCount, setFeedback] = useState(initialFeedbackCount);

  useEffect(() => {
    localStorage.setItem('feedbackCount', JSON.stringify(feedbackCount));
  }, [feedbackCount]);

  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedbackCount,
      [feedbackType]: feedbackCount[feedbackType] + 1,
    });
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  // const hasFeedback = Object.values(feedbackCount).some(count => count > 0);

  const totalFeedback =
    feedbackCount.bad + feedbackCount.good + feedbackCount.neutral;

  return (
    <div className={css.container}>
      <Description />
      <Options
        feedbackCount={feedbackCount}
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        hasFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback feedbackCount={feedbackCount} totalFeedback={totalFeedback} />
      ) : (
        <Notification></Notification>
      )}
    </div>
  );
};

export default App;
