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
        </div>
      </div>
    </header>
  )
}

function Sidebar() {
  return (
    <div className="sidebar">
      <button>
        <Box variant="fill" size="icon">
          <i className="ph ph-list"></i>
        </Box>
      </button>
    </div>
  )
}

window.HeaderPrincipal = Header;
