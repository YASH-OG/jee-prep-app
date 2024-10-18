import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-topics',
  templateUrl: './topics.component.html',
})
export class TopicsComponent implements OnInit {
  topics = [
    { id: 1, name: 'Physics' },
    { id: 2, name: 'Chemistry' },
    { id: 3, name: 'Mathematics' },
  ];

  constructor(private routerExtensions: RouterExtensions) {}

  ngOnInit() {}

  onTopicTap(topicId: number) {
    this.routerExtensions.navigate(['/flashcards', topicId]);
  }
}