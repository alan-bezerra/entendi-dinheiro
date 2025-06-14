import { Link, NavLink } from "react-router";
import './styles.css';

export function DesktopSidebar({ minimized = false }) {
  return (
    <aside className={`sidebar-desktop__content ${minimized ? "sidebar-desktop__content--minimized" : ""}`}>
      <nav className="sidebar__nav">
        <NavLink 
          className="sidebar__nav__link"
          to="/" 
        >
          {({ isActive }) => (
            <>
              <i className={`nav__link__icon ${isActive ? 'ph-fill ph-house' : 'ph ph-house'}`}></i>
              <span>Início</span>
            </>
          )}
        </NavLink>

        <div className="separator__item">
          <span>Progresso</span>

          <div className="separator__line"></div>
        </div>

        <Link 
          className="sidebar__nav__link"
          to="#" 
        >
          <i className="ph nav__link__icon ph-book-bookmark"></i> 

          <span>Meus Cursos e Certificados</span>
        </Link>

        <Link 
          className="sidebar__nav__link"
          to="#" 
        >
          <i className="ph nav__link__icon ph-path"></i> 

          <span>Minhas Conquistas</span>
        </Link>

        <div className="separator__item">
          <span>Aprendizado</span>

          <div className="separator__line"></div>
        </div>

        <NavLink 
          className="sidebar__nav__link"
          to="/catalogo" 
        >
          {({ isActive }) => (
            <>
              <i className={`nav__link__icon ${isActive ? 'ph-fill ph-book-open' : 'ph ph-book-open'}`}></i>
              <span>Catálogo</span>
            </>
          )}
        </NavLink>
      </nav>

      <footer className="sidebar__footer">
        <Link 
          className="sidebar__nav__link"
          to="#" 
        >
          <i className="ph nav__link__icon ph-question"></i> 

          <span>Ajuda</span>
        </Link>

        <div>
          <div className="separator__line"></div>
        </div>

        <Link 
          className="sidebar__nav__link sidebar__nav__link--danger"
          to="/login" 
        >
          <i className="ph nav__link__icon ph-sign-out"></i> 

          <span>Sair da conta</span>
        </Link>
      </footer>
    </aside>
  )
}