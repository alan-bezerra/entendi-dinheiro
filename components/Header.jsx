function Header() {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__left-logo">
          <Sidebar />

          <img src="../assets/logo.svg" alt="Entendi Dinheiro Logo" />
        </div>

        <div className="header__right">
          <button>
            <Box variant="outline" size="icon" className="header__search">
              <i className="ph ph-magnifying-glass"></i>
            </Box>
          </button>

          <Link href="/perfil" title="Ir para o perfil" aria-label="Ir para o perfil">
            <div className="avatar">
              <img src="../assets/avatar.png" alt="Avatar" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  )
}

function Sidebar() {
  const [open, setOpen] = React.useState(false);

  function handleSidebarToggle() {
    setOpen((prev) => !prev)
  }

  const currentPath = window.location.pathname;

  return (
    <div className="sidebar">
      <button aria-label="Abrir Menu" onClick={handleSidebarToggle}>
        <Box variant="fill" size="icon">
          <i className="ph ph-list"></i>
        </Box>
      </button>

      {open && (
        <aside className="sidebar__content">
          <header className="sidebar__header">
            <button aria-label="Fechar Menu" onClick={handleSidebarToggle}>
              <Box variant="fill" size="icon">
                <i className="ph ph-x"></i>
              </Box>
            </button>

            <img src="../assets/logo.svg" alt="Entendi Dinheiro Logo" />
          </header>

          <nav className="sidebar__nav">
            <Link 
              className={`sidebar__nav__link ${currentPath === "/" ? "sidebar__nav__link--active" : ""}`}
              href="/" 
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
              href="#" 
            >
              <i className="ph nav__link__icon ph-book-bookmark"></i> 

              <span>Meus Cursos e Certificados</span>
            </Link>

            <Link 
              className={`sidebar__nav__link`}
              href="#" 
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
              href="/catalogo" 
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
              href="#" 
            >
              <i className="ph nav__link__icon ph-question"></i> 

              <span>Ajuda</span>
            </Link>

            <div>
              <div className="separator__line"></div>
            </div>

            <Link 
              className={`sidebar__nav__link sidebar__nav__link--danger`}
              href="/login" 
            >
              <i className="ph nav__link__icon ph-sign-out"></i> 

              <span>Sair da conta</span>
            </Link>
          </footer>
        </aside>
      )}
    </div>
  )
}

window.HeaderPrincipal = Header;
