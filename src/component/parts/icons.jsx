function DashboardIcon(props) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6667 3.5H3.5V11.6667H11.6667V3.5Z"
        stroke={props.color ? props.color : '#3A3D42'}
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.4999 3.5H16.3333V11.6667H24.4999V3.5Z"
        stroke={props.color ? props.color : '#3A3D42'}
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.4999 16.333H16.3333V24.4997H24.4999V16.333Z"
        stroke={props.color ? props.color : '#3A3D42'}
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.6667 16.333H3.5V24.4997H11.6667V16.333Z"
        stroke={props.color ? props.color : '#3A3D42'}
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowUpIcon(props) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 22.1663V5.83301"
        stroke={props.color ? props.color : '#3A3D42'}
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83337 13.9997L14 5.83301L22.1667 13.9997"
        stroke={props.color ? props.color : '#3A3D42'}
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14 5.83301V22.1663"
        stroke={props.color ? props.color : '#3A3D42'}
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.83337 14H22.1667"
        stroke={props.color ? props.color : '#3A3D42'}
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PersonIcon(props) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M23.3333 24.5V22.1667C23.3333 20.929 22.8416 19.742 21.9665 18.8668C21.0913 17.9917 19.9043 17.5 18.6666 17.5H9.33329C8.09562 17.5 6.90863 17.9917 6.03346 18.8668C5.15829 19.742 4.66663 20.929 4.66663 22.1667V24.5"
        stroke={props.color ? props.color : '#3A3D42'}
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 12.8333C16.5774 12.8333 18.6667 10.744 18.6667 8.16667C18.6667 5.58934 16.5774 3.5 14 3.5C11.4227 3.5 9.33337 5.58934 9.33337 8.16667C9.33337 10.744 11.4227 12.8333 14 12.8333Z"
        stroke={props.color ? props.color : '#3A3D42'}
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function LogoutIcon(props) {
  return (
    <svg
      viewBox="0 0 28 28"
      fill="none"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 24.5H5.83333C5.21449 24.5 4.621 24.2542 4.18342 23.8166C3.74583 23.379 3.5 22.7855 3.5 22.1667V5.83333C3.5 5.21449 3.74583 4.621 4.18342 4.18342C4.621 3.74583 5.21449 3.5 5.83333 3.5H10.5"
        stroke={props.color ? props.color : '#3A3D42'}
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6667 19.8337L24.5 14.0003L18.6667 8.16699"
        stroke={props.color ? props.color : '#3A3D42'}
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 14H10.5"
        stroke={props.color ? props.color : '#3A3D42'}
        strokeOpacity="0.8"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export { ArrowUpIcon, DashboardIcon, LogoutIcon, PersonIcon, PlusIcon };
