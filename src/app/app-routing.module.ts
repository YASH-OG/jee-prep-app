import { NgModule } from '@angular/core'
import { Routes } from '@angular/router'
import { NativeScriptRouterModule } from '@nativescript/angular'

import { TopicsComponent } from './topics/topics.component'
import { FlashcardsComponent } from './flashcards/flashcards.component'
import { McqComponent } from './mcq/mcq.component'

const routes: Routes = [
  { path: '', redirectTo: '/topics', pathMatch: 'full' },
  { path: 'topics', component: TopicsComponent },
  { path: 'flashcards/:topicId', component: FlashcardsComponent },
  { path: 'mcq/:topicId', component: McqComponent },
]

@NgModule({
  imports: [NativeScriptRouterModule.forRoot(routes)],
  exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}