import { ButtonList, Button } from './Button.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  console.log(options);
  return (
    <ButtonList>
      {options.map(option => (
        <li key={option}>
          <Button onClick={() => onLeaveFeedback(option)}>{option}</Button>
        </li>
      ))}
    </ButtonList>
  );
};
