function Link(props) {
  function handleClick(event) {
    event.preventDefault();
    event.stopPropagation();

    window.navigate(props.href);
  }

  return (
    <a 
      href={props.href} 
      onClick={handleClick}
      {...props}
    >
      {props.children}
    </a>
  );
}

window.Link = Link;
