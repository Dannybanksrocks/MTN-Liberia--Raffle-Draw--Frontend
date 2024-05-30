import { FaPhone } from "react-icons/fa6";

export const menus = [
  {
    submenu: [
      {
        title: "Msisdn for draw",
        url: "/",
        group: "Upload",
        icon: <FaPhone />,
      },
      // {
      //   title: "Spin for winner",
      //   url: "/spin",
      //   group: "Get winner",
      //   icon: <ImSpinner9 />,
      // },
    ],
  },
];

export const durationOptions = [
  { value: "1mins", label: "1 minutes" },
  { value: "2mins", label: "2 minutes" },
  { value: "3mins", label: "3 minutes" },
];
