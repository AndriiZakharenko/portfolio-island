"use client";

import { useState } from "react";

type AlertType = "success" | "danger" | "info" | "warning";

interface Alert {
  show: boolean;
  text: string;
  type: AlertType;
}

interface ShowAlertParams {
  text: string;
  type?: AlertType;
}

const useAlert = () => {
  const [alert, setAlert] = useState<Alert>({
    show: false,
    text: "",
    type: "danger",
  });

  const showAlert = ({ text, type = "danger" }: ShowAlertParams) => {
    setAlert({ show: true, text, type });
  };

  const hideAlert = () => {
    setAlert({ show: false, text: "", type: "danger" });
  };

  return { alert, showAlert, hideAlert };
};

export default useAlert;
