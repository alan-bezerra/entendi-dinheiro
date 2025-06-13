function DashboardPage() {
  return (
    <div className="app-container">
      <HeaderPrincipal />

      <main className="main-app-content">
        <div className="container">
          <header class="profile">
            <div class="profile-header">
              <h1 className="title">Olá, Ana!</h1>
              <p className="description">Pronto para continuar seus estudos de educação financeira?</p>
            </div>

            <div class="stats">
              <div class="stat"><strong>10</strong><span>Cursos Finalizados</span></div>
              <div class="stat"><strong>1.060</strong><span>Pontos</span></div>
              <div class="stat"><strong>54h</strong><span>Horas Estudadas</span></div>
              <div class="stat"><strong>04</strong><span>Medalhas e Conquistas</span></div>
            </div>
          </header>

          <section class="continue">
            <h2 className='subtitle'>Continue de onde parou</h2>

            <div class="courses-list">
              <button type="button" class="course formation">
                <img src="../assets/cursos/primeiros-passos-logo.svg" alt="Carteira" />

                <div class="content">
                  <span class="label">FORMAÇÃO - 30%</span>
                  <h3>Primeiros Passos com o Dinheiro</h3>
                </div>

                <div class="progress">
                  <div style={{ "--bar-dash-color": "#B97C1F" }} class="bar-dash progress-30"></div>
                </div>

                <button class="play-button">
                  <i className="ph ph-play"></i>
                </button>
              </button>

              <button type="button" class="course curso">
                <img src="../assets/cursos/como-controlar-gastos-logo.svg" alt="value" />

                <div class="content">
                  <span class="label">CURSO - 15%</span>
                  <h3>Como Controlar Gastos sem Sofrimento</h3>
                </div>

                <div class="progress">
                  <div style={{ "--bar-dash-color": "#43A047" }} class="bar-dash progress-15"></div>
                </div>

                <button class="play-button">
                  <i className="ph ph-play"></i>
                 </button>
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}

window.DashboardPage = DashboardPage;
