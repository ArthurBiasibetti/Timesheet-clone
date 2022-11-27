import React from 'react';
import logo from '../../assets/logo.svg';
import exitIcon from '../../assets/exitIcon.svg';
import styles from './styles.module.scss';

export function Header() {
  return (
    <div className={`${styles.container}`}>
      <img src={logo} alt="Logo timesheet" className={`${styles.logo}`} />
      <span className={`${styles.page__name}`}>Planilha</span>
      <span className={`${styles.hello__text}`}>
        Olá,
        <span className={`${styles.highlighted__text}`}>
          Priscila Rodrigues.
        </span>
        <span className={`${styles.version__text}`}>Versão 10.0.0</span>
      </span>
      <img src={exitIcon} alt="Icon para desconectar o usuario"></img>
    </div>
  );
}
