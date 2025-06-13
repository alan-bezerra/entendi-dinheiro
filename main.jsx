function App() {
  const [_currentPath, setCurrentPath] = React.useState(window.location.pathname);

  React.useEffect(() => {
    window.routerState.currentPath = window.location.pathname;
    
    // Adicionar listener para mudanças de rota
    const listener = (newPath) => {
      setCurrentPath(newPath);
    };
    
    window.routerState.listeners.push(listener);
    
    return () => {
      const index = window.routerState.listeners.indexOf(listener);
      if (index > -1) {
        window.routerState.listeners.splice(index, 1);
      }
    };
  }, []);

  const currentPage = renderCurrentPage();
  return currentPage;
}

ReactDOM.createRoot(document.getElementById('app')).render(<App />);

