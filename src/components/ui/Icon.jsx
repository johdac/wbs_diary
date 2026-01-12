export const Icon = ({ fillColor, height = 24, svg, width = 24 }) => {
  return (
    <svg fill="currentColor" color={fillColor} height={height} width={width}>
      <use href={`#${svg}`}></use>
    </svg>
  );
};
