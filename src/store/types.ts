export interface IProfileData {
  header: IHeader;
  sections: ISections;
  download: DownloadType;
  forms: FormsType;
}

export type InfoType =
  | string
  | (ISkill | IOrgProject | ILink | IDetailInfo | IExperience | IResumeOrg)[];

export interface ISectionInfo {
  title: string;
  ref?: string;
  icon?: string;
  pdfExportIcon?: string;
}

export interface IAboutMeInfo extends ISectionInfo {
  info: string;
}

export interface IDetailInfo extends ISectionInfo {
  info: {
    id: AboutMeDetailType;
    label: string;
    info: string;
    canCopy?: boolean;
  }[];
}
export interface ISkill {
  label: string;
  star: number;
}

export interface ISkillInfo extends ISectionInfo {
  info: ISkill[];
}

export interface IExperience {
  name: string;
  type: string;
  from: string;
  to?: string;
  designation: string;
  responsibilities: string;
  projects: IProjectExperience[];
}

export interface IExperienceInfo extends ISectionInfo {
  info: IExperience[];
}

export interface IEducationInfo extends IAboutMeInfo {}

export interface ILink {
  link: string;
  label: LinkType;
  display?: boolean;
}
export interface ILinkInfo extends ISectionInfo {
  info: ILink[];
}
export interface ISections {
  aboutMe: IAboutMeInfo;
  details: IDetailInfo;
  skills: ISkillInfo;
  experiences: IExperienceInfo;
  education: IEducationInfo;
  links: ILinkInfo;
}
export type FormType = "contactForm";

export interface ILabelValue {
  label: string;
  value: string;
}
export interface IFieldErrorMessages {
  regexError: string;
  fieldError: string;
}

export interface IFormMessages {
  mandatoryError: string;
  retry: string;
}
export interface IFormField {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  required?: boolean;
  subType?: string;
  type: string;
  maxLength?: number;
  regex?: string;
  parentField?: string;
  childFields?: string[];
  messages?: IFieldErrorMessages;
  values?: ILabelValue[];
}

export enum CONTACT_FORM_STATUS {
  FORM_FILL = "form_fill",
  SENDING = "sending",
  SUCCESS = "success",
  ERROR = "error",
  REVIEW = "review",
  OFFLINE = "offline",
}

export type MailStatusType = Record<CONTACT_FORM_STATUS, string>;
export interface IFormInfo {
  name: string;
  header: string;
  key: string;
  actionButtonLabel: string;
  defaultMaxLength: number;
  statusMessages: MailStatusType;
  label: Record<string, string>;
  transformFields: {
    id: string;
    transform: string;
  }[];
  messages: IFormMessages;
  fields: IFormField[];
}

export type FormsType = {
  [key in FormType]: IFormInfo;
};
export type SectionsType = {
  [key in ProfileSectionType]: ISectionInfo;
};

export interface IExperienceJsonInfo {
  ref: string;
  name: string;
}

export interface IHeader {
  shortDesc: string;
  name: string;
  currentJobRole: string;
}

export interface IResumeExperience {
  title: string;
  info: IResumeOrg[];
}

export interface IResumeOrg {
  organization: string;
  responsibilities: string;
  designation: string;
  duration: string;
  projects: {
    title: string;
    client: string;
    links: string[];
  }[];
}

type DownloadStages = "download" | "downloading" | "downloaded";

export type DownloadType = {
  [key in DownloadStages]: {
    disabled?: boolean;
    message: string;
    icon: string;
  };
} & { type: string; staticFileUrl: string };

export interface IPWA {
  messages: {
    install: string;
    yes: string;
    no: string;
    open: string;
    relatedApp: string;
  };
  bannerExpiryTime: number;
}

export type ShortInfosType = "client" | "duration" | "role" | "softwareTech";
export type ExpandableInfosType = "description";
export interface IProjectExperience {
  title: string;
  shortTitle: string;
  client: string;
  duration: string;
  role: string;
  softwareTech: string;
  description: string;
  links: string[];
}

export type AboutMeDetailType = "email" | "mobile" | "location";

export type LinkType =
  | "whatsApp"
  | "github"
  | "facebook"
  | "linkedIn"
  | "twitter";

export interface IOrgProject {
  organization: string;
  projects: IProject[];
}

export interface IProject {
  [key: string]: {
    info: string;
    requiresShowHide?: boolean;
  };
}

export type ProfileSectionType =
  | "aboutMe"
  | "details"
  | "skills"
  | "experiences"
  | "education"
  | "links";

export type RefTypes =
  | "homeRef"
  | "skillsRef"
  | "experienceRef"
  | "educationRef"
  | "contactRef";

export interface IPreloadedFile {
  id: string;
  file: string;
}

export interface IPreloadSrc {
  id: string;
  type: string;
  fileName: string;
  fileLocation: string;
}

export interface IDeviceConfig {
  browsers: string[];
  os: string[];
  osName: string;
  browserName: string;
}

export interface IPreloadedAsset {
  id: string;
  image: string;
}

export interface IWebServerConfig {
  devWebUrl: string;
  prodWebUrl: string;
}

export interface ICMSServerConfig {
  devCMSUrl: string;
  prodCMSUrl: string;
}

export interface IServerConfig {
  webServerConfig: IWebServerConfig;
  cmsServerConfig: ICMSServerConfig;
}

export interface IEmailJsConfig {
  serviceId: string;
  templateId: string;
  publicKey: string;
}
export interface IProfileContext {
  data: IProfileData;
  refs: {
    [key in RefTypes]: React.MutableRefObject<any>;
  };
  deviceConfig: IDeviceConfig;
  preloadedFiles: IPreloadedFile[];
  preloadSrcList: IPreloadSrc[];
  preloadedAssets: IPreloadedAsset[];
  currentSection: string;
  appVersion: string;
  environment: Environment;
  isDarkMode: boolean;
  isExport?: boolean;
  isDownloading?: boolean;
  isMobile: boolean;
  showComponentLibUrl: boolean;
  isInstallBannerOpen: boolean;
  hasDownloadedProfile?: boolean;
  isContactFormOpen: boolean;
  setIsContactFormOpen: Function;
  serverConfig: IServerConfig;
  emailJsConfig: IEmailJsConfig;
}

export type ContactFormFields =
  | "userName"
  | "userMobile"
  | "userEmail"
  | "message"
  | "userSocialMessengers";
export type ContactFormData = {
  [key in ContactFormFields]: string | Record<string, boolean>;
};

export type ContactFormValid = Record<string, boolean>;
export type ContactFormError = Record<string, string>;

export type ContactFormFieldData = string | Record<string, boolean>;
export type Environment = "development" | "production" | "test";
