import { Component, OnInit } from '@angular/core';
import { OurTeamStateService } from '../../services/our-team-state.service';

@Component({
  selector: 'app-our-team-container',
  templateUrl: './our-team-container.component.html',
  styleUrls: ['./our-team-container.component.scss']
})
export class OurTeamContainerComponent implements OnInit {

  constructor(public ourTeamStateService: OurTeamStateService) { }

  ngOnInit() {
    this.ourTeamStateService.getOurTeamData();
  }
}
