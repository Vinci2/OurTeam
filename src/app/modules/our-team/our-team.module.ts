import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OurTeamContainerComponent } from './containers/our-team-container/our-team-container.component';
import { MemberCardComponent } from './components/member-card/member-card.component';



@NgModule({
  declarations: [OurTeamContainerComponent, MemberCardComponent],
  imports: [
    CommonModule
  ],
  exports: [OurTeamContainerComponent]
})
export class OurTeamModule { }
