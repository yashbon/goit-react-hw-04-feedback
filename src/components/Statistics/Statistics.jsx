import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = props => {
    const { feedbackNames, feedbackValues, totalFeedback, positivePercentage } =
        props;
    return (
        <>
            <ul className={css.statsList}>
                {feedbackNames.map((feedbackName, idx) => (
                    <li className={css.statsListItem} key={feedbackName}>
                        {feedbackName}: {feedbackValues[idx]}
                    </li>
                ))}
            </ul>
            <p className={css.total}>Total: {totalFeedback()}</p>
            {totalFeedback() > 0 && (
                <p className={css.good}>
                    Good feedback: {positivePercentage()}%
                </p>
            )}
        </>
    );
};

export default Statistics;

Statistics.propTypes = {
    feedbackNames: PropTypes.array.isRequired,
    feedbackValues: PropTypes.array.isRequired,
    totalFeedback: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
};
