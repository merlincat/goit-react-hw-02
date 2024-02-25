import css from './Options.module.css';
const Options = ({
  feedbackCount,
  updateFeedback,
  resetFeedback,
  hasFeedback,
}) => {
  const keys = Object.keys(feedbackCount);

  return (
    <div className={css.btnWrapper}>
      {keys.map(key => (
        <button
          className={css.btn}
          key={key}
          onClick={() => updateFeedback(key)}
        >
          {key}
        </button>
      ))}
      {hasFeedback != 0 ? (
        <button className={css.btn} onClick={resetFeedback}>
          Reset
        </button>
      ) : (
        false
      )}
    </div>
  );
};
export default Options;
