import React from "react";
function CadastroPage() {
  return (
     <div className="cadastro-box">
      <img src="/logo.svg" className="logo" alt="Entendi Dinheiro" />
      <h2>Cadastre-se gratuitamente</h2>

      <button className="social-btn">Google</button>
      <button className="social-btn">Facebook</button>

      <form>
        <label>Nome completo</label>
        <input type="text" placeholder="Seu nome completo" />

        <label>E-mail</label>
        <input type="email" placeholder="Seu e-mail" />

        <label>Senha</label>
        <input type="password" placeholder="Deve ter no mínimo 7 caracteres" />

        <label>Confirme sua senha</label>
        <input type="password" placeholder="Deve ter no mínimo 7 caracteres" />

        <p className="termos">
          Ao se cadastrar, você aceita nossos <a href="#">termos de uso</a> e a nossa <a href="#">política de privacidade</a>.
        </p>

        <button className="submit-btn" type="submit">Cadastrar</button>
      </form>

      <div className="login-link">
        <span>Já possui uma conta?</span>
        <a href="#">Entre na plataforma</a>
      </div>
    </div>
  )
}

window.CadastroPage = CadastroPage;

