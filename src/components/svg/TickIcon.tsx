interface ITickIconProps {
  heightPercent?: number;
  widthPercent?: number;
  fillColor?: string;
}

const TickIcon = (props: ITickIconProps) => {
  const { widthPercent = 100, heightPercent = 100, fillColor = "#fff" } = props;
  const svgProps = { height: `${heightPercent}%`, width: `${widthPercent}%` };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0,0,256,256"
      {...svgProps}
      fillRule="nonzero"
    >
      <g
        fillOpacity="0"
        fill="#000000"
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      >
        <path d="M0,256v-256h256v256z" id="bgRectangle"></path>
      </g>
      <g
        fill={fillColor}
        fillRule="nonzero"
        stroke="none"
        strokeWidth="1"
        strokeLinecap="butt"
        strokeLinejoin="miter"
        strokeMiterlimit="10"
        strokeDasharray=""
        strokeDashoffset="0"
        fontFamily="none"
        fontWeight="none"
        fontSize="none"
        textAnchor="none"
      >
        <g transform="scale(5.33333,5.33333)">
          <path d="M40.6,12.1l-23.6,23.6l-9.6,-9.6l-2.8,2.9l12.4,12.3l26.4,-26.4z"></path>
        </g>
      </g>
    </svg>
  );
};

export default TickIcon;
