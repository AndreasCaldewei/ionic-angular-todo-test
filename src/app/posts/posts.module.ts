import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import {IonicModule} from "@ionic/angular";
import {HttpClientModule} from "@angular/common/http";
import {PostsService} from "./services/posts.service";
import {PostsComponent} from "./posts.component";


@NgModule({
  declarations: [
    PostsComponent
  ],
  imports: [
    CommonModule,

    IonicModule,
    HttpClientModule,
    PostsRoutingModule
  ],
  providers: [
      PostsService
  ]
})
export class PostsModule { }
