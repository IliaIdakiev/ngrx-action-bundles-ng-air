import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { DetailComponent } from './detail/detail.component';
import { StoreModule } from '@ngrx/store';
import { userModuleStoreName, userReducers } from './+store/reducers';
import { UserModuleEffects } from './+store/effects';
import { EffectsModule } from '@ngrx/effects';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    StoreModule.forFeature(
      userModuleStoreName,
      userReducers
    ),
    EffectsModule.forFeature([
      UserModuleEffects
    ]),
  ]
})
export class UserModule { }
