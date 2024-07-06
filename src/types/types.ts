export type Score = {
  name: string;
  score: {
    seconds: number;
  };
};

export type Position = {
  x: number;
  y: number;
};

export type ShowFinder = {
  x: number;
  y: number;
  show: boolean;
};

export type Circles = {
  x: number;
  y: number;
  found: boolean;
};

export type Character = {
  name: string;
  coords: {
    x: number;
    y: number;
  };
  found: boolean;
  _id: string;
};
