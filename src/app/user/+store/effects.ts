import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { userListActions, userDetailActions } from './actions';
import { catchError, map, mergeMap, switchMap, takeUntil } from 'rxjs/operators';
import { UserService } from '../user.service';

@Injectable()
export class UserModuleEffects {

  loadUsers = createEffect(() => this.actions$.pipe(ofType(userListActions.loadUsers)).pipe(
    switchMap(() => this.userService.loadUsers().pipe(
      takeUntil(this.actions$.pipe(ofType(userListActions.loadUsersCancel))),
      map(users => userListActions.loadUsersSuccess({ users })),
      catchError(error => [userListActions.loadUsersFailure({ error })])
    ))
  ));

  loadUser = createEffect(() => this.actions$.pipe(ofType(userDetailActions.loadUser)).pipe(
    switchMap(({ id }) => this.userService.loadUser(id).pipe(
      takeUntil(this.actions$.pipe(ofType(userDetailActions.loadUserCancel))),
      map(user => userDetailActions.loadUserSuccess({ user })),
      catchError(error => [userDetailActions.loadUserFailure({ error })])
    ))
  ));

  constructor(
    private actions$: Actions,
    private userService: UserService,
  ) { }

}
