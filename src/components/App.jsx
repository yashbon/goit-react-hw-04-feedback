import { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const countFeedback = event => {
        switch (event.target.name) {
            case 'good':
                setGood(good + 1);
                break;
            case 'neutral':
                setNeutral(neutral + 1);
                break;
            case 'bad':
                setBad(bad + 1);
                break;
            default:
                break;
        }
    };

    const countTotalFeedback = () => good + neutral + bad;
    const countPositiveFeedbackPercentage = () => {
        return Math.round((good / countTotalFeedback()) * 100);
    };
    const feedbackNames = ['good', 'neutral', 'bad'];
    const feedbackValues = [good, neutral, bad];

    return (
        <div
            style={{
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                // fontSize: 40,
                color: '#010101',
                backgroundColor: 'LightSteelBlue',
            }}
        >
            <h1>Espresso</h1>
            <Section title="Please leave feedback">
                <FeedbackOptions
                    feedbackNames={feedbackNames}
                    onLeaveFeedback={countFeedback}
                />
            </Section>
            <Section title="Statistics">
                {!countTotalFeedback() > 0 ? (
                    <Notification message="There is no feedback" />
                ) : (
                    <Statistics
                        feedbackNames={feedbackNames}
                        feedbackValues={feedbackValues}
                        totalFeedback={countTotalFeedback}
                        positivePercentage={countPositiveFeedbackPercentage}
                    />
                )}
            </Section>
        </div>
    );
}

export default App;
