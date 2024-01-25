import React from "react";
import {
  ExpandableInfosType,
  IProfileContext,
  IPWA,
  ShortInfosType,
} from "../store/types";

export const CORS_MODE = "cors";
export const TOAST_POSITION = "top-center";
export const MESSAGES = {
  genericError: "Something went wrong!",
};

export const SHORT_INFOS: ShortInfosType[] = [
  "client",
  "duration",
  "role",
  "softwareTech",
];
export const EXPANDABLE_INFOS: ExpandableInfosType[] = ["description"];
export const LINKS = {
  NPM_PROFILE_COMPONENT:
    "https://www.npmjs.com/package/react-profile-component",
};

export const DEFAULT_PWA: IPWA = {
  messages: {
    install: "",
    yes: "",
    no: "",
    open: "",
    relatedApp: "",
  },
  bannerExpiryTime: 0,
};

export const DEFAULT_PROFILE_CONTEXT: IProfileContext = {
  data: {
    labels: {},
    header: {
      shortDesc: "",
      name: "",
      currentJobRole: "",
    },
    forms: {
      contactForm: {
        header: "",
        transformFields: [],
        key: "",
        defaultMaxLength: 20,
        actionButtonLabel: "",
        label: {},
        statusMessages: {
          success: "",
          error: "",
          form_fill: "",
          sending: "",
          offline: "",
          review: "",
        },
        messages: {
          retry: "",
          mandatoryError: "",
        },
        name: "",
        fields: [],
      },
    },
    sections: {
      aboutMe: {
        title: "",
        info: "",
      },
      details: {
        title: "",
        info: [],
      },
      skills: {
        title: "",
        info: [],
      },
      experiences: {
        title: "",
        info: [],
      },
      education: {
        title: "",
        info: "",
      },
      links: {
        title: "",
        info: [],
      },
      openSourceProjects: {
        title: "",
        info: [],
      },
    },
    download: {
      type: "",
      staticFileUrl: "",
      download: {
        message: "",
        icon: "",
      },
      downloading: {
        message: "",
        icon: "",
      },
      downloaded: {
        message: "",
        icon: "",
      },
    },
  },
  isDarkMode: false,
  showComponentLibUrl: true,
  refs: {
    homeRef: React.createRef(),
    skillsRef: React.createRef(),
    experienceRef: React.createRef(),
    educationRef: React.createRef(),
    contactRef: React.createRef(),
    openSourceRef: React.createRef(),
  },
  deviceConfig: {
    browserName: "",
    osName: "",
    os: [],
    browsers: [],
  },
  appVersion: "",
  environment: "development",
  preloadedAssets: [],
  preloadedFiles: [],
  preloadSrcList: [],
  currentSection: "about",
  isExport: false,
  isDownloading: false,
  isMobile: false,
  isInstallBannerOpen: false,
  hasDownloadedProfile: false,
  isContactFormOpen: false,
  setIsContactFormOpen: () => {},
  serverConfig: {
    webServerConfig: {
      devWebUrl: "",
      prodWebUrl: "",
    },
    cmsServerConfig: {
      devCMSUrl: "",
      prodCMSUrl: "",
    },
  },
  emailJsConfig: {
    serviceId: "",
    templateId: "",
    publicKey: "",
  },
};

export const LABEL_TEXT: Record<string, string> = {
  client: "Client",
  duration: "Duration",
  description: "Description",
  responsibilities: "Responsibilities",
  softwareTech: "Software/Technologies",
  role: "Role",
  retry: "Retry",
  close: "Close",
  developedUsing:
    "Developed using <a href='{0}' target='_blank'> react-profile-component </a>",
};

export const SECTIONS = {
  COMBINED: "profile-sections",
  HEADER: "header",
  ABOUT_ME: "aboutMe",
  DETAILS: "details",
  EDUCATION: "education",
  ORGANIZATIONS: "organizations",
  SKILLS: "skills",
  EXPERIENCE: "experiences",
  LINKS: "links",
  DOWNLOAD: "download",
  RESUME_EXPERIENCES: "resume-experiences",
  OPEN_SOURCE_PROJECTS: "openSourceProjects",
};

export const FORMS = {
  CONTACT_FORM: "contact-form",
};

export const SECTION_ORDER_DISPLAY: Record<
  string,
  { order: number; display?: boolean }
> = {
  ABOUTME: { order: 1 },
  EDUCATION: { order: 4 },
  ORGANIZATIONS: { order: 3, display: false },
  SKILLS: { order: 2 },
  EXPERIENCES: { order: 5 },
  CONTACT: { order: 7 },
  OPENSOURCEPROJECTS: { order: 6 },
};

export const LABELS = {
  PROJECTS: "Projects",
  CLIENTS: "Clients",
  RESPONSIBILITIES: "Responsibilities",
  CLIENT: "Client",
};

export const EXPERIENCE_TYPES = {
  CURRENT: "Current",
  PREVIOUS: "Previous",
};

export const FIELD_TYPES = {
  TEXT: "text",
  MOBILE: "mobile",
  CHECKBOX: "checkbox",
  TEXTAREA: "textarea",
};

export const FIELD_SUB_TYPES = {
  EMAIL: "email",
};

export const DEFAULT_PROFILE_CONFIG_DATA = {
  profileSections: {
    header: DEFAULT_PROFILE_CONTEXT.data.header,
    aboutMe: DEFAULT_PROFILE_CONTEXT.data.sections.aboutMe,
    education: DEFAULT_PROFILE_CONTEXT.data.sections.education,
    details: DEFAULT_PROFILE_CONTEXT.data.sections.details,
    experiences: DEFAULT_PROFILE_CONTEXT.data.sections.experiences,
  },
  links: DEFAULT_PROFILE_CONTEXT.data.sections.links,
  download: DEFAULT_PROFILE_CONTEXT.data.download,
  skills: DEFAULT_PROFILE_CONTEXT.data.sections.skills,
  contactForm: DEFAULT_PROFILE_CONTEXT.data.forms.contactForm,
  profileLabels: DEFAULT_PROFILE_CONTEXT.data.labels,
};

export const CONFIG_REF_INFO = {
  ref: "config.json",
  name: "config",
};

export const CONFIG_TYPES = {
  APPCONFIG: "appConfig",
  PROFILECONFIG: "profileConfig",
};

export const SERVER_FILES_LOC = "/files";
export const YES = "Yes";
export const NO = "No";
