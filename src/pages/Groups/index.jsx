import HamburguerMenu from "../../components/HamburguerMenu";
import { FiSearch } from "react-icons/fi";
import {
  App,
  Container,
  Footer,
  Header,
  Cards,
  InputSearch,
  BtnSearch,
  ContSearch,
  MainContainer
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

  return (
    <App>
      <HamburguerMenu />
      <Container>
        <Header>
          <section className="header-top">
            <h2>Groups</h2>
            <div className="header-search">
              <ContSearch>
                <div>
                  <BtnSearch>
                    <FiSearch />
                  </BtnSearch>
                  <InputSearch type="text" placeholder="Type to Search..." />
                </div>
              </ContSearch>
            </div>
          </section>

          <section className="header-bottom">
            <div id="blues">
              <button
                className="filter-buttons"
                onClick={() => filtering("Daily")}
                filter={filter}
              >
                Discovery
              </button>
              <button
                className="filter-buttons"
                onClick={() => filtering("Weekly")}
                filter={filter}
              >
                Registered
              </button>
            </div>
          </section>
        </Header>
        <MainContainer>
          <Cards>
            {allGroupsList.map((group, index) => (
              <GroupCard
                cardType="group"
                group={group}
                key={index}
              />
            ))}
          </Cards>
        <Footer>
          <BasicSpeedDial handleModal={handleModalGroups} />
          <ModalGroups open={openModalGroups} handle={handleModalGroups} />
        </Footer>
        </MainContainer>
      </Container>
    </App>
  );
}

export default Groups;
