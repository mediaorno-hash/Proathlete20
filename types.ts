
export type UserRole = 'COACHES' | 'PARENTS' | 'ATHLETES' | 'ATHLETIC_DIRECTORS';
export type Sport = 'BASKETBALL' | 'SOCCER' | 'ALL';

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Athlete {
  id: string;
  name: string;
  image: string;
  rank: string;
  discipline: string;
  metrics: Record<string, string | number>;
}
