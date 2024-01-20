export type StackParamList = {
  Home: undefined;
  Details: { color: string };
};

export type ColorButtonProps = {
  backgroundColor: string;
  onPress: (arg0: string) => void;
};

export type ColorFormProps = {
  onNewColor: (arg0: string) => void;
};

export type Color = {
  id: string;
  color: string;
};
