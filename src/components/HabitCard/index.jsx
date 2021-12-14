import CardFrame from "../CardFrame";
import { ContentContainer } from "./styles";

const HabitCard = ({ title, category, description, difficult }) => {
  return (
    <CardFrame>
      <ContentContainer cardType="habit">
        <div className="content__text">
          <h4 className="content__title">{title}</h4>
          <p className="content__description">{description}</p>
          <span className="content__category">{category}</span>
          <span className="content__difficult">{difficult}</span>
        </div>
        <div className="delete__button">X</div>
      </ContentContainer>
    </CardFrame>
  );
};

export default HabitCard;
