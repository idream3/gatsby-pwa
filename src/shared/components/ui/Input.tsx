

import { Input, InputProps as FlicketInputProps, Checkbox, Text, SystemProps } from 'flicket-ui';

export interface InputProps extends FlicketInputProps {
  theme?: "light" | "dark";
}

const ThemedInput = ({ theme = "light", ...props }: InputProps & SystemProps) => {
  return (
    //  @ts-expect-error flicket-ui
    <Input
      {...props}
      label={
        <Text color={theme === "dark" ? "white" : "N800"} variant="regular">
          {props.label}
        </Text >
      }
    />
  )
};

export { ThemedInput as Input, Checkbox };