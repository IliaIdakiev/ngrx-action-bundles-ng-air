import { Component, OnDestroy } from '@angular/core';
import { merge } from 'rxjs';
import { filter, first, mapTo, shareReplay } from 'rxjs/operators';
import { UserListModel } from '../+store/models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnDestroy {

  isLoading$ = merge(
    [true],
    this.userListModel.loadUsers$.pipe(mapTo(true)),
    this.userListModel.loadUsersSuccess$.pipe(mapTo(false)),
    this.userListModel.loadUsersFailure$.pipe(mapTo(false))
  ).pipe(shareReplay(1));

  users$ = this.userListModel.users$;

  constructor(private userListModel: UserListModel) {
    this.userListModel.loadUsers();
  }

  reloadUsers(): void {
    this.userListModel.loadUsers();
  }

  ngOnDestroy() {
    this.isLoading$.pipe(first(), filter(val => !!val)).subscribe(() => {
      this.userListModel.loadUsersCancel();
    });
    this.userListModel.loadUsersClear();
  }
}
