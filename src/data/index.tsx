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
      
    ],
  },
];

export const durationOptions = [
  { value: "5000", label: "5 seconds" },
  { value: "10000", label: "10 seconds" },
  { value: "15000", label: "15 seconds" },
  { value: "30000", label: "30 seconds" },
  { value: "60000", label: "60 seconds" },
];

export const drawCaseOptions = [
  { value: "S", label: "Single Draw" },
  { value: "M", label: "Multiple Draw" },
];

export const numberOfWinnerOptions = [
  { value: "2", label: "2 winners" },
  { value: "3", label: "3 winners" },
  { value: "4", label: "4 winners" },
  { value: "5", label: "5 winners" },
];
