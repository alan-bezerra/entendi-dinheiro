import { Link } from "react-router";
import { Box } from "../../components/Box";
import { Carousel, CarouselItem } from "../../components/Carousel";
import './styles.css';

export function CatalogoPage() {
  return (
    <div className="container">
      <section className="catalogo__section-header">
        <header className="flex align-items justify-content-between">
          <div>
            <h1 className="title">Catálogo</h1>
            <p className="description">Navegue por todo o conteúdo da Entendi Dinheiro</p>
          </div>

          <Box size="icon" variant="fill">
            <i className="ph ph-funnel-simple"></i>
          </Box>
        </header>

        <Carousel className="categories__list" gap="12px">
          <CarouselItem className="category__item" minWidth="80px">
            <Box className="category__box" size="icon" variant="fill">
              <i style={{ "--category-icon-color": "#B97C1F" }} className="ph ph-wallet"></i>
            </Box>
            <span className="category__name">Orçamento Pessoal</span>
          </CarouselItem>

          <CarouselItem className="category__item" minWidth="80px">
            <Box className="category__box" size="icon" variant="fill">
              <i style={{ "--category-icon-color": "#37C837" }} className="ph ph-currency-circle-dollar"></i>
            </Box>
            <span className="category__name">Dívidas e crédito</span>
          </CarouselItem>

          <CarouselItem className="category__item" minWidth="80px">
            <Box className="category__box" size="icon" variant="fill">
              <i style={{ "--category-icon-color": "#8752F2" }} className="ph ph-bank"></i>
            </Box>
            <span className="category__name">Educação bancária</span>
          </CarouselItem>

          <CarouselItem className="category__item" minWidth="80px">
            <Box className="category__box" size="icon" variant="fill">
              <i style={{ "--category-icon-color": "#48C6E9" }} className="ph ph-credit-card"></i>
            </Box>
            <span className="category__name">Cartão de crédito</span>
          </CarouselItem>

          <CarouselItem className="category__item" minWidth="80px">
            <Box className="category__box" size="icon" variant="fill">
              <i style={{ "--category-icon-color": "#EB6756" }} className="ph ph-money-wavy"></i>
            </Box>
            <span className="category__name">Empréstimos</span>
          </CarouselItem>

          <CarouselItem className="category__item" minWidth="80px">
            <Box className="category__box" size="icon" variant="fill">
              <i style={{ "--category-icon-color": "#E089F2" }} className="ph ph-piggy-bank"></i>
            </Box>
            <span className="category__name">Investimentos</span>
          </CarouselItem>

          <CarouselItem className="category__item" minWidth="80px">
            <Box className="category__box" size="icon" variant="fill">
              <i style={{ "--category-icon-color": "#3B30D8" }} className="ph ph-chart-line-up"></i>
            </Box>
            <span className="category__name">Economia</span>
          </CarouselItem>

          <CarouselItem className="category__item" minWidth="80px">
            <Box className="category__box" size="icon" variant="fill">
              <i style={{ "--category-icon-color": "#DA5214" }} className="ph ph-hand-arrow-up"></i>
            </Box>
            <span className="category__name">Consumo consciente</span>
          </CarouselItem>
        </Carousel>
      </section>

      <section className="catalogo__content">
        {/* Formações */}
        <section className="catalogo__cursos-section">
          <header className="flex align-items justify-content-between">
            <h2 className="subtitle">Formações</h2>
            <Link className="link" to="/catalogo">
              Ver tudo
              <i className="ph ph-caret-right"></i>
            </Link>
          </header>

          <ul className="catalogo__cursos-list">
            <li>
              <Box className="curso-item">
                <header className="flex curso-item__header align-items">
                  <div className="curso-item__logo">
                    <img src="/cursos/primeiros-passos-logo.svg" />
                  </div>

                  <span className="free-badge">Grátis</span>
                </header>
                
                <div className="curso-item__content">
                  <span>FORMAÇÃO - 10h</span>
                  <p className="curso-item__title">Primeiros Passos com o Dinheiro</p>
                </div>

                <Carousel padding="0" gap="10px">
                  <CarouselItem>
                    <Box variant="outline" className="badge">
                      <i className="ph ph-chart-bar"></i>
                      <span>Iniciante</span>
                    </Box>
                  </CarouselItem>
                  <CarouselItem>
                    <Box variant="outline" style={{ "--badge-icon-color": "#B97C1F" }} className="badge">
                      <i className="ph ph-wallet"></i>
                      <span>Orçamento Pessoal</span>
                    </Box>
                  </CarouselItem>
                  <CarouselItem>
                    <Box variant="outline" style={{ "--badge-icon-color": "#DA5214" }} className="badge">
                      <i className="ph ph-hand-arrow-up"></i>
                      <span>Consumo Consciente</span>
                    </Box>
                  </CarouselItem>
                </Carousel>
              </Box>
            </li>

            <li>
              <Box className="curso-item">
                <header className="flex curso-item__header align-items">
                  <div className="curso-item__logo">
                    <img src="/cursos/como-controlar-gastos-logo.svg" />
                  </div>
                </header>
                
                <div className="curso-item__content">
                  <span>FORMAÇÃO - 8h</span>
                  <p className="curso-item__title">Saindo do Aperto</p>
                </div>

                <Carousel padding="0" gap="10px">
                  <CarouselItem>
                    <Box variant="outline" className="badge">
                      <i className="ph ph-chart-bar"></i>
                      <span>Intermediário</span>
                    </Box>
                  </CarouselItem>
                  <CarouselItem>
                    <Box variant="outline" style={{ "--badge-icon-color": "#37C837" }} className="badge">
                      <i className="ph ph-currency-circle-dollar"></i>
                      <span>Dívidas e crédito</span>
                    </Box>
                  </CarouselItem>
                  <CarouselItem>
                    <Box variant="outline" style={{ "--badge-icon-color": "#48C6E9" }} className="badge">
                      <i className="ph ph-credit-card"></i>
                      <span>Cartão de crédito</span>
                    </Box>
                  </CarouselItem>
                </Carousel>
              </Box>
            </li>

            <li>
              <Box className="curso-item">
                <header className="flex curso-item__header align-items">
                  <div className="curso-item__logo">
                    <img src="/cursos/comece-a-investir-logo.svg" />
                  </div>
                </header>
                
                <div className="curso-item__content">
                  <span>FORMAÇÃO - 14h</span>
                  <p className="curso-item__title">Comece a Investir</p>
                </div>

                <Carousel padding="0" gap="10px">
                  <CarouselItem>
                    <Box variant="outline" className="badge">
                      <i className="ph ph-chart-bar"></i>
                      <span>Intermediário</span>
                    </Box>
                  </CarouselItem>
                  <CarouselItem>
                    <Box variant="outline" style={{ "--badge-icon-color": "#E089F2" }} className="badge">
                      <i className="ph ph-piggy-bank"></i>
                      <span>Investimentos básicos</span>
                    </Box>
                  </CarouselItem>
                </Carousel>
              </Box>
            </li>
          </ul>
        </section>

        {/* Cursos */}
        <section className="catalogo__cursos-section">
          <header className="flex align-items justify-content-between">
            <h2 className="subtitle">Cursos</h2>
            <Link className="link" to="/catalogo">
              Ver tudo
              <i className="ph ph-caret-right"></i>
            </Link>
          </header>

          <ul className="catalogo__cursos-list">
            <li>
              <Box className="curso-item">
                <header className="flex curso-item__header align-items">
                  <div className="curso-item__logo">
                    <img src="/cursos/entendendo-cartao-logo.svg" />
                  </div>
                </header>
                
                <div className="curso-item__content">
                  <span>CURSO - 4h</span>
                  <p className="curso-item__title">Entendendo o Cartão de Crédito sem Complicação</p>
                </div>

                <Carousel padding="0" gap="10px">
                  <CarouselItem>
                    <Box variant="outline" className="badge">
                      <i className="ph ph-chart-bar"></i>
                      <span>Iniciante</span>
                    </Box>
                  </CarouselItem>
                  <CarouselItem>
                    <Box variant="outline" style={{ "--badge-icon-color": "#48C6E9" }} className="badge">
                      <i className="ph ph-credit-card"></i>
                      <span>Cartão de crédito</span>
                    </Box>
                  </CarouselItem>
                  <CarouselItem>
                    <Box variant="outline" style={{ "--badge-icon-color": "#37C837" }} className="badge">
                      <i className="ph ph-currency-circle-dollar"></i>
                      <span>Dívidas e crédito</span>
                    </Box>
                  </CarouselItem>
                </Carousel>
              </Box>
            </li>

            <li>
              <Box className="curso-item">
                <header className="flex curso-item__header align-items">
                  <div className="curso-item__logo">
                    <img src="/cursos/orcamento-mensal-logo.svg" />
                  </div>
                </header>
                
                <div className="curso-item__content">
                  <span>CURSO - 5h</span>
                  <p className="curso-item__title">Montando seu Primeiro Orçamento Mensal</p>
                </div>

                <Carousel padding="0" gap="10px">
                  <CarouselItem>
                    <Box variant="outline" className="badge">
                      <i className="ph ph-chart-bar"></i>
                      <span>Iniciante</span>
                    </Box>
                  </CarouselItem>
                  <CarouselItem>
                    <Box variant="outline" style={{ "--badge-icon-color": "#B97C1F" }} className="badge">
                      <i className="ph ph-wallet"></i>
                      <span>Orçamento Pessoal</span>
                    </Box>
                  </CarouselItem>
                </Carousel>
              </Box>
            </li>

            <li>
              <Box className="curso-item">
                <header className="flex curso-item__header align-items">
                  <div className="curso-item__logo">
                    <img src="/cursos/dinheiro-dia-a-dia-logo.svg" />
                  </div>
                </header>
                
                <div className="curso-item__content">
                  <span>CURSO - 6h</span>
                  <p className="curso-item__title">Organizando seu Dinheiro no Dia a Dia</p>
                </div>

                <Carousel padding="0" gap="10px">
                  <CarouselItem>
                    <Box variant="outline" className="badge">
                      <i className="ph ph-chart-bar"></i>
                      <span>Intermediário</span>
                    </Box>
                  </CarouselItem>
                  <CarouselItem>
                    <Box variant="outline" style={{ "--badge-icon-color": "#B97C1F" }} className="badge">
                      <i className="ph ph-wallet"></i>
                      <span>Orçamento Pessoal</span>
                    </Box>
                  </CarouselItem>
                </Carousel>
              </Box>
            </li>
          </ul>
        </section>
      </section>
    </div>
  )
}

