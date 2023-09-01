"use client";
import useAlertStore, { Alert } from "store/alertStore";
import { useEffect } from "react";
import {
  BiCheck,
  BiError,
  BiInfoCircle,
  BiMessageRoundedError,
} from "react-icons/bi";
import { IconType } from "react-icons";

const Alert = ({ message, type = "info" }: Alert) => {
  const AlertIcons = {
    warning: BiMessageRoundedError,
    error: BiError,
    info: BiInfoCircle,
    success: BiCheck,
  };
  const { setAlert } = useAlertStore();
  const Icon = AlertIcons[type] as IconType;

  useEffect(() => {
    setTimeout(() => {
      setAlert({ message: null });
    }, 5000);
  }, []);
  return (
    <div className={`fixed alert ${type ? `alert-${type}` : ""} `}>
      {type ? <Icon className="text-2xl" /> : null}
      <span>{message}</span>
    </div>
  );
};

export default Alert;
