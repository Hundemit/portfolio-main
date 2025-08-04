import { NAVIGATION } from "./navigation";
import { PROFILE } from "./profile";
import { SKILLS } from "./skills";
import { EXPERIENCE } from "./experience";

export const DATA = {
  personal: PROFILE,
  skills: SKILLS,
  navigation: NAVIGATION,
  experience: EXPERIENCE,
} as const;
