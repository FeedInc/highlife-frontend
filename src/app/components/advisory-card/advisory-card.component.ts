import { Component, OnInit } from '@angular/core';
import { Advisories } from 'src/app/models/advisories';
import { AdvisoriesService } from 'src/app/services/advisories/advisories.service';
@Component({
  selector: 'app-advisory-card',
  templateUrl: './advisory-card.component.html',
  styleUrls: ['./advisory-card.component.scss']
})
export class AdvisoryCardComponent implements OnInit {

  advisories:Advisories[];

  constructor(private OffersService: AdvisoriesService) { 
    this.advisories = [];
  }

  getAllOffers() {
    this.OffersService.getAll().subscribe((response: any) => {
      this.advisories = response;
    })
  }

  ngOnInit(): void {
  }
  
}
