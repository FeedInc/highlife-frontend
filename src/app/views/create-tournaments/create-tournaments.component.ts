import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {Tournaments} from "../../models/tournaments"
import {TournamentsService} from "../../services/tournaments/tournaments.service";
import {NgForm} from "@angular/forms";
import {MatPaginator} from "@angular/material/paginator";
import {MatSort} from "@angular/material/sort";
// @ts-ignore
import * as _ from "lodash";
@Component({
  selector: 'app-create-tournaments',
  templateUrl: './create-tournaments.component.html',
  styleUrls: ['./create-tournaments.component.scss']
})
export class CreateTournamentsComponent implements OnInit, AfterViewInit {

  tournamentData: Tournaments;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['id', 'name','game','gameType' ,'maxTeams', 'date','address','actions']

  @ViewChild('tournamentForm', {static: false})
  tournamentForm!: NgForm;

  @ViewChild(MatPaginator, {static: true})
  paginator!: MatPaginator;

  @ViewChild(MatSort)
  sort!: MatSort;

  isEditMode = false;

  constructor(private studentsService: TournamentsService) {
    this.tournamentData = {} as Tournaments;
    this.dataSource = new MatTableDataSource<any>();
  }

  ngOnInit(): void {
    this.getAllStudents();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getAllStudents() {
    this.studentsService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  editItem(element: Tournaments) {
    this.tournamentData = _.cloneDeep(element);
    this.isEditMode = true;
  }

  cancelEdit() {
    this.isEditMode = false;
    this.tournamentForm.resetForm();
  }

  deleteItem(id: number) {
    this.studentsService.delete(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((o: Tournaments) => {
        return o.id !== id ? o : false;
      });
    });
    console.log(this.dataSource.data);
  }

  addStudent() {
    this.tournamentData.id = 0;
    this.studentsService.create(this.tournamentData).subscribe((response: any) => {
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any) => { return o; });
    });
  }

  updateStudent() {
    this.studentsService.update(this.tournamentData.id, this.tournamentData).subscribe((response: any) => {
      this.dataSource.data = this.dataSource.data.map((o: Tournaments) => {
        if (o.id == response.id) {
          o = response;
        }
        return o;
      });
    });

  }
  onSubmit() {
    if (this.tournamentForm.form.valid) {
      console.log('valid');
      if (this.isEditMode) {
        console.log('about to update');
        this.updateStudent();
      } else {
        console.log('about to create');
        this.addStudent();
      }
      this.cancelEdit();
    } else {
      console.log('Invalid data');
    }
  }
}
