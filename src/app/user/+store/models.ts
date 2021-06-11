import { Injectable } from "@angular/core";
import { Actions, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { userDetailActions, userListActions } from "./actions";
import { userListSelectors, userDetailSelectors } from "./selectors";


@Injectable({
  providedIn: 'root'
})
export class UserListModel {

  users$ = this.store.select(userListSelectors.userList);

  loadUsers$ = this.actions$.pipe(ofType(userListActions.loadUsers));
  loadUsersSuccess$ = this.actions$.pipe(ofType(userListActions.loadUsersSuccess));
  loadUsersFailure$ = this.actions$.pipe(ofType(userListActions.loadUsersFailure));

  constructor(private store: Store, private actions$: Actions) { }

  loadUsers() {
    this.store.dispatch(userListActions.loadUsers());
  }

  loadUsersClear() {
    this.store.dispatch(userListActions.loadUsersClear());
  }

}

@Injectable({
  providedIn: 'root'
})
export class UserDetailModel {

  user$ = this.store.select(userDetailSelectors.userDetail);

  loadUsersSuccess$ = this.actions$.pipe(ofType(userDetailActions.loadUserSuccess));
  loadUserFailure$ = this.actions$.pipe(ofType(userDetailActions.loadUserFailure));

  constructor(private store: Store, private actions$: Actions) { }

  loadUser(id: number) {
    this.store.dispatch(userDetailActions.loadUser({ id }));
  }

}
