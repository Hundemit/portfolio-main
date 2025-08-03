import { CONTACT_INFO } from "./contact-info";
import { EDUCATION } from "./education";
import { PERSONAL_INFO } from "./personal-info";
import { PROJECTS } from "./projects";
import { SKILLS_AND_NAVIGATION } from "./skills-and-navigation";
import { WORK_EXPERIENCE } from "./work-experience";

export const DATA = {
  personal: PERSONAL_INFO,
  skills: SKILLS_AND_NAVIGATION,
  contact: CONTACT_INFO,
  work: WORK_EXPERIENCE,
  education: EDUCATION,
  projects: PROJECTS,
} as const;
