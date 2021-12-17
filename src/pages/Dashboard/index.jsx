import HamburguerMenu from "../../components/HamburguerMenu";
import {
  App,
  Container,
  Footer,
  Header,
  Cards,
  ButtonToday,
  ButtonWeek,
  ButtonMonth,
} from "./styles";
import HabitCard from "../../components/HabitCard";
import { useHabit } from "../../providers/Habits";
import { useCurrentPage } from "../../providers/CurrentPage";
import { useAuth } from "../../providers/AuthProvider";
import { useEffect } from "react";
import BasicSpeedDial from "../../components/SpeedDialHabits";
import { useState } from "react";
import ModalHabits from "../../components/HabitModal";
import ModalGoals from "../../components/GoalsModal";
import ModalActivities from "../../components/ActivitiesModal";

function Dashboard() {
  const [openModalHabits, setOpenModalHabits] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filter, setFilter] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const { defineCurrentPageFunction } = useCurrentPage();
  const { listHabitsFunction, listHabits } = useHabit();
  const { token } = useAuth();

  const filtering = (period) => {
    if (!isFiltered || filter !== period) {
      setIsFiltered(true);
      setFilter(period);
    } else if (filter === period) {
      setIsFiltered(false);
      setFilter("");
    }
  };

  const handleModalHabits = () => {
    setOpenModalHabits(!openModalHabits);
  };

  useEffect(() => {
    const filteredHabits = listHabits.filter(
      (habit) => habit.frequency === filter
    );
    setFilteredList([...filteredHabits]);
  }, [isFiltered, filter]);

  useEffect(() => {
    listHabitsFunction(token);
    defineCurrentPageFunction("dashboard");
  }, []);

  return (
    <App>
      <HamburguerMenu />
      <Container>
        <Header>
          <section className="header-top">
            <h2>Dashboard</h2>
            <div className="header-search">
              <input placeholder="Search..." />
            </div>
          </section>

          <section className="header-bottom">
            <div id="blues">
              <ButtonToday onClick={() => filtering("Daily")} filter={filter}>
                Today
              </ButtonToday>
              <ButtonWeek onClick={() => filtering("Weekly")} filter={filter}>
                Week
              </ButtonWeek>
              <ButtonMonth onClick={() => filtering("Monthly")} filter={filter}>
                Month
              </ButtonMonth>
            </div>
          </section>
        </Header>
        <Cards>
          {isFiltered
            ? filteredList.map((habit, index) => (
                <HabitCard
                  key={index}
                  title={habit.title}
                  frequency={habit.frequency}
                  category={habit.category}
                  difficulty={habit.difficulty}
                  habitId={habit.id}
                />
              ))
            : listHabits.map((habit, index) => (
                <HabitCard
                  key={index}
                  title={habit.title}
                  frequency={habit.frequency}
                  category={habit.category}
                  difficulty={habit.difficulty}
                  habitId={habit.id}
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

export default Dashboard;
