import { Component } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleClick = event => {
        const keyName = event.target.textContent.toLowerCase();
        this.setState(prevSatate => ({
            [keyName]: prevSatate[keyName] + 1,
        }));
    };

    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    };

    countPositiveFeedbackPercentage = () => {
        return Math.round((this.state.good / this.countTotalFeedback()) * 100);
    };

    render() {
        // const { good, neutral, bad } = this.state;
        const data = Object.values(this.state);
        const options = Object.keys(this.state);
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
                <Section
                    title="Please leave feedback"
                    // good={good}
                    // neutral={neutral}
                    // bad={bad}
                    // state={this.state}

                    // data={data}

                    // options={options}
                    // onLeaveFeedback={this.handleClick}

                    // totalFeedback={this.countTotalFeedback}
                    // positiveFeedback={this.countPositiveFeedbackPercentage}
                >
                    <FeedbackOptions
                        options={options}
                        onLeaveFeedback={this.handleClick}
                    />
                </Section>
                <Section title="Statistics">
                    {!this.countTotalFeedback() > 0 ? (
                        <Notification message="There is no feedback" />
                    ) : (
                        <Statistics
                            data={data}
                            options={options}
                            totalFeedback={this.countTotalFeedback}
                            positivePercentage={
                                this.countPositiveFeedbackPercentage
                            }
                        />
                    )}
                </Section>
                {/* <div>
                    <p>Please leave feedback</p>
                    <FeedbackOptions
                        options={options}
                        onLeaveFeedback={this.handleClick}
                    ></FeedbackOptions>
                </div> */}
                {/* <div>
                    <p>Statistics</p>
                    <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={this.countTotalFeedback()}
                        positivePercentage={this.countPositiveFeedbackPercentage()}
                    ></Statistics>
                </div> */}
            </div>
        );
    }
}
