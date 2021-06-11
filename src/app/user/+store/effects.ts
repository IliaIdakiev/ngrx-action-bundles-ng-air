import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { userListActions, userDetailActions } from './actions';
import { catchError, map, mergeMap, switchMap, takeUntil } from 'rxjs/operators';
import { UserService } from '../user.service';
import { UserListModel } from './models';

@Injectable()
export class UserModuleEffects {

  // loadUsers = createEffect(() => this.actions$.pipe(ofType(userListActions.loadUsers)).pipe(
  //   switchMap(() => this.userService.loadUsers().pipe(
  //     takeUntil(this.actions$.pipe(ofType(userListActions.loadUsersCancel))),
  //     map(users => userListActions.loadUsersSuccess({ users })),
  //     catchError(error => [userListActions.loadUsersFailure({ error })])
  //   ))
  // ));

  loadUsers = createEffect(() => this.userListModel.actions.listen.loadUsers$.pipe(
    switchMap(() => this.userService.loadUsers().pipe(
      takeUntil(this.userListModel.actions.listen.loadUsersCancel$),
      map(users => this.userListModel.actions.creators.loadUsersSuccess({ users })),
      catchError(error => [this.userListModel.actions.creators.loadUsersFailure({ error })])
    ))
  ));

  // loadUser = createEffect(() => this.actions$.pipe(ofType(userDetailActions.loadUser)).pipe(
  //   switchMap(({ id }) => this.userService.loadUser(id).pipe(
  //     takeUntil(this.actions$.pipe(ofType(userDetailActions.loadUserCancel))),
  //     map(user => userDetailActions.loadUserSuccess({ user })),
  //     catchError(error => [userDetailActions.loadUserFailure({ error })])
  //   ))
  // ));

  constructor(
    private userListModel: UserListModel,
    private userService: UserService
  ) { }

}
