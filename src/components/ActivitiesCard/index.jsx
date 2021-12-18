import CardFrame from "../CardFrame";
import { ContentContainer, Status } from "./styles";

const ActivitiesCard = ({ title, group, date, status }) => {
  return (
    <CardFrame cardType="activities">
      <ContentContainer>
        <h4 className="content__title">{title}</h4>
        <p className="content__group">Grupo: {group}</p>
        <p className="content__date">
          Date: <span>{date}</span>
        </p>
        <Status>{status}</Status>
      </ContentContainer>
    </CardFrame>
  );
};

export default ActivitiesCard;
