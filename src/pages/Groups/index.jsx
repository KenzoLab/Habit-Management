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
import GroupCard from "../../components/GroupCard";
import { useHabit } from "../../providers/Habits";
import { useAuth } from "../../providers/AuthProvider";
import { useEffect } from "react";
import BasicSpeedDial from "../../components/SpeedDialHabits";
import { useState } from "react";
import ModalGroups from "../../components/GroupModal";
import { useGroups } from "../../providers/Groups";

function Groups() {
  const { listGroupsFunction, allGroupsList } = useGroups();
  const [openModalGroups, setOpenModalGroups] = useState(false);
  const [isFiltered, setIsFiltered] = useState(false);
  const [filter, setFilter] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  const { listHabitsFunction, listHabits } = useHabit();
  const { token } = useAuth();

  const filtering = period => {
    if (!isFiltered || filter !== period) {
      setIsFiltered(true);
      setFilter(period);
    } else if (filter === period) {
      setIsFiltered(false);
      setFilter("");
    }
  };

  const handleModalGroups = () => {
    setOpenModalGroups(!openModalGroups);
  };

  useEffect(() => {
    const filteredHabits = listHabits.filter(
      habit => habit.frequency === filter
    );
    setFilteredList([...filteredHabits]);
  }, [isFiltered, filter]);

  useEffect(() => {
    listGroupsFunction(token);
  }, []);

  console.log(allGroupsList);

  return (
    <App>
      <HamburguerMenu />
      <Container>
        <Header>
          <section className="header-top">
            <h2>Groups</h2>
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
              <ButtonToday onClick={() => filtering("Daily")} filter={filter}>
                Discovery
              </ButtonToday>
              <ButtonWeek onClick={() => filtering("Weekly")} filter={filter}>
                Registered
              </ButtonWeek>
              <ButtonMonth onClick={() => filtering("Monthly")} filter={filter}>
                All
              </ButtonMonth>
            </div>
          </section>
        </Header>
        <section>
          <Cards>
            {allGroupsList.map((group, index) => (
              <GroupCard cardType="group" group={group} key={index} />
            ))}
          </Cards>
        </section>
        <Footer>
          <BasicSpeedDial handleModal={handleModalGroups} />
          <ModalGroups open={openModalGroups} handle={handleModalGroups} />
        </Footer>
      </Container>
    </App>
  );
}

export default Groups;
