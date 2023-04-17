import { btnProps } from "@/types/types";
import React from "react";

import styles from "./Button.module.scss";

const Button = ({ icon, children }: btnProps) => {
  return (
    <button className={styles.btn}>
      {icon && <span>{icon}</span>}
      <span>{children}</span>
    </button>
  );
};

export default Button;
