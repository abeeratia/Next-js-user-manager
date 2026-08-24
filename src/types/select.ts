import * as React from "react";

export interface Option {
  label: string;
  value: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface BaseSelectFieldProps {
  id: string;
  label?: React.ReactNode;
  placeholder?: string;
  error?: string;
  required?: boolean;
}

export interface SelectFieldProps extends BaseSelectFieldProps {
  options: Option[];
  value?: string;
  onChange?: (value: string) => void;
}

export interface MultiSelectFieldProps extends BaseSelectFieldProps {
  options: Option[];
  selected: string[];
  onChange: (selected: string[]) => void;
  maxItems?: number;
  searchPlaceholder?: string;
}

export interface ComboboxFieldProps extends BaseSelectFieldProps {
  searchPlaceholder?: string;
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
}

export interface AsyncComboboxFieldProps extends BaseSelectFieldProps {
  searchPlaceholder?: string;
  value?: string;
  onChange: (value: string) => void;
}

export interface InfiniteScrollSelectFieldProps extends BaseSelectFieldProps {
  searchPlaceholder?: string;
  value?: string;
  onChange: (value: string) => void;
}

export interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  iconContainerClassName?: string
  className?: string
}
