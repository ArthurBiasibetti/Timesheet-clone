import { activityType, IUserHours } from './interfaces/userHours';

export const getUserHours = (user: 1 | 0) => {
  return new Promise<IUserHours>((resolve) => {
    const result: IUserHours = {
      totalTimeWorked: 7680,
      expectedTimeWorked: 8160,
      extraTimeWorked: 0,
      missingTimeWorked: 480,
      activities: Array<activityType>(5).fill({
        timeWorked: 360,
        activity: 'Torcer para o Brasil',
        project: {
          title: 'Hexa ta vindo ai!',
          activities: ['Torcer para o Brasil', 'Comemorar gol do pombo'],
          projectTime: 480,
        },
        createdAt: new Date(),
      }),
    };

    const result2: IUserHours = {
      totalTimeWorked: 7680,
      expectedTimeWorked: 8160,
      extraTimeWorked: 480,
      missingTimeWorked: 0,
      activities: Array<activityType>(5).fill({
        timeWorked: 480,
        activity: 'Torcer para o Brasil',
        project: {
          title: 'Hexa ta vindo ai!',
          activities: ['Torcer para o Brasil', 'Comemorar gol do pombo'],
          projectTime: 360,
        },
        createdAt: new Date(),
      }),
    };

    setTimeout(() => {
      resolve(user ? result : result2);
    }, 1000);
  });
};
