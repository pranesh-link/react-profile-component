import { PWAWrapper } from "../../common/Elements";
import {
  getLocalStorage,
  getWebUrl,
  isBannerHidden,
  isSupportedBrowserAndOS,
  setLocalStorage,
} from "../../common/Utils";
import { ForwardedRef, forwardRef, useEffect, useMemo } from "react";
import {
  Environment,
  IDeviceConfig,
  IPWA,
  IWebServerConfig,
} from "../../store/types";
import { CloseIcon } from "../svg";
import classNames from "classnames";

interface PWABannerProps {
  pwa: IPWA;
  isMobile: boolean;
  hasPWAInstalled: boolean;
  isInstallPromptSupported: boolean;
  isInstallBannerOpen: boolean;
  isStandalone: boolean;
  isWebWithPWA: boolean;
  config: IDeviceConfig;
  environment: Environment;
  webServerConfig: IWebServerConfig;
  setIsInstallBannerOpen: (display: boolean) => void;
  onClickInstall: Function;
}
export const PWABanner = forwardRef<HTMLDivElement, PWABannerProps>(function (
  props: PWABannerProps,
  ref: ForwardedRef<any>
) {
  const {
    isMobile,
    hasPWAInstalled,
    onClickInstall,
    isInstallPromptSupported,
    isInstallBannerOpen,
    setIsInstallBannerOpen,
    isStandalone,
    environment,
    isWebWithPWA,
    pwa: { messages, bannerExpiryTime },
    config: { osName, browserName, browsers, os },
    webServerConfig,
  } = props;

  const closeInstallBanner = () => {
    const expiry = new Date().getTime() + bannerExpiryTime * 1000;
    setIsInstallBannerOpen(false);
    setLocalStorage("isInstallBannerOpen", false);
    setLocalStorage("pwaBannerHideTime", expiry);
  };

  const NotNowButton = (
    <button className="not-now" onClick={closeInstallBanner}>
      {isMobile ? <CloseIcon /> : <>{messages.no}</>}
    </button>
  );

  const PWAInstallMessage = (
    <p>{isWebWithPWA ? messages.relatedApp : messages.install}</p>
  );

  const InstallButton = (
    <button
      className="install"
      onClick={async () => {
        if (!isWebWithPWA) {
          await onClickInstall();
        }
      }}
    >
      {isWebWithPWA ? (
        <a
          href={getWebUrl(environment, webServerConfig)}
          target="_blank"
          rel="noreferrer"
        >
          {messages.open}
        </a>
      ) : (
        messages.yes
      )}
    </button>
  );

  const hasPWASupport = useMemo(() => {
    return isSupportedBrowserAndOS(browsers, os, browserName, osName);
  }, [browsers, os, browserName, osName]);

  useEffect(() => {
    // Set install banner based on local storage key availability
    const openBanner =
      getLocalStorage("isInstallBannerOpen") === null
        ? isInstallPromptSupported
        : (isInstallPromptSupported &&
            isInstallBannerOpen &&
            !hasPWAInstalled) ||
          !isBannerHidden(getLocalStorage("pwaBannerHideTime") || 0);
    setLocalStorage("isInstallBannerOpen", openBanner);
    setIsInstallBannerOpen(openBanner);
  }, [
    hasPWAInstalled,
    isInstallBannerOpen,
    isInstallPromptSupported,
    setIsInstallBannerOpen,
  ]);
  return !isStandalone && isInstallPromptSupported && isInstallBannerOpen ? (
    <PWAWrapper
      ref={ref}
      top="0"
      alignItems="center"
      justifyContent="space-between"
      className={classNames({ hide: isMobile ? !hasPWASupport : false })}
    >
      {NotNowButton}
      {PWAInstallMessage}
      {InstallButton}
    </PWAWrapper>
  ) : null;
});
