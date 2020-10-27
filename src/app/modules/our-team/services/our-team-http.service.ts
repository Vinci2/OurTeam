import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { OurTeamDataRes } from '../models/our-team.models';

@Injectable({ providedIn: 'root' })
export class OurTeamHttpService {
  constructor(private httpClient: HttpClient) { }

  public getOurTeamData(): Observable<OurTeamDataRes> {
    return this.httpClient.get<OurTeamDataRes>('https://cobiro-website-builder.s3-eu-west-1.amazonaws.com/task/index.json');
  }
}
