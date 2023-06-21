import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = props => {
    const {
        title,
        // good,
        // neutral,
        // bad,
        // data,
        // options,
        // onLeaveFeedback,
        // totalFeedback,
        // positiveFeedback,
    } = props;
    return (
        <section>
            <h2 className={css.title}>{title}</h2>
            {props.children}
            {/* <FeedbackOptions
                options={options}
                onLeaveFeedback={onLeaveFeedback}
            /> */}
            {/* {!totalFeedback() > 0 ? (
                <Notification message="There is no feedback" />
            ) : (
                <Statistics
                    // options={options}
                    // good={good}
                    // neutral={neutral}
                    // bad={bad}
                    data={data}
                    options={options}
                    totalFeedback={totalFeedback}
                    positivePercentage={positiveFeedback}
                />
            )} */}
        </section>
    );
};

export default Section;
Section.propTypes = {
    title: PropTypes.string.isRequired,
};
