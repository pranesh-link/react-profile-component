interface ICloseIconProps {
  height?: number;
  width?: number;
  circleFillColor?: string;
  gStrokeColor?: string;
}

const CloseIcon = (props: ICloseIconProps) => {
  const {
    width = 24,
    height = 24,
    circleFillColor = "#2222",
    gStrokeColor = "#FFF",
  } = props;
  const svgProps = { width, height };
  return (
    <svg xmlns="http://www.w3.org/2000/svg" {...svgProps} viewBox="0 0 24 24">
      <g fill="none" fillRule="evenodd">
        <circle
          cx="12"
          cy="12"
          r="12"
          fill={circleFillColor}
          fillRule="nonzero"
        />
        <g stroke={gStrokeColor} strokeLinecap="round" strokeWidth="2">
          <path
            d="M0 0l3.85 3.937c.083.084.217.084.3 0L8 0"
            transform="translate(8 8)"
          />
          <path
            d="M.267 8L3.86 4.063c.077-.084.203-.084.28 0L7.733 8"
            transform="translate(8 8)"
          />
        </g>
      </g>
    </svg>
  );
};

export default CloseIcon;
