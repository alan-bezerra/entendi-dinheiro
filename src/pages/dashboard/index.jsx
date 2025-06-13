import './styles.css';

export function DashboardPage() {
  return (
    <div className="container">
      <header className="profile">
        <div className="profile-header">
          <h1 className="title">Olá, Ana!</h1>
          <p className="description">Pronto para continuar seus estudos de educação financeira?</p>
        </div>

        <div className="stats">
          <div className="stat"><strong>10</strong><span>Cursos Finalizados</span></div>
          <div className="stat"><strong>1.060</strong><span>Pontos</span></div>
          <div className="stat"><strong>54h</strong><span>Horas Estudadas</span></div>
          <div className="stat"><strong>04</strong><span>Medalhas e Conquistas</span></div>
        </div>
      </header>

      <section className="continue">
        <h2 className='subtitle'>Continue de onde parou</h2>

        <div className="courses-list">
          <button type="button" className="course formation">
            <img src="/cursos/primeiros-passos-logo.svg" alt="Carteira" />

            <div className="content">
              <span className="label">FORMAÇÃO - 30%</span>
              <h3>Primeiros Passos com o Dinheiro</h3>
            </div>

            <div className="progress">
              <div style={{ "--bar-dash-color": "#B97C1F" }} className="bar-dash progress-30"></div>
            </div>

            <button className="play-button">
              <i className="ph ph-play"></i>
            </button>
          </button>

          <button type="button" className="course curso">
            <img src="/cursos/como-controlar-gastos-logo.svg" alt="value" />

            <div className="content">
              <span className="label">CURSO - 15%</span>
              <h3>Como Controlar Gastos sem Sofrimento</h3>
            </div>

            <div className="progress">
              <div style={{ "--bar-dash-color": "#43A047" }} className="bar-dash progress-15"></div>
            </div>

            <button className="play-button">
              <i className="ph ph-play"></i>
            </button>
          </button>
        </div>
      </section>
    </div>
  )
}
