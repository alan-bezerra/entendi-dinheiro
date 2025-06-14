import { Link, NavLink } from "react-router";
import { Box } from "../Box";
import './styles.css';

export function MobileSidebar({ open, setOpen }) {
  function handleSidebarToggle() {
    setOpen((prev) => !prev)
  }

  if (!open) {
    return null
  }

  return (
    <aside className="sidebar-mobile__content">
      <header className="sidebar__header">
        <button aria-label="Fechar Menu" onClick={handleSidebarToggle}>
          <Box variant="fill" size="icon">
            <i className="ph ph-x"></i>
          </Box>
        </button>

        <img src="/logo.svg" alt="Entendi Dinheiro Logo" />
      </header>

      <nav className="sidebar__nav">
        <NavLink 
          className="sidebar__nav__link"
          to="/" 
          onClick={handleSidebarToggle}
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
          onClick={handleSidebarToggle}
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

