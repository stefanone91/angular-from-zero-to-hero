import { Address } from './address.models';
import { Company } from './company.models';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export type CreateUserRequest = Omit<User, 'id'>;

export type UpdateUserRequest = User;
