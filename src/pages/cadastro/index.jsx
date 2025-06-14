import { Link } from "react-router";
import '../../styles/auth.css';

export function CadastroPage() {
  return (
    <div className="auth-container">
      <div className="container">
        <Link to="/" className="auth-logo">
          <img src="/logo.svg" alt="Entendi Dinheiro Logo" />
        </Link>

        <h2 className="auth-title">Cadastre-se gratuitamente</h2>

        <div className="social-login">
          <button className="social-btn google">
            <i className="ph ph-google-logo"></i>
            Google
          </button>
          <button className="social-btn facebook">
            <i className="ph ph-facebook-logo"></i>
            Facebook
          </button>
        </div>

        <form id="cadastro-form">
          <div className="form-group">
            <label className="form-label" htmlFor="nome">Nome completo</label>
            <input className="form-input" type="text" id="nome" name="nome" placeholder="Seu nome completo" />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">E-mail</label>
            <input className="form-input" type="email" id="email" name="email" placeholder="Seu e-mail" />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="senha">Senha</label>
            <input className="form-input" type="password" id="senha" name="senha" placeholder="Deve ter no mínimo 7 caracteres" />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="confirmar-senha">Confirme sua senha</label>
            <input className="form-input" type="password" id="confirmar-senha" name="confirmar-senha" placeholder="Deve ter no mínimo 7 caracteres" />
          </div>

          <p className="termos">
            Ao se cadastrar, você aceita nossos <a href="#">termos de uso</a> e a nossa <a href="#">política de privacidade</a>.
          </p>

          <button type="submit" className="submit-btn">Cadastrar</button>
        </form>

        <div className="divider"></div>

        <div className="signup">
          <div className="signup-text">
            <i className="ph ph-user-circle"></i>
            <p>
              <span>Já possui uma conta?</span>
              <Link to="/login">Entre na plataforma</Link>
            </p>
          </div>

          <i className="ph ph-caret-right signup-arrow-icon"></i>
        </div>
      </div>
    </div>
  )
}

