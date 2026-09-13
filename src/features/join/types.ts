export interface JoinFormValues {
  name: string;
  email: string;
  phone: string;
  socialHandle: string;
  course: string;
  year: string;
  accommodation: string;
  primarySkill: string;
  secondarySkills: string[];
  class12thPercentage: string;
  cgpa: string;
  backlogs: string;
  backlogCount: string;
  detention: string;
  aboutYou: string;
  whySocialz: string;
  workStyle: string;
  superpower: string;
}

export interface EncodedFile {
  name: string;
  type: string;
  data: string;
  size: number;
}
