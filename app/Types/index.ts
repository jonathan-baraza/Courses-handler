export interface repoObject {
  id: number;
  name: string;
  description: string;
  starGazers: number;
  forks: number;
  watchers: number;
}

export interface courseType {
  id: number;
  title: string;
  description: string;
  link: string;
  level: string;
}
