import walletIcon from '../assets/wallet.png';
import valueIcon from '../assets/value.png';

function DashboardPage() {
  return (
    <div className="app-container">
      <HeaderPrincipal />

      <main className="container-dashboard container">
        <header class="profile">
          <h1>Olá, Ana!</h1>
          <p>Pronto para continuar seus estudos de educação financeira?</p>

          <div class="stats">
            <div class="stat"><strong>10</strong><span>Cursos Finalizados</span></div>
            <div class="stat"><strong>1.060</strong><span>Pontos</span></div>
            <div class="stat"><strong>54h</strong><span>Horas Estudadas</span></div>
            <div class="stat"><strong>04</strong><span>Medalhas e Conquistas</span></div>
          </div>
        </header>

        <section class="continue">
          <h2>Continue de onde parou</h2>

          <div class="course formation">
            <div class="icon-wrapper">
              <img src="../assets/wallet.png" alt="Carteira" class="icon"/>
              
            </div>

            <div class="content">
              <span class="label">FORMAÇÃO - 30%</span>
              <h3>Primeiros Passos com o Dinheiro</h3>
            </div>

            <div class="progress">
              <div class="bar-dash progress-30"></div>
            </div>
          </div>

          <div class="course curso border-orange">
            <div class="icon-wrapper">
              <img src="../assets/value.png" alt="value" class="icon" />
            </div>

            <div class="content">
              <span class="label">CURSO - 15%</span>
              <h3>Como Controlar Gastos sem Sofrimento</h3>
            </div>

            <div class="progress">
              <div class="bar-dash progress-15"></div>
            </div>

            <button class="play-button">▶</button>
          </div>
        </section>
      </main>
    </div>
  )
}

window.DashboardPage = DashboardPage;
