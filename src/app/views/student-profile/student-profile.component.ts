import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.scss']
})
export class StudentProfileComponent implements OnInit {
  studentId!: string;
  constructor(private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.getUserId();
  }

  getUserId() {
    this.route.paramMap.subscribe(params =>
      this.studentId = String(params.get("studentId"))
    );
  }

}
