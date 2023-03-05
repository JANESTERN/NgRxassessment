import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Action, createAction, createReducer, props, Store } from '@ngrx/store';
import {Observable} from 'rxjs'
import {AuthService} from './auth.service'
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  constructor(private AuthService:AuthService, private router:Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): 
  boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
   return this.AuthService.getAuthStatus().then((status:boolean)=>{
    if(status){
      return true
    }else{
      this.router.navigate(['login'])
      return false
    }
   })
  }

export const userlogin = createAction(
  '[User] Login',
  props<{ username: string; password: string; }>()
);
export const userLoginReducer = createReducer<UserState, Action>(
  initialState,
  on(userlogin, (state: any, action: { username: { username: any; password: any; }; }) => {
      const { username, password } = action.username;
      return {
          ...state,
          isLoggedIn: true,
          username: username
      };
  })
);

@Injectable()
export class: any UserLoginService: any {

  constructor(private Store: Store<UserState>) {
  }

  login(username: string, password: string) {
      this.store.dispatch(userlogin({ username, password }));
  }
}
}




function login(username: any, string: any, password: any, string1: any) {
  throw new Error('Function not implemented.');
}

function on(userLogin: any, arg1: (state: any, action: { username: { username: any; password: any; }; }) => any): import("@ngrx/store").ReducerTypes<UserState, readonly import("@ngrx/store").ActionCreator<string, import("@ngrx/store").Creator<any[], object>>[]> {
  throw new Error('Function not implemented.');
}

function constructor(private: any, store: any, arg2: { new(state$: import("@ngrx/store").StateObservable, actionsObserver: import("@ngrx/store").ActionsSubject, reducerManager: import("@ngrx/store").ReducerManager): Store<UserState>; prototype: Store<...>; ɵfac: unknown; ɵprov: import("@angular/core").ɵɵInjectableDeclaration<...>; create: (...args: any[]) => any; }) {
  throw new Error('Function not implemented.');
}

function userlogin(arg0: { username: any; password: any; }): any {
  throw new Error('Function not implemented.');
}

