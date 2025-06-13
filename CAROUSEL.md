# Componente Carousel Reutilizável

## Como usar

### Exemplo básico:
```jsx
<Carousel>
  <CarouselItem>Item 1</CarouselItem>
  <CarouselItem>Item 2</CarouselItem>
  <CarouselItem>Item 3</CarouselItem>
</Carousel>
```

### Exemplo com configurações customizadas:
```jsx
<Carousel gap="20px" padding="2rem" className="my-carousel">
  <CarouselItem minWidth="280px">
    <Box>Card content here</Box>
  </CarouselItem>
  <CarouselItem minWidth="280px">
    <Box>Another card</Box>
  </CarouselItem>
</Carousel>
```

## Props do Carousel

- `gap`: Espaçamento entre itens (padrão: "16px")
- `padding`: Padding lateral (padrão: "1.5rem")
- `className`: Classes CSS adicionais

## Props do CarouselItem

- `minWidth`: Largura mínima do item (padrão: "auto")
- `className`: Classes CSS adicionais

## Classes CSS pré-definidas

### Para o Carousel:
- `.carousel--tight`: Gap de 8px
- `.carousel--loose`: Gap de 24px
- `.carousel--no-padding`: Remove padding lateral

### Para os CarouselItems:
- `.carousel__item--card`: 280px-320px (para cards)
- `.carousel__item--category`: 80px-88px (para categorias)
- `.carousel__item--large`: 350px-400px (para cards grandes)

## Funcionalidades

✅ **Scroll horizontal suave**
✅ **Snap scroll automático**
✅ **Scrollbar oculta**
✅ **Gradientes nas bordas**
✅ **Hover effects**
✅ **Touch/swipe no mobile**
✅ **Responsivo**
✅ **Acessibilidade (keyboard navigation)**

## Compatibilidade

- ✅ Desktop (mouse wheel + drag)
- ✅ Mobile (touch/swipe)
- ✅ Keyboard (arrow keys quando focado)
- ✅ Todos os navegadores modernos
