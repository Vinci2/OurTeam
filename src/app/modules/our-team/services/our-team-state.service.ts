import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { OurTeamDataRes, OurTeamModuleState, TeamMember } from '../models/our-team.models';
import { OurTeamHttpService } from './our-team-http.service';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OurTeamStateService {

  private rootState$: BehaviorSubject<OurTeamModuleState> = new BehaviorSubject<OurTeamModuleState>({} as OurTeamModuleState);
  private state: OurTeamModuleState = {} as OurTeamModuleState;
  public teamMembers$ = this.rootState$.pipe(
    map((state => state.teamMembers)));

  constructor(private ourTeamHttpService: OurTeamHttpService) { }

  public getOurTeamData(): void {
    this.ourTeamHttpService.getOurTeamData().subscribe((data) => {
      this.setState(this.computeModuleState(data));
    });
  }

  private computeModuleState(ourTeamRes: OurTeamDataRes): OurTeamModuleState {
    const memberCard = ourTeamRes.data[0].attributes.memberCards;
    const teamMembers = Object.keys(memberCard)
      .map((key) => this.computeTeamMember(memberCard[key]));
    return {
      teamMembers
    };
  }

  private computeTeamMember({ block, imageUrl }): TeamMember {
    return {
      name: block.title,
      position: block.description,
      email: block.link,
      tel: block.text,
      images: {
        ...imageUrl
      }
    };
  }

  private setState(newState: OurTeamModuleState): void {
    this.state = newState;
    this.rootState$.next(this.state);
  }
}
