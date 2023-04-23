export type InputDateTypeStyleProps = 'background-white' | 'background-grey';

export interface DateInputProps {
  children: React.ReactNode;
  focused: boolean;
  type?: InputDateTypeStyleProps;
  onPress: () => void;
}
