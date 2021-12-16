import CardFrame from "../CardFrame";
import { ContentContainer, Difficulty, LineVertical } from "./styles";

// achieved: false
// difficulty: "Easy"
// frequency: "Diary"
// how_much_achieved: 0
// id: 1447
// user: 100

const HabitCard = ({ title, category, frequency, difficulty }) => {
  return (
    <CardFrame cardType="habit">
      <ContentContainer cardType="habit">
        <div className="content__text">
          <h4 className="content__title">{title}</h4>
          <p className="content__frequency">{frequency}</p>
          <span className="content__category">{category}</span>
          <Difficulty>{difficulty}</Difficulty>
        </div>
        <LineVertical />
        <div className="delete__button">X</div>
      </ContentContainer>
    </CardFrame>
  );
};

export default HabitCard;
