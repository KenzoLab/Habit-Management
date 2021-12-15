import HamburguerMenu from "../../components/HamburguerMenu";
import { App, Container, Aside, Header, Cards } from "./styles";
import HabitCard from "../../components/HabitCard";
import { useHabit } from "../../providers/Habits";
import { useAuth } from "../../providers/AuthProvider";
import { useEffect } from "react";
import BasicSpeedDial from '../../components/SpeedDialHabits';
﻿import { useState } from "react";
import ModalHabits from "../../components/HabitModal";
import ModalGoals from "../../components/GoalsModal";
import ModalActivities from "../../components/ActivitiesModal";


function Dashboard() {
  const [openModalHabits, setOpenModalHabits] = useState(false);
  const { listHabitsFunction, listHabits } = useHabit();
  const { token } = useAuth();
  console.log(token)
  const habitModel = {
    title: "Title",
    category: "Category",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    difficult: "Hard",
    frequency: "Diary",
  };
  const cards = [
    habitModel,
    habitModel,
    habitModel,
    habitModel,
    habitModel,
    habitModel,
    habitModel,
    habitModel,
    habitModel,
    habitModel,
    habitModel,
    habitModel,
  ];
  
  useEffect(() => {
    listHabitsFunction(token);
  }, []);

  const handleModalHabits = () => {
    setOpenModalHabits(!openModalHabits);
  };

  return (
    <App>
      <HamburguerMenu />
      <Container>
        <Header>
          <section className="header-top">
            <h2>Dashboard</h2>
            <div className="header-search">
              <input
                placeholder="Search..."
                //onChange={(evt) setSearch(evt.target.value)}
              />
              <button
              //onClick={() => addGroup()}
              >
                + add grupo
              </button>
            </div>
          </section>

          <section className="header-bottom">
            <div id="blues">
              <button>Today</button>
              <button>Week</button>
              <button>Month</button>
            </div>
          </section>
        </Header>
        <Cards>
          {cards.map((habit) => (
            <HabitCard
              title={habit.title}
              description={habit.description}
              category={habit.category}
              difficult={habit.difficult}
            />
          ))}
        </Cards>
        <BasicSpeedDial handleModalHabits={handleModalHabits} />
        <ModalHabits open={openModalHabits} handle={handleModalHabits} />
      </Container>
    </App>
  );
}


// const Dashboard = () => {
//   //State Modal Window
//   
//   const [openModalGoals, setOpenModalGoals] = useState(false);
//   const [openModalActivities, setOpenModalActivities] = useState(false);

//   //Handle Modal Window

//   const handleModalGoals = () => {
//     setOpenModalGoals(!openModalGoals);
//   };
//   const handleModalActivities = () => {
//     setOpenModalActivities(!openModalActivities);
//   };

//   return (
//     <div>
//       <h1>Dashboard </h1>
//       <button onClick={handleModalHabits}>Modal Habits</button>
//       <button onClick={handleModalGoals}>Modal Goals</button>
//       <button onClick={handleModalActivities}>Modal Activities</button>
//       <ModalHabits open={openModalHabits} handle={handleModalHabits} />
//       <ModalGoals open={openModalGoals} handle={handleModalGoals} />
//       <ModalActivities
//         open={openModalActivities}
//         handle={handleModalActivities}
//       />
//     </div>
//   );
// };

export default Dashboard;
