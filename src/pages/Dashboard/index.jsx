import { App, Countainer, Aside, Header, Cards } from "./styles";

function Dashboard() {
  const cards = ["zeze", "gugu", "dada", "ZEUS!"];

  return (
    <App>
      <Aside>
        <header>
          <img alt="Logo" />
        </header>
        <section>
          <div className="pages">Dashboard</div>
          <div className="pages">Groupes</div>
          <div className="pages">activities</div>
          <div className="pages">goals</div>
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
      </Aside>
      <Countainer>
        <Header>
          <section className="header-top">
            <h2>Groups</h2>
            <div className="header-search">
              <input
                placeholder="search..."
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
              <button>week</button>
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

                  <div className="card-descrption">
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
                        <li>Brebo</li>
                        <li>Evandro</li>
                        <li>Loro</li>
                        <li>José</li>
                        <li>Faustão</li>
                      </ul>
                    </details>
                  </div>
                </div>

                <hr className="card-descrption-border" />

                <div className="card-butons">
                  <button
                  //onClick={() => entratNoGrupo()}
                  >
                    subcribe
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
      </Countainer>
    </App>
  );
}

export default Dashboard;
