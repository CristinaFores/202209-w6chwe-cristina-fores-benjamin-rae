export interface Robot {
  name: string;
  image: string;
  speed: number;
  strength: number;
  createdOn: number;
  _id?: number;
}

export type Robots = Robots[];
