// src/app/entities/interface/account.ts
export interface IAccount {
    _id?: string;
    username?: string;
    email: string;
    password: string;
    accessToken?: any;
    refreshToken?: any;
  }