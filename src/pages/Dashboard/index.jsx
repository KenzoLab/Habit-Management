import HamburguerMenu from "../../components/HamburguerMenu";
import { App, Container, Aside, Header, Cards } from "./styles";
import HabitCard from "../../components/HabitCard";
import { useHabit } from "../../providers/Habits";
import { useAuth } from "../../providers/AuthProvider";
import { useEffect } from "react";

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
            //   <div className="card-border" key={nome}>
            //     <div className="card">
            //       <div className="card-conteudo">
            //         <div className="card-header">
            //           <h2>{nome}</h2>
            //           <p>metas: 10</p>
            //         </div>

            //         <div className="card-description">
            //           <p>
            //             Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            //             Quidem, ea obcaecati. Vitae nostrum omnis, explicabo
            //             temporibus eaque officia repudiandae tempora. Vel
            //             molestiae harum reiciendis illo enim pariatur dolorum
            //             dolorem nemo!
            //           </p>
            //           <details>
            //             <summary>Participantes</summary>
            //             <ul>
            //               <li>Breno</li>
            //               <li>Bruno</li>
            //               <li>Breno</li>
            //               <li>Evandro</li>
            //               <li>Loro</li>
            //               <li>José</li>
            //               <li>Faustão</li>
            //             </ul>
            //           </details>
            //         </div>
            //       </div>

            //       <hr className="card-description-border" />

            //       <div className="card-buttons">
            //         <button
            //         //onClick={() => entratNoGrupo()}
            //         >
            //           subscribe
            //         </button>
            //         <button
            //         //onClick={() => ModalAtividader()}
            //         >
            //           atividades
            //         </button>
            //         <button
            //         //onClick={() => ModalMetas()}
            //         >
            //           goals
            //         </button>
            //       </div>
            //     </div>
            //   </div>
            //
          ))}
        </Cards>
      </Container>
    </App>
  );
}

export default Dashboard;
