export interface OurTeamDataRes {
  data: MetaData[];
}

export interface MetaData {
  attributes: Attributes;
  id: string;
  type: string;
}

export interface Attributes {
  memberCards: MemberCards;
  title: string;
}

export interface MemberCards {
  first: TeamMemberRes;
  second: TeamMemberRes;
  third: TeamMemberRes;
}

export interface TeamMemberRes {
  block: TeamMemberDetails;
  imageUrl: {
    w200: string;
    w400: string;
  };
}

export interface TeamMemberDetails {
  description: string;
  link: string;
  text: string;
  title: string;
}

export interface TeamMember {
  name: string;
  position: string;
  tel: string;
  email: string;
  images: {
    w200: string;
    w400: string
  };
}

export interface OurTeamModuleState {
  teamMembers: TeamMember[];
}
