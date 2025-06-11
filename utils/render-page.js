window.routerState = {
  currentPath: window.location.pathname,
  listeners: [],
}

function navigate(path) {
  if (window.routerState.currentPath !== path) {
    window.history.pushState({}, '', path)
    window.routerState.currentPath = path

    window.routerState.listeners.forEach((listener) => listener(path))
  }
}

function renderCurrentPage() {
  const currentPath = window.routerState.currentPath
  const route = window.routes.find((r) => r.path === currentPath)

  if (route && route.component) {
    const Component = route.component
    return React.createElement(Component)
  }

  return React.createElement('div', null, 'Página não encontrada - 404')
}

// Listener para botão voltar/avançar do navegador
window.addEventListener('popstate', () => {
  window.routerState.currentPath = window.location.pathname
  window.routerState.listeners.forEach((listener) =>
    listener(window.location.pathname)
  )
})

window.navigate = navigate
window.renderCurrentPage = renderCurrentPage
