import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = props => {
    const { feedbackNames, onLeaveFeedback } = props;
    return (
        <div>
            <ul className={styles.list}>
                {feedbackNames.map(feedbackName => (
                    <li key={feedbackName}>
                        <button
                            onClick={onLeaveFeedback}
                            className={styles.option__button}
                            name={feedbackName}
                        >
                            {feedbackName}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
    feedbackNames: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
