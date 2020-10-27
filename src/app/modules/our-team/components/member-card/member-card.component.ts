import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { TeamMember } from '../../models/our-team.models';

@Component({
  selector: 'app-member-card',
  templateUrl: './member-card.component.html',
  styleUrls: ['./member-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MemberCardComponent implements OnInit {
  @Input() member: TeamMember;

  constructor() { }

  ngOnInit() {
  }

}
