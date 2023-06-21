import PropTypes from 'prop-types';
import css from './Statistics.module.css';
const Statistics = props => {
    const { data, options, totalFeedback, positivePercentage } = props;
    return (
        <>
            <ul className={css.statsList}>
                {options.map((option, idx) => (
                    <li className={css.statsListItem} key={option}>
                        {option}: {data[idx]}
                    </li>
                ))}
            </ul>
            {/* <p>
                {options[0]}: {good}
            </p>
            <p>
                {options[1]}: {neutral}
            </p>
            <p>
                {options[2]}: {bad}
            </p> */}
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
    data: PropTypes.array.isRequired,
    options: PropTypes.array.isRequired,
    totalFeedback: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
};
