import CardFrame from "../CardFrame";
import { ContentContainer, Status, Difficult } from "./styles";

const GoalsCard = ({ title, group, difficult, status }) => {
  return (
    <CardFrame cardType="goals">
      <ContentContainer>
        <div>
          <span className="content__group">{group}</span>
          <Difficult>{difficult}</Difficult>
        </div>
        <h4 className="content__title">{title}</h4>
        <Status>{status}</Status>
      </ContentContainer>
    </CardFrame>
  );
};

export default GoalsCard;
