import React from 'react';
import { Input } from "@nextui-org/react";

interface NumericInputProps {
  field: any;
  label: string;
  error?: any;
  isReadOnly?: boolean;
  endContent?: React.ReactNode;
  isRequired?: boolean;
}

const NumericInput: React.FC<NumericInputProps> = ({ 
  field, 
  label, 
  error, 
  isReadOnly,
  endContent,
  isRequired
}) => (
  <Input
    {...field}
    value={field.value?.toString() || ''}
    onChange={(e) => {
      const value = e.target.value;
      field.onChange(value === '' ? '' : Number(value));
    }}
    onFocusChange={(isFocused) => {
      if (isFocused) {
        setTimeout(() => {
          const input = document.querySelector(`input[name="${field.name}"]`) as HTMLInputElement;
          if (input) input.select();
        }, 0);
      }
    }}
    label={label}
    labelPlacement="outside"
    type="number"
    variant="underlined"
    isReadOnly={isReadOnly}
    isRequired={isRequired}
    isInvalid={!!error}
    errorMessage={error?.message}
    endContent={endContent}
  />
);

export default NumericInput;