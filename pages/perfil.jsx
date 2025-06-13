function PerfilPage() {
  return (
    <div>
      <header className="header">
        <div className="menu-logo">
          <img className="menu-icone" src="/assets/icones/menu-icone.png" alt="Menu" />
          <img src="/assets/logo.svg" alt="Logo Entendi Dinheiro" />
        </div>
        <div className="actions">
          <img className="pesquisa-icone" src="/assets/icones/pesquisa-icone.png" alt="Buscar" />
          <img src="/assets/avatar.png" alt="Usuário" className="avatar-icone" />
        </div>
      </header>

      <main className="perfil-container">
        <section className="perfil">
          <div className="capa-do-perfil">
            <img src="/assets/capa-perfil.png" alt="Capa de Perfil" />
          </div>
          <img src="/assets/foto-perfil.png" alt="Foto de Perfil" className="foto-do-perfil" />
          <h2>Ana Souza</h2>
          <p className="objetivo">Quero entender como sair das dívidas</p>
          <p className="localizacao">
            <img className="localizacao-icone" src="/assets/icones/localizacao-icone.png" alt="Localização" /> Recife - PE
          </p>
          <p className="data-de-inicio">Entrou na Entendi Dinheiro em 21/11/2022</p>
        </section>

        <section className="competencias">
          <h3>Competências estudadas</h3>

          <div className="competencia-item">
            <img src="/assets/icones/carteira-icone.png" className="competencia-icone" alt="" />
            <div className="competencia-conteudo">
              <div className="competencia-texto">
                <strong>Organização Financeira</strong>
                <p>00h de estudo</p>
              </div>
              <div className="barra">
                <progress value="0" max="100"></progress>
                <span>0%</span>
              </div>
            </div>
          </div>

          <div className="competencia-item">
            <img src="/assets/icones/carteira-icone.png" className="competencia-icone" alt="" />
            <div className="competencia-conteudo">
              <div className="competencia-texto">
                <strong>Crédito e Dívidas</strong>
                <p>00h de estudo</p>
              </div>
              <div className="barra">
                <progress value="0" max="100"></progress>
                <span>0%</span>
              </div>
            </div>
          </div>

          <div className="competencia-item">
            <img src="/assets/icones/carteira-icone.png" className="competencia-icone" alt="" />
            <div className="competencia-conteudo">
              <div className="competencia-texto">
                <strong>Educação Bancária</strong>
                <p>00h de estudo</p>
              </div>
              <div className="barra">
                <progress value="0" max="100"></progress>
                <span>0%</span>
              </div>
            </div>
          </div>

          <div className="competencia-item">
            <img src="/assets/icones/carteira-icone.png" className="competencia-icone" alt="" />
            <div className="competencia-conteudo">
              <div className="competencia-texto">
                <strong>Investimentos</strong>
                <p>00h de estudo</p>
              </div>
              <div className="barra">
                <progress value="0" max="100"></progress>
                <span>0%</span>
              </div>
            </div>
          </div>
        </section>

        <section className="links">
          <h3>Links</h3>
          <div className="redes-sociais-icones">
            <div className="icone-rede-social">
              <img src="/assets/icones/linkedin-icone.png" alt="LinkedIn" />
            </div>
            <div className="icone-rede-social">
              <img src="/assets/icones/facebook-icone.png" alt="Facebook" />
            </div>
            <div className="icone-rede-social">
              <img src="/assets/icones/instagram-icone.png" alt="Instagram" />
            </div>
          </div>
        </section>

        <section className="medalhas">
          <h3>Medalhas</h3>
          <div className="medalhas-itens">
            <div>
              <img src="/assets/icones/medalha-icone.png" alt="Medalha" />
              <p>Saí do Aperto!</p>
            </div>
            <div>
              <img src="/assets/icones/medalha-icone.png" alt="Medalha" />
              <p>Sem Medo do Cartão</p>
            </div>
            <div>
              <img src="/assets/icones/medalha-icone.png" alt="Medalha" />
              <p>Primeiro Investimento</p>
            </div>
            <div>
              <img src="/assets/icones/medalha-icone.png" alt="Medalha" />
              <p>Maratonista Financeiro</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

window.PerfilPage = PerfilPage;
