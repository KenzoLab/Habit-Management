import { useState } from "react";
import ModalHabits from "../../components/HabitModal";
import ModalGroups from "../../components/GroupModal";
import ModalGoals from "../../components/GoalsModal";
import ModalActivities from "../../components/ActivitiesModal";
import { FiSearch } from "react-icons/fi";

import { ContainerDash, ContSearch, InputSearch, BtnSearch } from "./styles";

const Dashboard = () => {
  //State Modal Window
  const [openModalHabits, setOpenModalHabits] = useState(false);
  const [openModalGroups, setOpenModalGroups] = useState(false);
  const [openModalGoals, setOpenModalGoals] = useState(false);
  const [openModalActivities, setOpenModalActivities] = useState(false);

  //Handle Modal Window
  const handleModalHabits = () => {
    setOpenModalHabits(!openModalHabits);
  };
  const handleModalGroups = () => {
    setOpenModalGroups(!openModalGroups);
  };
  const handleModalGoals = () => {
    setOpenModalGoals(!openModalGoals);
  };
  const handleModalActivities = () => {
    setOpenModalActivities(!openModalActivities);
  };

  return (
    <ContainerDash>
      <h1>Dashboard </h1>
      <button onClick={handleModalHabits}>Modal Habits</button>
      <button onClick={handleModalGroups}>Modal Groups</button>
      <button onClick={handleModalGoals}>Modal Goals</button>
      <button onClick={handleModalActivities}>Modal Activities</button>

      <ContSearch>
        <div>
          <BtnSearch>
            <FiSearch />
          </BtnSearch>
          <InputSearch type="text" placeholder="Type to Search..." />
        </div>
      </ContSearch>
      <ModalHabits open={openModalHabits} handle={handleModalHabits} />
      <ModalGroups open={openModalGroups} handle={handleModalGroups} />
      <ModalGoals
        open={openModalGoals}
        handle={handleModalGoals}
        idGroup={1267}
      />
      <ModalActivities
        open={openModalActivities}
        handle={handleModalActivities}
        idGroup={1267}
      />
    </ContainerDash>
  );
};

export default Dashboard;
