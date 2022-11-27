import { IProject } from '../project';

export type activityType = {
  project: IProject;
  activity: string;
  timeWorked: number;
  createdAt: Date;
};

export interface IUserHours {
  activities: activityType[];
  totalTimeWorked: number;
  expectedTimeWorked: number;
  extraTimeWorked: number;
  missingTimeWorked: number;
}
