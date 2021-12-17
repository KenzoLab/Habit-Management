
import { ButtonContainer, ContentContainer, Difficulty, LineVertical, CardFrame } from "./styles";
import { useHabit } from "../../providers/Habits";

// achieved: false
// difficulty: "Easy"
// frequency: "Diary"
// how_much_achieved: 0
// id: 1447
// user: 100

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
