import HamburguerMenu from "../../components/HamburguerMenu";
import { FiSearch } from "react-icons/fi";
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
import { useHabit } from "../../providers/Habits";
import { useCurrentPage } from "../../providers/CurrentPage";
import { useEffect } from "react";
import BasicSpeedDial from "../../components/SpeedDialHabits";
import { useState } from "react";
import ModalHabits from "../../components/HabitModal";

function Dashboard() {
  const [openModalHabits, setOpenModalHabits] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filter, setFilter] = useState("");
  const [filteredList, setFilteredList] = useState([]);
  const { defineCurrentPageFunction } = useCurrentPage();
  const { listHabitsFunction, listHabits } = useHabit();
  const [search, setSearch] = useState("");

  const handleModalHabits = () => {
    setOpenModalHabits(!openModalHabits);
  };

  const filtering = (period) => {
    if (!isFiltered || filter !== period) {
      setIsFiltered(true);
      setFilter(period);
    } else if (filter === period) {
      setIsFiltered(false);
      setFilter("");
    }
  };

  function searchFunction() {
    setFilter("");
    if (search !== "") {
      const cardSearch = listHabits.filter((habit) => {
        const habitTitle = habit.title.toLowerCase();
        return habitTitle.includes(search.toLowerCase());
      });
      setFilter(search);
      setFilteredList(cardSearch);
      setIsFiltered(true);
    } else {
      setIsFiltered(false);
      setFilteredList([]);
    }
  }

  useEffect(() => {
    searchFunction();
  }, [search]);

  useEffect(() => {
    if (filter === "Weekly" || filter === "Daily" || filter === "Monthly") {
      const filteredHabits = listHabits.filter(
        (habit) => habit.frequency === filter,
      );
      setFilteredList([...filteredHabits]);
    }
  }, [isFiltered, filter]);

  useEffect(() => {
    listHabitsFunction();
    defineCurrentPageFunction("dashboard");
  }, []);

  return (
    <App>
      <Container>
        <div>
          <HamburguerMenu />
        </div>
        <Header>
          <section className="header-top">
            <h2>Dashboard</h2>
            <div className="header-search">
              <ContSearch>
                <div>
                  <BtnSearch
                    onClick={(e) =>
                      e.currentTarget.parentElement.lastChild.focus()
                    }>
                    <FiSearch />
                  </BtnSearch>
                  <InputSearch
                    type="text"
                    placeholder="Type to Search..."
                    onChange={(evt) => setSearch(evt.target.value.toString())}
                  />
                </div>
              </ContSearch>
            </div>
          </section>
          <section className="header-bottom">
            <div id="blues">
              <ButtonToday
                className="filter-buttons"
                onClick={() => filtering("Daily")}
                filter={filter}>
                Today
              </ButtonToday>
              <ButtonWeek
                className="filter-buttons"
                onClick={() => filtering("Weekly")}
                filter={filter}>
                Week
              </ButtonWeek>
              <ButtonMonth
                className="filter-buttons"
                onClick={() => filtering("Monthly")}
                filter={filter}>
                Month
              </ButtonMonth>
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
            <BasicSpeedDial handleModal={handleModalHabits} />
            <ModalHabits open={openModalHabits} handle={handleModalHabits} />
          </Footer>
        </MainContainer>
      </Container>
    </App>
  );
}

export default Dashboard;
