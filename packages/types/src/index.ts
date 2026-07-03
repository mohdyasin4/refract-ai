export interface UserCreateProps {
  email?: string;
  first_name?: string;
  last_name?: string;
  profile_image_url?: string;
  user_id: string;
}

export interface NavItem {
  [x: string]: unknown;
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  divider?: boolean;
  description?: string;
  bottom?: boolean;
}

export interface RowData {
  id: number;
  name: string;
  email: string;
  age: number;
}
