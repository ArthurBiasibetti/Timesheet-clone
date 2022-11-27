import React, { useEffect, useState } from 'react';
import { Card } from '../../components/Card';
import { Header } from '../../components/Header';
import { IUserHours } from '../../services/api/interfaces/userHours';
import { getUserHours } from '../../services/api/UserHours';
import styles from './styles.module.scss';

export function TimeSheetPage() {
  const [userHours, setUserHours] = useState<IUserHours>({} as IUserHours);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //Trocar para 1 para ver as horas negativas e 0 para ver as horas extras
    getUserHours(1)
      .then((data) => setUserHours(data))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }, []);

  const getHours = (timeInMinutos: number = 0): string => {
    const hours = Math.ceil(timeInMinutos / 60);

    return hours > 9 ? hours.toString() : '0' + hours;
  };

  const getMinutes = (timeInMinutos: number = 0): string => {
    const minutes = timeInMinutos % 60;

    return minutes > 9 ? minutes.toString() : '0' + minutes;
  };

  return (
    <div className={`${styles.container}`}>
      {isLoading && <div className={`${styles.loading}`} />}
      <Header />

      <div className={`${styles.content}`}>
        <h3 className={`${styles.welcome__text}`}>
          Boas-Vindas, Priscila Rodrigues!
        </h3>

        <div className={`${styles.card__container}`}>
          <Card
            title="Horas feitas no mês"
            description={`${getHours(userHours.totalTimeWorked)}:${getMinutes(
              userHours.totalTimeWorked
            )} / 160h`}
            containerClassName={`${styles.card}`}
            descriptionClassName={`${styles.purple__text}`}
          />
          <Card
            title="Previsão de horas"
            description={`${getHours(
              userHours.expectedTimeWorked
            )}:${getMinutes(userHours.expectedTimeWorked)} / 160h`}
            containerClassName={`${styles.card}`}
            descriptionClassName={`${styles.blue__text}`}
          />
          <Card
            title="Horas Extras"
            description={`${getHours(userHours.extraTimeWorked)}:${getMinutes(
              userHours.extraTimeWorked
            )}`}
            containerClassName={`${styles.card}`}
            descriptionClassName={`${
              userHours.extraTimeWorked > 0 ? styles.green__text : ''
            }`}
          />
          <Card
            title="Horas Negativas"
            description={`${
              (userHours.missingTimeWorked ? '-' : '') +
              getHours(userHours.missingTimeWorked)
            }:${getMinutes(userHours.missingTimeWorked)}`}
            containerClassName={`${styles.card}`}
            descriptionClassName={`${
              userHours.missingTimeWorked > 0 ? styles.red__text : ''
            }`}
          />
        </div>
        <h3 className={`${styles.table__title}`}>Projeto em andamento</h3>
        <div className={`${styles.table__wrapper}`}>
          <table className={`${styles.table__container}`}>
            <thead>
              <tr>
                <th>Projeto</th>
                <th>Atividades</th>
                <th>Início</th>
                <th>Horas projeto</th>
                <th>Horas apropiadas</th>
              </tr>
            </thead>
            <tbody>
              {userHours?.activities?.map((activity) => (
                <tr>
                  <td>{activity.project.title}</td>
                  <td>{activity.activity}</td>
                  <td>
                    {activity.createdAt
                      .toLocaleDateString('pt-BR')
                      .replaceAll(/[/]/g, '.')}
                  </td>
                  <td>{Math.ceil(activity.project.projectTime / 60)} horas</td>
                  <td>{Math.ceil(activity.timeWorked / 60)} horas</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
