type Props = {
  sizeKey?: keyof typeof size;
};

const size = {
  small: 20,
  medium: 40,
  large: 60
};

export const Logo = ({ sizeKey = 'medium' }: Props) => {
  return (
    <svg
      width={size[sizeKey]}
      height={size[sizeKey]}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="30" cy="30" r="30" fill="#48A61D" />

      <path
        d="M34.8498 46.9069V43.1885L36.9568 43.5927C39.3069 44.0777 41.4949 42.3802 41.657 40.036L42.1432 34.7819L44.4933 33.8119C45.3036 33.4886 45.6278 32.5186 45.1416 31.7102L42.1432 26.6986C41.657 20.5553 38.1724 14.5736 29.1772 14.5736C19.939 14.5736 15.4009 21.3636 15.4009 28.3152C15.4009 31.3061 16.4544 33.8927 18.0751 36.0752C19.5338 38.0961 20.2631 40.521 20.2631 42.946V46.826H34.8498V46.9069Z"
        fill="#FFB74D"
      />
      <path
        d="M34.8498 46.9069V43.1886L29.1772 42.0569V46.9069H34.8498Z"
        fill="#FF9800"
      />
      <path
        d="M37.2809 29.5277C37.2809 29.8493 37.409 30.1577 37.637 30.3851C37.8649 30.6125 38.1741 30.7402 38.4965 30.7402C38.8189 30.7402 39.1281 30.6125 39.356 30.3851C39.584 30.1577 39.7121 29.8493 39.7121 29.5277C39.7121 29.2062 39.584 28.8978 39.356 28.6704C39.1281 28.443 38.8189 28.3152 38.4965 28.3152C38.1741 28.3152 37.8649 28.443 37.637 28.6704C37.409 28.8978 37.2809 29.2062 37.2809 29.5277Z"
        fill="#784719"
      />
      <path
        d="M28.691 14.5736C21.3166 14.5736 15.4009 20.4744 15.4009 27.8302C15.4009 36.8027 20.2631 37.0452 20.2631 42.8652L22.3701 42.1377C24.0719 41.5719 25.5305 40.2785 26.1788 38.5811L28.4479 33.0844L33.2291 30.7402V25.8902C33.2291 25.8902 38.9017 22.8186 38.9017 17.5644C36.4706 15.5436 32.1756 14.5736 28.691 14.5736Z"
        fill="#FF5722"
      />
      <path
        d="M28.3668 13.8461C27.8806 13.8461 27.5565 14.1695 27.5565 14.6545V25.8903C27.5565 26.3753 27.8806 26.6986 28.3668 26.6986C28.8531 26.6986 29.1772 26.3753 29.1772 25.8903V14.6545C29.1772 14.1695 28.8531 13.8461 28.3668 13.8461ZM41.2518 37.9344C34.8498 37.9344 32.9049 33.9736 32.8239 33.8119C32.6618 33.4078 32.1756 33.2461 31.7704 33.4078C31.3652 33.5694 31.2031 34.0544 31.3652 34.4586C31.4462 34.7011 33.7963 39.5511 41.2518 39.5511C41.738 39.5511 42.0621 39.2277 42.0621 38.7427C42.0621 38.2577 41.6569 37.9344 41.2518 37.9344Z"
        fill="#546E7A"
      />
      <path
        d="M39.712 38.8236C39.712 39.0359 39.7539 39.2462 39.8353 39.4423C39.9168 39.6385 40.0361 39.8167 40.1867 39.9669C40.3372 40.117 40.5158 40.2361 40.7125 40.3174C40.9091 40.3987 41.1199 40.4405 41.3328 40.4405C41.5456 40.4405 41.7564 40.3987 41.9531 40.3174C42.1497 40.2361 42.3284 40.117 42.4789 39.9669C42.6294 39.8167 42.7488 39.6385 42.8302 39.4423C42.9117 39.2462 42.9536 39.0359 42.9535 38.8236C42.9536 38.6113 42.9117 38.401 42.8302 38.2048C42.7488 38.0087 42.6294 37.8304 42.4789 37.6803C42.3284 37.5301 42.1497 37.411 41.9531 37.3298C41.7564 37.2485 41.5456 37.2067 41.3328 37.2067C41.1199 37.2067 40.9091 37.2485 40.7125 37.3298C40.5158 37.411 40.3372 37.5301 40.1867 37.6803C40.0361 37.8304 39.9168 38.0087 39.8353 38.2048C39.7539 38.401 39.712 38.6113 39.712 38.8236Z"
        fill="#37474F"
      />
      <path
        d="M22.6942 30.7402C22.6942 31.4833 22.8409 32.2191 23.126 32.9056C23.4111 33.5921 23.8289 34.2158 24.3557 34.7413C24.8824 35.2667 25.5078 35.6835 26.196 35.9678C26.8842 36.2522 27.6219 36.3985 28.3668 36.3985C29.1118 36.3985 29.8494 36.2522 30.5376 35.9678C31.2259 35.6835 31.8512 35.2667 32.378 34.7413C32.9047 34.2158 33.3226 33.5921 33.6076 32.9056C33.8927 32.2191 34.0394 31.4833 34.0394 30.7402C34.0394 29.9972 33.8927 29.2614 33.6076 28.5749C33.3226 27.8884 32.9047 27.2646 32.378 26.7392C31.8512 26.2138 31.2259 25.797 30.5376 25.5126C29.8494 25.2283 29.1118 25.0819 28.3668 25.0819C27.6219 25.0819 26.8842 25.2283 26.196 25.5126C25.5078 25.797 24.8824 26.2138 24.3557 26.7392C23.8289 27.2646 23.4111 27.8884 23.126 28.5749C22.8409 29.2614 22.6942 29.9972 22.6942 30.7402Z"
        fill="#37474F"
      />
      <path
        d="M25.1253 30.7403C25.1253 31.5978 25.4668 32.4202 26.0747 33.0266C26.6826 33.633 27.5071 33.9736 28.3668 33.9736C29.2265 33.9736 30.051 33.633 30.6589 33.0266C31.2668 32.4202 31.6083 31.5978 31.6083 30.7403C31.6083 29.8828 31.2668 29.0603 30.6589 28.454C30.051 27.8476 29.2265 27.507 28.3668 27.507C27.5071 27.507 26.6826 27.8476 26.0747 28.454C25.4668 29.0603 25.1253 29.8828 25.1253 30.7403Z"
        fill="#546E7A"
      />
    </svg>
  );
};
