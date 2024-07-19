export interface Skill {
  id: number;
  title: string;
  progress: string;
  color: string;
}

export interface Project {
  name: string;
  description: string;
  github: string;
  website?: string;
  imageUrl?: any;
}
