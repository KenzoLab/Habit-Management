import { useEffect, useState } from "react";
import CardFrame from "../CardFrame";
import { ContentContainer } from "./styles";

const ActivitiesCard = ({ title, group, date }) => {
  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  useEffect(() => {
    setDay(date.slice(8, 10));
    setMonth(date.slice(5, 7));
    setYear(date.slice(0, 4));
  }, []);
  return (
    <CardFrame cardType="activities">
      <ContentContainer>
        <h4 className="content__title">{title}</h4>
        <p className="content__group">
          Group: <span>{group}</span>
        </p>
        <p className="content__date">
          Date: <span>{`${day}/${month}/${year}`}</span>
        </p>
      </ContentContainer>
    </CardFrame>
  );
};

export default ActivitiesCard;
