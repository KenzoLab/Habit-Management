import CardFrame from "../CardFrame";
import { ContentContainer, Difficult, LineVertical } from "./styles";

const HabitCard = ({ title, category, description, difficult }) => {
  return (
    <CardFrame cardType="habit">
      <ContentContainer cardType="habit">
        <div className="content__text">
          <h4 className="content__title">{title}</h4>
          <p className="content__description">{description}</p>
          <span className="content__category">{category}</span>
          <Difficult>{difficult}</Difficult>
        </div>
          <LineVertical/>
        <div className="delete__button">X</div>
      </ContentContainer>
    </CardFrame>
  );
};

export default HabitCard;
