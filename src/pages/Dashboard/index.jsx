import HamburguerMenu from "../../components/HamburguerMenu";
import { App, Container, Footer, Header, Cards } from "./styles";
import HabitCard from "../../components/HabitCard";
import { useHabit } from "../../providers/Habits";
import { useAuth } from "../../providers/AuthProvider";
import { useEffect } from "react";
import BasicSpeedDial from "../../components/SpeedDialHabits";
import { useState } from "react";
import ModalHabits from "../../components/HabitModal";
import ModalGoals from "../../components/GoalsModal";
import ModalActivities from "../../components/ActivitiesModal";

function Dashboard() {
  const [openModalHabits, setOpenModalHabits] = useState(false);
  const { listHabitsFunction, listHabits } = useHabit();
  const { token } = useAuth();
  // const habitModel = {
  //   title: "Title",
  //   category: "Category",
  //   description: "Lorem Ipsum",
  //   difficult: "Hard",
  //   frequency: "Diary",
  // };
  // const cards = [
  //   habitModel,
  //   habitModel,
  //   habitModel,
  //   habitModel,
  //   habitModel,
  //   habitModel,
  //   habitModel,
  //   habitModel,
  //   habitModel,
  //   habitModel,
  //   habitModel,
  //   habitModel,
  // ];

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
              {/*<button
              //onClick={() => addGroup()}
              >
                + add grupo
              </button>*/}
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
          {listHabits.map((habit, index) => (
            <HabitCard
              key={index}
              title={habit.title}
              frequency={habit.frequency}
              category={habit.category}
              difficulty={habit.difficulty}
            />
          ))}
        </Cards>
        <Footer>
          <BasicSpeedDial handleModalHabits={handleModalHabits} />
          <ModalHabits open={openModalHabits} handle={handleModalHabits} />
        </Footer>
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
