import React, { useEffect, useState } from "react";
import styles from "./ReposList.module.css";

const ReposList = ({ userName }) => {
  const [repos, setRepos] = useState([]);
  const [estaCarregando, setEstaCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    setEstaCarregando(true);
    setErro(null); // Resetar o erro antes de fazer uma nova requisição

    fetch(`https://api.github.com/users/${userName}/repos`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Usuário não encontrado");
        }
        return res.json();
      })
      .then((resJson) => {
        setTimeout(() => {
          setEstaCarregando(false);
          setRepos(resJson);
        }, 1000);
      })
      .catch((e) => {
        setEstaCarregando(false);
        setErro(e.message);
      });
  }, [userName]);

  return (
    <div className="container">
      {estaCarregando ? (
        <h1>Carregando..</h1>
      ) : erro ? (
        <h1>{erro}</h1>
      ) : (
        <ul className={styles.list}>
          {repos.map(({ id, name, language, html_url }) => (
            <li className={styles.listItem} key={id}>
              <div className={styles.itemName}>
                <b>Nome:</b> {name}
              </div>
              <div className={styles.itemLanguage}>
                <b>Linguagem:</b> {language}
              </div>
              <a className={styles.itemLink} target="_blank" href={html_url}>
                Visitar no Github
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReposList;
