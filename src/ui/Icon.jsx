export const Icon = ({ fill = "white", height = 24, svg, width = 24 }) => {
  return (
    <svg fill={fill} height={height} width={width}>
      <use href={`#${svg}`}></use>
    </svg>
  );
};
