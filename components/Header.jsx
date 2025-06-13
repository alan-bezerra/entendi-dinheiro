function Header() {
  const [minimized, setMinimized] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <header className="header">
        <div className="header__content">
          <div className="header__left-logo">
            <div className="sidebar-mobile">
              <button onClick={() => setOpen(true)} aria-label="Abrir Menu">
                <Box variant="fill" size="icon">
                  <i className="ph ph-list"></i>
                </Box>
              </button>

              <MobileSidebar open={open} setOpen={setOpen} />
            </div>

            <button 
              onClick={() => setMinimized(!minimized)} 
              className="desktop-trigger-sidebar" 
              aria-label={minimized ? "Expandir Menu" : "Minimizar Menu"}
            >
              <Box variant="fill" size="icon">
                {minimized ?
                  <i className="ph ph-text-indent"></i> :
                  <i className="ph ph-text-outdent"></i>
                }
              </Box>
            </button>

            <img src="../assets/logo.svg" alt="Entendi Dinheiro Logo" />
          </div>

            <div className="header__search-container">
              <i className="ph ph-magnifying-glass"></i>

              <input type="search" placeholder="Busque por assuntos e aulas" aria-label="Busque por assuntos e aulas" />
            </div>

          <div className="header__right">
            <button className="header__search-button" aria-label="Pesquisar">
              <Box variant="outline" size="icon">
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

      <DesktopSidebar minimized={minimized} />
    </>
  )
}

window.HeaderPrincipal = Header;
