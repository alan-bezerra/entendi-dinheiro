import { Link } from "react-router";
import './styles.css';

export function DesktopSidebar({ minimized = false }) {
  const currentPath = window.location.pathname;

  return (
    <aside className={`sidebar-desktop__content ${minimized ? "sidebar-desktop__content--minimized" : ""}`}>
      <nav className="sidebar__nav">
        <Link 
          className={`sidebar__nav__link ${currentPath === "/" ? "sidebar__nav__link--active" : ""}`}
          to="/" 
        >
          {currentPath === "/" ? (
            <i className="ph-fill nav__link__icon ph-house"></i> 
          ) : (
            <i className="ph nav__link__icon ph-house"></i> 
          )}

          <span>Início</span>
        </Link>

        <div className="separator__item">
          <span>Progresso</span>

          <div className="separator__line"></div>
        </div>

        <Link 
          className={`sidebar__nav__link`}
          to="#" 
        >
          <i className="ph nav__link__icon ph-book-bookmark"></i> 

          <span>Meus Cursos e Certificados</span>
        </Link>

        <Link 
          className={`sidebar__nav__link`}
          to="#" 
        >
          <i className="ph nav__link__icon ph-path"></i> 

          <span>Minhas Conquistas</span>
        </Link>

        <div className="separator__item">
          <span>Aprendizado</span>

          <div className="separator__line"></div>
        </div>

        <Link 
          className={`sidebar__nav__link ${currentPath === "/catalogo" ? "sidebar__nav__link--active" : ""}`}
          to="/catalogo" 
        >
          {currentPath === "/catalogo" ? (
            <i className="ph-fill nav__link__icon ph-book-open"></i> 
          ) : (
            <i className="ph nav__link__icon ph-book-open"></i> 
          )}

          <span>Catálogo</span>
        </Link>
      </nav>

      <footer className="sidebar__footer">
        <Link 
          className={`sidebar__nav__link`}
          to="#" 
        >
          <i className="ph nav__link__icon ph-question"></i> 

          <span>Ajuda</span>
        </Link>

        <div>
          <div className="separator__line"></div>
        </div>

        <Link 
          className={`sidebar__nav__link sidebar__nav__link--danger`}
          to="/login" 
        >
          <i className="ph nav__link__icon ph-sign-out"></i> 

          <span>Sair da conta</span>
        </Link>
      </footer>
    </aside>
  )
}