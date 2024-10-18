import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-flashcards',
  templateUrl: './flashcards.component.html',
})
export class FlashcardsComponent implements OnInit {
  topicId: number;
  flashcards = [
    { id: 1, question: 'What is Newton\'s First Law?', answer: 'An object at rest stays at rest and an object in motion stays in motion with the same speed and in the same direction unless acted upon by an unbalanced force.' },
    { id: 2, question: 'What is the SI unit of force?', answer: 'Newton (N)' },
    { id: 3, question: 'What is the formula for kinetic energy?', answer: 'KE = (1/2)mv^2, where m is mass and v is velocity' },
  ];
  currentIndex = 0;
  showAnswer = false;

  constructor(
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit() {
    this.topicId = +this.route.snapshot.params.topicId;
  }

  toggleAnswer() {
    this.showAnswer = !this.showAnswer;
  }

  nextCard() {
    if (this.currentIndex < this.flashcards.length - 1) {
      this.currentIndex++;
      this.showAnswer = false;
    }
  }

  previousCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.showAnswer = false;
    }
  }

  goToMCQ() {
    this.routerExtensions.navigate(['/mcq', this.topicId]);
  }
}