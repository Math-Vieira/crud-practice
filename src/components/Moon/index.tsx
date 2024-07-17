type Props = {
  sizeKey?: keyof typeof size;
};

const size = {
  small: 20,
  medium: 30,
  large: 42
};

export const Moon = ({ sizeKey = 'medium' }: Props) => {
  return (
    <svg
      width={size[sizeKey]}
      height={size[sizeKey]}
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="fadeIn"
    >
      <path
        d="M21 42.021C32.6095 42.021 42.021 32.6095 42.021 21C42.021 20.0274 40.5632 19.8666 40.0602 20.699C37.6674 24.6589 33.3215 27.3063 28.3574 27.3063C20.811 27.3063 14.6937 21.189 14.6937 13.6427C14.6937 8.67845 17.3411 4.33256 21.301 1.93976C22.1335 1.43675 21.9727 -0.0209961 21 -0.0209961C9.39043 -0.0209961 -0.0209961 9.39043 -0.0209961 21C-0.0209961 32.6095 9.39043 42.021 21 42.021Z"
        fill="black"
      />
    </svg>
  );
};
