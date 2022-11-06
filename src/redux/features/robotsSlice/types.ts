export interface Robot {
  name: string;
  image: string;
  speed: number;
  strength: number;
  createdOn: string;
  _id?: number;
}

export interface RobotsState {
  robotsList: Robots;
}

export type Robots = Robot[];
