import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
@Component({
  selector: 'app-skill',
  imports: [CommonModule, NgCircleProgressModule],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.css'
})
export class SkillComponent {
  skills = [
    { name: 'Angular', value: 90 },
    { name: '.Net', value: 80 },
    { name: 'JavaScript', value: 70 },
    { name: 'Bootstrap CSS', value: 75 },
    { name: 'SQL', value: 60 },
    { name: 'GitHub', value: 30 },
    { name: 'Canva', value: 40 },
    { name: 'Figma', value: 80 },
    { name: 'Communication', value: 60 },
    { name: 'Teamwork and Collaboration', value: 70 },
    { name: 'Problem Solving', value: 75 },
    { name: 'Team Leadership', value: 99 },
    { name: 'Creativity', value: 85 },
    { name: 'Critical Thinking', value: 70 },



  ];
}
