export type Message = {
  role: 'bot' | 'user';
  content: string;
  desc?: string;
};

export type APIMessage = {
  role: 'system' | 'user' | 'assistant';
  content: string;
};
