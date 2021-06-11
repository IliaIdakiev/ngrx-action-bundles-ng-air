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
    this.userListModel.actions.listen.loadUsers$.pipe(mapTo(true)),
    this.userListModel.actions.listen.loadUsersSuccess$.pipe(mapTo(false)),
    this.userListModel.actions.listen.loadUsersFailure$.pipe(mapTo(false))
  );

  users$ = this.userListModel.selectors.userList$;

  constructor(private userListModel: UserListModel) {
    this.userListModel.actions.dispatch.loadUsers();
  }

  reloadUsers(): void {
    this.userListModel.actions.dispatch.loadUsers();
  }

  ngOnDestroy() {
    this.userListModel.actions.dispatch.loadUsersCancel();
  }
}
