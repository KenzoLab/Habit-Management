import HamburguerMenu from "../../components/HamburguerMenu";
//import { FiSearch } from "react-icons/fi";
import {
  App,
  Container,
  MainContainer,
  Footer,
  Header,
  Cards,
  ButtonToday,
  ButtonWeek,
  InputSearch,
  BtnSearch,
  ContSearch,
  ButtonMonth,
} from "./styles";
import HabitCard from "../../components/HabitCard";
import { useActivities } from "../../providers/Activities";
import { useAuth } from "../../providers/AuthProvider";
//import { useEffect } from "react";
//import BasicSpeedDial from "../../components/SpeedDialHabits";
import { useState } from "react";
//import ModalHabits from "../../components/HabitModal";
//import ModalGoals from "../../components/GoalsModal";
//import ModalActivities from "../../components/ActivitiesModal";

function Dashboard() {
  const [openModalHabits, setOpenModalHabits] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filter, setFilter] = useState("");

  const [filteredList, setFilteredList] = useState([]);

  const { activities } = useActivities();
  console.log(activities, "atividades");
  const { token } = useAuth();

  /*
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
  const [search, setSearch] = useState("");

  function procurar() {
    if (search !== "") {
      const cardSearch = listHabits.filter((elm) => elm.title.includes(search));
      setFilter(search);
      setFilteredList(cardSearch);
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
      setFilteredList([]);
    }
  }
  console.log(filteredList, "filtrados");

 useEffect(() => {
   console.log();
   if (filter === "Weekly" || filter === "Daily" || filter === "Monthly") {
     const filteredHabits = listHabits.filter(
       (habit) => habit.frequency === filter
     );
     setFilteredList([...filteredHabits]);
   }
 }, [isFiltered, filter]);
 useEffect(() => {
   listHabitsFunction(token);
 }, []);
  */

  return (
    <App>
      <Container>
        <div>
          <HamburguerMenu />
        </div>
        <Header>
          <section className="header-top">
            <h2>Activites</h2>
            <div className="header-search">
              {/*<ContSearch>
                <div>
                  <BtnSearch onClick={() => procurar()}>
                    <FiSearch />
                  </BtnSearch>
                  <InputSearch
                    type="text"
                    placeholder="Search..."
                    onChange={(evt) => setSearch(evt.target.value.toString())}
                  />
                </div>
              </ContSearch>*/}
            </div>
          </section>

          <section className="header-bottom">
            <div id="blues">
              {/*<ButtonToday
                className="filter-buttons"
                onClick={() => filtering("Daily")}
                filter={filter}
              >
                Today
              </ButtonToday>
              <ButtonWeek
                className="filter-buttons"
                onClick={() => filtering("Weekly")}
                filter={filter}
              >
                Week
              </ButtonWeek>
              <ButtonMonth
                className="filter-buttons"
                onClick={() => filtering("Monthly")}
                filter={filter}
              >
                Month
              </ButtonMonth>*/}
            </div>
          </section>
        </Header>
        <MainContainer>
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
              : activities.map((habit, index) => (
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
            {/*<BasicSpeedDial handleModalHabits={handleModalHabits} />*/}
            {/*<ModalHabits open={openModalHabits} handle={handleModalHabits} />*/}
          </Footer>
        </MainContainer>
      </Container>
    </App>
  );
}

export default Dashboard;
