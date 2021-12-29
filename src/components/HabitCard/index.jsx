import { ButtonContainer, ContentContainer, Difficulty } from "./styles";
import { useHabit } from "../../providers/Habits";
import CardFrame from "../CardFrame";

const HabitCard = ({ title, category, frequency, difficulty, habitId }) => {
  const { deleteHabitFunction } = useHabit();

  //DELETE HABIT
  const onDeleteHabit = () => {
    deleteHabitFunction(habitId);
  };
  return (
    <CardFrame cardType="habit">
      <ContentContainer cardType="habit">
        <h4 className="content__title">{title}</h4>
        <p className="content__frequency">{frequency}</p>
        <span className="content__category">{category}</span>
        <Difficulty>{difficulty}</Difficulty>
      </ContentContainer>
      <ButtonContainer>
        <button className="delete__button" onClick={onDeleteHabit}>
          x
        </button>
      </ButtonContainer>
    </CardFrame>
  );
};

export default HabitCard;
