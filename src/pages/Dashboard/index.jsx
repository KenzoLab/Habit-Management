import { useState } from "react";
import ModalHabits from "../../components/HabitModal";
import ModalGoals from "../../components/GoalsModal";
import ModalActivities from "../../components/ActivitiesModal";

const Dashboard = () => {
  //State Modal Window
  const [openModalHabits, setOpenModalHabits] = useState(false);
  const [openModalGoals, setOpenModalGoals] = useState(false);
  const [openModalActivities, setOpenModalActivities] = useState(false);

  //Handle Modal Window
  const handleModalHabits = () => {
    setOpenModalHabits(!openModalHabits);
  };
  const handleModalGoals = () => {
    setOpenModalGoals(!openModalGoals);
  };
  const handleModalActivities = () => {
    setOpenModalActivities(!openModalActivities);
  };

  return (
    <div>
      <h1>Dashboard </h1>
      <button onClick={handleModalHabits}>Modal Habits</button>
      <button onClick={handleModalGoals}>Modal Goals</button>
      <button onClick={handleModalActivities}>Modal Activities</button>
      <ModalHabits open={openModalHabits} handle={handleModalHabits} />
      <ModalGoals open={openModalGoals} handle={handleModalGoals} />
      <ModalActivities
        open={openModalActivities}
        handle={handleModalActivities}
      />
    </div>
  );
};

export default Dashboard;
