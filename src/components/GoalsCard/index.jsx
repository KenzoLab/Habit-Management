import CardFrame from "../CardFrame";
import { ContentContainer, Status, Difficult } from "./styles";

const GoalsCard = ({ title, group, difficult, status }) => {
  return (
    <CardFrame cardType="goals">
      <ContentContainer>
        <h4 className="content__title">{title}</h4>
        <p className="content__group">group: {group}</p>
        <Difficult>{difficult}</Difficult>
        <Status>status {status}%</Status>
      </ContentContainer>
    </CardFrame>
  );
};

export default GoalsCard;
