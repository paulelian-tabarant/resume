/**
 * TypeScript interface for JSON Resume Schema v1.0.0
 * Based on the official specification: https://jsonresume.org/schema/
 */

export interface Resume {
    /** Link to the version of the schema that can validate the resume */
    $schema?: string;
    basics?: ResumeBasics;
    work?: ResumeWork[];
    volunteer?: ResumeVolunteer[];
    education?: ResumeEducation[];
    /** Specify any awards you have received throughout your professional career */
    awards?: ResumeAward[];
    /** Specify any certificates you have received throughout your professional career */
    certificates?: ResumeCertificate[];
    /** Specify your publications through your career */
    publications?: ResumePublication[];
    /** List out your professional skill-set */
    skills?: ResumeSkill[];
    /** List any other languages you speak */
    languages?: ResumeLanguage[];
    interests?: ResumeInterest[];
    /** List references you have received */
    references?: ResumeReference[];
    /** Specify career projects */
    projects?: ResumeProject[];
    /** The schema version and any other tooling configuration lives here */
    meta?: ResumeMeta;
}

export interface ResumeLocation {
  address?: string;
  postalCode?: string;
  city?: string;
  countryCode?: string;
  region?: string;
}

export interface ResumeProfile {
  network?: string;
  username?: string;
  url?: string;
}

export interface ResumeBasics {
  name?: string;
  label?: string;
  image?: string;
  email?: string;
  phone?: string;
  url?: string;
  summary?: string;
  location?: ResumeLocation;
  profiles?: ResumeProfile[];
}

export interface ResumeWork {
  name?: string;
  location?: string;
  description?: string;
  position?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

export interface ResumeVolunteer {
  organization?: string;
  position?: string;
  url?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
}

export interface ResumeEducation {
  institution?: string;
  url?: string;
  area?: string;
  studyType?: string;
  startDate?: string;
  endDate?: string;
  score?: string;
  courses?: string[];
}

export interface ResumeAward {
  title?: string;
  date?: string;
  awarder?: string;
  summary?: string;
}

export interface ResumeCertificate {
  name?: string;
  date?: string;
  url?: string;
  issuer?: string;
}

export interface ResumePublication {
  name?: string;
  publisher?: string;
  releaseDate?: string;
  url?: string;
  summary?: string;
}

export interface ResumeSkill {
  name?: string;
  level?: string;
  keywords?: string[];
}

export interface ResumeLanguage {
  language?: string;
  fluency?: string;
}

export interface ResumeInterest {
  name?: string;
  keywords?: string[];
}

export interface ResumeReference {
  name?: string;
  reference?: string;
}

export interface ResumeProject {
  name?: string;
  description?: string;
  highlights?: string[];
  keywords?: string[];
  startDate?: string;
  endDate?: string;
  url?: string;
  roles?: string[];
  entity?: string;
  type?: string;
}

export interface ResumeMeta {
  canonical?: string;
  version?: string;
  lastModified?: string;
}

export default Resume;
