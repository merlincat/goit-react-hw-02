import css from './Feedback.module.css';
const Feedback = ({ feedbackCount, totalFeedback }) => {
  const keys = Object.keys(feedbackCount);
  const positivePart = Math.round(
    ((feedbackCount.good + feedbackCount.neutral) / totalFeedback) * 100
  );
  return (
    <ul>
      {keys.map(key => (
        <li className={css.feedbackItem} key={key}>
          {key}: {feedbackCount[key]}
        </li>
      ))}
      <li className={css.feedbackItem}>Total: {totalFeedback}</li>
      <li className={css.feedbackItem}>Positive: {positivePart}%</li>
    </ul>
  );
};
export default Feedback;
