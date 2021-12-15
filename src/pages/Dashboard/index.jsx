import HamburguerMenu from "../../components/HamburguerMenu";
import { App, Container, Aside, Header, Cards } from "./styles";
import HabitCard from "../../components/HabitCard";
import { useHabit } from "../../providers/Habits";
import { useAuth } from "../../providers/AuthProvider";
import { useEffect } from "react";
import BasicSpeedDial from '../../components/SpeedDialHabits';

function Dashboard() {
  const { listHabitsFunction, listHabits } = useHabit();
  const { token } = useAuth();
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

  // console.log(listHabits);

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
        <BasicSpeedDial />
      </Container>
    </App>
  );
}

export default Dashboard;
