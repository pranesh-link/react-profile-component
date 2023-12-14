import { CORS_MODE, SERVER_FILES_LOC } from "./constants";
import {
  IDetailInfo,
  ILink,
  InfoType,
  IExperience,
  IOrgProject,
  IResumeOrg,
  ISkill,
  IPreloadedAsset,
  IHeader,
  ISectionInfo,
  DownloadType,
  IFormInfo,
  IWebServerConfig,
  ICMSServerConfig,
  Environment,
} from "../store/types";

export const valueIsString = (item: InfoType): item is string => {
  return typeof item === "string";
};

export const valueIsArray = (item: InfoType): item is any[] => {
  return Array.isArray(item);
};

export const valueIsOrgProjectInfo = (
  item: InfoType,
): item is IOrgProject[] => {
  return (item as IOrgProject[])[0].organization !== undefined;
};

export const valueIsResumeOrgInfo = (item: InfoType): item is IResumeOrg[] => {
  return (item as IResumeOrg[])[0].organization !== undefined;
};
export const valueIsSkillInfo = (item: InfoType): item is ISkill[] => {
  return (item as ISkill[])[0].label !== undefined;
};

export const valueIsDetailInfo = (item: InfoType): item is IDetailInfo[] => {
  return (item as IDetailInfo[])[0].label !== undefined;
};

export const valueIsLinkInfo = (item: InfoType): item is ILink[] => {
  return (item as ILink[])[0].icon !== undefined;
};

export const valueIsExperienceInfo = (
  item: InfoType,
): item is IExperience[] => {
  return (item as IExperience[])[0].name !== undefined;
};
export const lowercase = (str: string) => str.toLowerCase().replace(/ /g, "");

export const uppercase = (str: string) => str.toUpperCase().replace(/ /g, "");

export const replaceWith = (
  mainStr: string,
  replaceChar1: string,
  replaceChar2: string,
) => mainStr.replace(replaceChar1, replaceChar2);

export const getHref = (label: string, info: string) => {
  switch (label) {
    case "mobile":
      return `tel:${info}`;
    case "e-mail":
      return `mailto:${info}`;
  }
  return "";
};

export const setLocalStorage = (key: string, value: any) =>
  localStorage.setItem(key, JSON.stringify({ value }));

export const getLocalStorage = (key: string) => {
  const itemStr = localStorage.getItem(key);

  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  return item.value;
};

export const clearLocalStorage = (key?: string) => {
  key ? localStorage.removeItem(key) : localStorage.clear();
};

export const isBannerHidden = (hideTime: number) => {
  if (hideTime > 0) {
    const isHideTime = new Date().getTime() < hideTime;
    if (!isHideTime) {
      localStorage.removeItem("pwaBannerHideTime");
    }
    return new Date().getTime() < hideTime;
  }
  return false;
};

export const isNetworkOnline = () => navigator.onLine;

export const getPdfFile = async (url: string) => {
  let hasError = false;
  let objectUrl = "";
  try {
    if (url) {
      const response = await fetch(url, {
        mode: CORS_MODE,
      });
      const blob = await response.blob();
      objectUrl = URL.createObjectURL(blob);
    } else {
      hasError = true;
    }
  } catch (e) {
    hasError = true;
  }
  return { objectUrl, hasError };
};

export const getPdfBlob = async (url: string) => getPdfFile(url);

export const isEmptyObject = (obj: Object) => Object.keys(obj).length === 0;

export const isStringBooleanRecord = (
  val: any,
): val is Record<string, boolean> =>
  typeof val[Object.keys(val)[0]] === "boolean" ||
  (typeof val === "object" && Object.keys(val).length === 0);

export const isObject = (val: any): val is Object => typeof val === "object";

export const isString = (val: any): val is string => typeof val === "string";

export const getObjectKeyValuesByIndex = (obj: Object, index: number) => [
  Object.keys(obj)[index],
  Object.values(obj)[index],
];

export const getFilteredLinks = (info: ILink[]) =>
  info.filter(link => link?.display !== false);

export const getRemainingCharacters = (fieldStr: string, maxLength: number) =>
  maxLength - fieldStr.length;

export const isSupportedBrowserAndOS = (
  browsers: string[],
  os: string[],
  browserName: string,
  osName: string,
) => {
  const isSupportedBrowser = browsers.indexOf(browserName) > -1;
  const isSupportedOS = os.indexOf(osName) > -1;
  return isSupportedOS && isSupportedBrowser;
};

export const toDataURL = async (url: string, imageId: string) => {
  const response = await fetch(url);
  const blobResponse = await response.blob();
  return await new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve({ id: imageId, image: reader.result });
    reader.onerror = reject;
    reader.readAsDataURL(blobResponse);
  });
};

export const getWebUrl = (env: Environment, webConfig: IWebServerConfig) =>
  env === "development" ? webConfig.devWebUrl : webConfig.prodWebUrl;

export const getServerBaseUrl = (
  env: Environment,
  cmsConfig: ICMSServerConfig,
) => (env === "development" ? cmsConfig.devCMSUrl : cmsConfig.prodCMSUrl);

export const getIconUrl = (
  url: string,
  env: Environment,
  cmsServerConfig: ICMSServerConfig,
) => `${getServerBaseUrl(env, cmsServerConfig)}/${url}`;

export const getIconUrlByExportFlag = (
  env: Environment,
  cmsServerConfig: ICMSServerConfig,
  iconUrl?: string,
  pdfExportIconUrl?: string,
  isExport?: boolean,
) =>
  isExport
    ? `${pdfExportIconUrl}?dummy=${Math.floor(Math.random() * 1000)}`
    : getIconUrl(iconUrl || "", env, cmsServerConfig);

export const getPdfUrl = (
  env: Environment,
  fileName: string,
  cmsServerConfig: ICMSServerConfig,
) => `${getServerBaseUrl(env, cmsServerConfig)}${SERVER_FILES_LOC}/${fileName}`;

export const getPreloadedAsset = (assets: IPreloadedAsset[], assetId: string) =>
  assets.find(item => item.id === assetId)?.image || "";

export const getJsonResponse = async (
  env: Environment,
  jsonToFetch: string,
  cmsServerConfig: ICMSServerConfig,
  data?: any,
) => {
  const JSON_BASE_URL = getServerBaseUrl(env, cmsServerConfig);
  let hasError = false;
  data = data || {};
  try {
    const url = `${JSON_BASE_URL}/${jsonToFetch}`;
    const response = await fetch(url, {
      mode: CORS_MODE,
    });
    data = await response.json();
  } catch (e) {
    hasError = true;
  }
  return { data, hasError };
};

export const getProfileJsonResponse = async (
  env: Environment,
  jsonToFetch: string,
  cmsServerConfig: ICMSServerConfig,
  data: IHeader | ISectionInfo | DownloadType | IFormInfo,
) => getJsonResponse(env, jsonToFetch, cmsServerConfig, data);
