import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterExtensions } from '@nativescript/angular';

@Component({
  selector: 'ns-mcq',
  templateUrl: './mcq.component.html',
})
export class McqComponent implements OnInit {
  topicId: number;
  mcqs = [
    {
      id: 1,
      question: 'Which of the following is NOT a fundamental force in nature?',
      options: ['Gravity', 'Electromagnetic force', 'Strong nuclear force', 'Centrifugal force'],
      correctAnswer: 3
    },
    {
      id: 2,
      question: 'What is the SI unit of electric current?',
      options: ['Volt', 'Ampere', 'Ohm', 'Watt'],
      correctAnswer: 1
    },
    {
      id: 3,
      question: 'Which law of thermodynamics states that energy cannot be created or destroyed?',
      options: ['Zeroth law', 'First law', 'Second law', 'Third law'],
      correctAnswer: 1
    }
  ];
  currentIndex = 0;
  selectedAnswer: number | null = null;
  showResult = false;

  constructor(
    private route: ActivatedRoute,
    private routerExtensions: RouterExtensions
  ) {}

  ngOnInit() {
    this.topicId = +this.route.snapshot.params.topicId;
  }

  selectAnswer(index: number) {
    this.selectedAnswer = index;
  }

  submitAnswer() {
    this.showResult = true;
  }

  nextQuestion() {
    if (this.currentIndex < this.mcqs.length - 1) {
      this.currentIndex++;
      this.selectedAnswer = null;
      this.showResult = false;
    } else {
      // End of MCQs, navigate back to topics
      this.routerExtensions.navigate(['/topics']);
    }
  }
}