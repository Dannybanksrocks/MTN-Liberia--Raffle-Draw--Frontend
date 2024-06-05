import { toast } from "react-toastify";

export const showToast = (message: string, success: boolean) => {
  if (success === true)
    toast.success(message, {
      position: "top-center",
      autoClose: 3000,
    });
  else if (success === false) {
    toast.error(message, {
      position: "top-center",
      autoClose: 3000,
    });
  }
};
