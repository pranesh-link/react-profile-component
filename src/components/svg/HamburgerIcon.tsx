interface IHamburgerIconProps {
  height?: number;
  width?: number;
  fillColor?: string;
}

const HamburgerIcon = (props: IHamburgerIconProps) => {
  const { width = 24, height = 14, fillColor = "#3E3E3E" } = props;
  const svgProps = { width, height };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...svgProps} viewBox="0 0 24 14">
      <g fill={fillColor} fillRule="nonzero">
        <rect width="24" height="2" rx="1" />
        <rect width="24" height="2" y="6" rx="1" />
        <rect width="24" height="2" y="12" rx="1" />
      </g>
    </svg>
  );
};

export default HamburgerIcon;
