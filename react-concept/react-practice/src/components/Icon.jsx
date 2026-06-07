function Icon({ name, size = 24 }) {
  return (
    <svg width={size} height={size}>
      <use href={`/sprite.svg#icon-${name}`} />
    </svg>
  );
}

export default Icon;