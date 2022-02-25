import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  Designation: string;
  Username: string;
  NumberOfTeamMembers: number;
  TotalCostOfAllProject: number;
  PendingTasks: number;
  UpComingProjects: number;

  ProjectCost: number;
  CurrentExpenditure: number;
  AvailableFunds: number;

  constructor() {}

  ngOnInit() {
    this.Designation = 'Team Leader';
    this.Username = 'Shivangi Mistry';
    this.NumberOfTeamMembers = 67;
    this.TotalCostOfAllProject = 6543200;
    this.PendingTasks = 543;
    this.ProjectCost = 700000;
    this.UpComingProjects = 15;
    this.CurrentExpenditure = 5000;
    this.AvailableFunds = 980000;
  }
}
