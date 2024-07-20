import React from "react";
import styles from "./NameRequest.module.css";

const NameRequest = ({ setUserName }) => {
   return (
      <div className={styles.nameDiv}>
      <h2 className={styles.nameRequest}>Insira seu nome aqui:</h2>
      <input
         className={styles.inputName}
         type="text"
         onBlur={(e) => setUserName(e.target.value)}
      />
      </div>
   );
};

export default NameRequest;
