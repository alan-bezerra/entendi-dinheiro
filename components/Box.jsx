// Size = 'default', 'icon'
// Variant = 'fill', 'outline
function Box({ size, variant, ...props }) {
  const currentSize = ['sm', 'default', 'icon'].includes(size) ? size : 'default'; 
  const classSize = `box-${currentSize}`;
  const classVariant = variant ? `box-${variant}` : '';

  return (
    <div className={`box ${classVariant} ${classSize}`}>
      {props.children}
    </div>
  )
}

window.Box = Box;
