import HamburguerMenu from "../../components/HamburguerMenu";
import { App, Container, Aside, Header, Cards } from "./styles";

function Dashboard() {
  const cards = ["zeze", "gugu", "dada", "ZEUS!"];

  return (
    <App>
      <HamburguerMenu />
      {/* <Aside>
        <header>
          <img alt="Logo" />
        </header>
        <section>
          <div className="pages">Dashboard</div>
          <div className="pages">Groups</div>
          <div className="pages">Activities</div>
          <div className="pages">Goals</div>
          <div className="pages">Logout</div>
        </section>
        <footer>
          <div id="usuario-card">
            <img alt="usuario" />
            <div>
              <h3>Nome</h3>
              <p>Email</p>
            </div>
          </div>
        </footer>
      </Aside> */}
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
          {cards.map((nome) => (
            <div className="card-border" key={nome}>
              <div className="card">
                <div className="card-conteudo">
                  <div className="card-header">
                    <h2>{nome}</h2>
                    <p>metas: 10</p>
                  </div>

                  <div className="card-description">
                    <p>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Quidem, ea obcaecati. Vitae nostrum omnis, explicabo
                      temporibus eaque officia repudiandae tempora. Vel
                      molestiae harum reiciendis illo enim pariatur dolorum
                      dolorem nemo!
                    </p>
                    <details>
                      <summary>Participantes</summary>
                      <ul>
                        <li>Breno</li>
                        <li>Bruno</li>
                        <li>Breno</li>
                        <li>Evandro</li>
                        <li>Loro</li>
                        <li>José</li>
                        <li>Faustão</li>
                      </ul>
                    </details>
                  </div>
                </div>

                <hr className="card-description-border" />

                <div className="card-buttons">
                  <button
                  //onClick={() => entratNoGrupo()}
                  >
                    subscribe
                  </button>
                  <button
                  //onClick={() => ModalAtividader()}
                  >
                    atividades
                  </button>
                  <button
                  //onClick={() => ModalMetas()}
                  >
                    goals
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Cards>
      </Container>
    </App>
  );
}

export default Dashboard;
