import { useEffect, useState } from "react";
import BookmarkAddIcon from "@mui/icons-material/BookmarkAdd";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import RadarIcon from "@mui/icons-material/Radar";
import { useGroups } from "../../providers/Groups";

import CardFrame from "../CardFrame";
import { ContentContainer } from "./styles";
import ModalGoals from "../GoalsModal";
import ModalActivities from "../ActivitiesModal";

const GroupCard = ({ group, cardType }) => {
  const { subscribeFunction, unsubscribeFunction } = useGroups();
  const [openModalGoals, setOpenModalGoals] = useState(false);
  const [openModalActivities, setOpenModalActivities] = useState(false);

  const [isSubscribed, setSubscribed] = useState(false);
  const [finishedGoals, setFinishedGols] = useState(0);
  const { name, description, goals, category, id, users_on_group } = group;

  const countFinishedGoals = () =>
    goals.reduce((acc, goal) => (goal.achieved ? acc + 1 : acc), 0);

  const subscribe = () => {
    subscribeFunction(id);
    setSubscribed(!isSubscribed);
  };

  const unSubscribe = () => {
    unsubscribeFunction(id);
    setSubscribed(!isSubscribed);
  };

  const handleModalGoals = () => {
    setOpenModalGoals(!openModalGoals);
  };

  const handleModalActivities = () => {
    setOpenModalActivities(!openModalActivities);
  };

  useEffect(() => {
    const userId = localStorage.getItem("@Habit:userId");
    const check = users_on_group.some((user) => user.id === parseInt(userId));
    setSubscribed(check);
  }, [group]);

  useEffect(() => {
    setFinishedGols(countFinishedGoals());
  }, [goals]);

  return (
    <CardFrame cardType={cardType}>
      <ContentContainer cardType={cardType}>
        <div className="content__text">
          <h4 className="content__name">{name}</h4>
          <p className="content__description">{description}</p>
          <span className="content__category">{category}</span>
          <span className="content__goals">Goals: {finishedGoals}</span>
        </div>
        <div className="mobile__buttons">
          <button
            type="button"
            onClick={isSubscribed ? unSubscribe : subscribe}>
            {isSubscribed ? (
              <BookmarkRemoveIcon className="unsubscribe__icon" />
            ) : (
              <BookmarkAddIcon className="subscribe__icon" />
            )}
          </button>
          <button type="button" onClick={handleModalActivities}>
            <BorderColorIcon />
          </button>
          <button type="button" onClick={handleModalGoals}>
            <RadarIcon />
          </button>
        </div>
        <div className="desktop__buttons">
          <button
            type="button"
            onClick={isSubscribed ? unSubscribe : subscribe}>
            {isSubscribed ? (
              <>
                <BookmarkRemoveIcon className="unsubscribe__icon" />
                <span className="unsubscribe__text">Unsubscribe</span>
              </>
            ) : (
              <>
                <BookmarkAddIcon className="subscribe__icon" />
                <span className="subscribe__text">Subscribe</span>
              </>
            )}
          </button>
          <button type="button" onClick={handleModalActivities}>
            <BorderColorIcon />
            <span>Activities</span>
          </button>
          <button onClick={handleModalGoals} type="button">
            <RadarIcon />
            <span>Goals</span>
          </button>
        </div>
        <ModalGoals
          open={openModalGoals}
          handle={handleModalGoals}
          idGroup={parseInt(id)}
        />
        <ModalActivities
          open={openModalActivities}
          handle={handleModalActivities}
          idGroup={parseInt(id)}
        />
      </ContentContainer>
    </CardFrame>
  );
};

export default GroupCard;
