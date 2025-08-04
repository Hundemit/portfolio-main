import { CONTACT_INFO } from "./contact-info";
import { EDUCATION } from "./education";
import { NAVIGATION } from "./navigation";
import { PERSONAL_INFO } from "./personal-info";
import { SKILLS } from "./skills";
import { WORK_EXPERIENCE } from "./work-experience";

export const DATA = {
  personal: PERSONAL_INFO,
  skills: SKILLS,
  navigation: NAVIGATION,
  contact: CONTACT_INFO,
  work: WORK_EXPERIENCE,
  education: EDUCATION,
} as const;
