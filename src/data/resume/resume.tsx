import { EDUCATION } from "./education";
import { NAVIGATION } from "./navigation";
import { PROFILE } from "./profile";
import { SKILLS } from "./skills";
import { WORK_EXPERIENCE } from "./work-experience";

export const DATA = {
  personal: PROFILE,
  skills: SKILLS,
  navigation: NAVIGATION,
  work: WORK_EXPERIENCE,
  education: EDUCATION,
} as const;
