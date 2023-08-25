import { GlobalStyle, Container } from './GlobalStyle';
import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbacskOptions';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export const App = () => {
  const [good, setDood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBed] = useState(0);

  const handleLeaveFeedback = e => {
    switch (e) {
      case 'good':
        setDood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBed(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const totalFeedback = () => good + neutral + bad;

  const positivePercentage = () => Math.round((good * 100) / totalFeedback());

  return (
    <Container>
      <Section title="Plase leave feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section titleStat="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback()}
          positivePercentage={positivePercentage()}
        />
      </Section>

      <GlobalStyle />
    </Container>
  );
};
