export interface JoinFormValues {
  name: string;
  email: string;
  phone: string;
  socialHandle: string;
  course: string;
  year: string;
  primarySkill: string;
  secondarySkills: string[];
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
