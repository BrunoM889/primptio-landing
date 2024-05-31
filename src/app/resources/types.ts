export type AppContextType = {
  language: string;
  mode: boolean;
};

export type ButtonProps = {
  content: string;
  style?: string;
  onClick?: () => void;
  appState: AppContextType;
};

export type ServiceType = {
  id: number;
  listOfPros: string[];
  title: string;
  description: string;
  price: number;
  completeDescription: string[];
};

export type MessageType = {
  name: string;
  email: string;
  message: string;
};

export type UseFormType = () => {
  feedBack: string;
  setMessageData: (arg: MessageType) => void;
  handleSubmit: () => void;
  messageData: MessageType;
};
