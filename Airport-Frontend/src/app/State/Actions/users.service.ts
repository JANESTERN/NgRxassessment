import { createAction, props } from '@ngrx/store';


export interface User {
    Id: number;
    Name: string;
    Email: string;
    Password: string;
  }
  

export const loginSuccess = createAction(
    '[Auth/API] Login Success',
    props<{ user: User }>()
  );
export const updateprofileInfo = createAction(
  '[User] Update User Info',
  props<{ name: string; email: string }>()
);
export const selectTheUser = createAction('[User] Select User');

export const updateProfile = createAction(
  '[User] Update User',
  props<{ user: User }>()
);