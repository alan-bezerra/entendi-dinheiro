function Carousel({ children, className = "", gap = "16px", padding = "1.5rem" }) {
  return (
    <div 
      className={`carousel ${className}`}
      style={{ 
        "--carousel-gap": gap,
        "--carousel-padding": padding
      }}
    >
      {children}
    </div>
  );
}

function CarouselItem({ children, className = "", minWidth = "auto" }) {
  return (
    <div 
      className={`carousel__item ${className}`}
      style={{ "--item-min-width": minWidth }}
    >
      {children}
    </div>
  );
}

window.Carousel = Carousel;
window.CarouselItem = CarouselItem;
