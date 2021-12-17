import { useEffect, useState } from "react";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import RadarIcon from "@mui/icons-material/Radar";

import CardFrame from "../CardFrame";
import { ContentContainer } from "./styles";

const GroupCard = ({ group, cardType }) => {
  const [finishedGoals, setFinishedGols] = useState(0);
  const { name, description, goals, category } = group;

  const countFinishedGoals = () =>
    goals.reduce((acc, goal) => (goal.achieved ? acc + 1 : acc), 0);

  useEffect(() => {
    setFinishedGols(countFinishedGoals());
  }, [goals]);

  return (
    <CardFrame cardType={cardType}>
      <ContentContainer cardType={cardType}>
        <div className="content__text">
          <h4 className="content__title">{name}</h4>
          <p className="content__description">{description}</p>
          <span className="content__category">{category}</span>
          <span className="content__goals">Goals: {finishedGoals}</span>
        </div>
        <div className="mobile__buttons">
          <button type="button">
            <BookmarkAddIcon />
          </button>
          <button type="button">
            <BorderColorIcon />
          </button>
          <button type="button">
            <RadarIcon />
          </button>
        </div>
        <div className="desktop__buttons">
          <button type="button">
            <BookmarkAddIcon />
            <span>Subscribe</span>
          </button>
          <button type="button">
            <BorderColorIcon />
            <span>Activities</span>
          </button>
          <button type="button">
            <RadarIcon />
            <span>Goals</span>
          </button>
        </div>
      </ContentContainer>
    </CardFrame>
  );
};

export default GroupCard;
