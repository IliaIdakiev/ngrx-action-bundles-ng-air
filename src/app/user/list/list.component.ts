import { Component, OnDestroy } from '@angular/core';
import { merge } from 'rxjs';
import { mapTo } from 'rxjs/operators';
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
  );

  users$ = this.userListModel.users$;

  constructor(private userListModel: UserListModel) {
    this.userListModel.loadUsers();
  }

  reloadUsers(): void {
    this.userListModel.loadUsers();
  }

  ngOnDestroy() {
    this.userListModel.loadUsersClear();
  }
}
