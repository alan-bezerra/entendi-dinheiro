function Link(props) {
  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();

    if (props.onClick) {
      props.onClick(event);
    }

    navigate(props.href);
  }

  return (
    <a 
      href={props.href} 
      {...props}
      onClick={handleClick}
    >
      {props.children}
    </a>
  );
}

window.Link = Link;
