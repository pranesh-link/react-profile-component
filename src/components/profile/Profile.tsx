import { HamBurgerMenu } from "./HamBurgerMenu";
import MenuBar from "./MenuBar";
import ProfileSections from "./ProfileSections";
import { ProfileProvider } from "../../store/context";
import {
  Environment,
  IDeviceConfig,
  IEmailJsConfig,
  IPreloadSrc,
  IPreloadedAsset,
  IPreloadedFile,
  IProfileData,
  IServerConfig,
} from "../../store/types";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Overlay } from "../../common/Elements";

interface ProfileProps {
  profileData: IProfileData;
  refs: {
    homeRef: React.MutableRefObject<any>;
    skillsRef: React.MutableRefObject<any>;
    experienceRef: React.MutableRefObject<any>;
    educationRef: React.MutableRefObject<any>;
    contactRef: React.MutableRefObject<any>;
    openSourceRef: React.MutableRefObject<any>;
  };
  preloadSrcList: IPreloadSrc[];
  preloadedFiles: IPreloadedFile[];
  preloadedAssets: IPreloadedAsset[];
  serverConfig: IServerConfig;
  emailJsConfig: IEmailJsConfig;
  appVersion: string;
  environment: Environment;
  isDarkMode: boolean;
  isDownloading: boolean;
  isMobile: boolean;
  isHamburgerMenuOpen: boolean;
  isInstallBannerOpen: boolean;
  isExport: boolean;
  hasPWAInstalled: boolean;
  showComponentLibUrl?: boolean;
  deviceConfig: IDeviceConfig;
  setIsDownloading: (isDownloading: boolean) => void;
  setIsHamburgerMenuOpen: (isHamburgerMenuOpen: boolean) => void;
  onInstallPWA: () => void;
}

export const Profile = (props: ProfileProps) => {
  const {
    profileData,
    refs: {
      homeRef,
      skillsRef,
      experienceRef,
      educationRef,
      contactRef,
      openSourceRef,
    },
    isDownloading,
    isMobile,
    isHamburgerMenuOpen,
    isInstallBannerOpen,
    isExport,
    hasPWAInstalled,
    setIsHamburgerMenuOpen,
    onInstallPWA,
    appVersion,
    environment,
    preloadSrcList,
    preloadedFiles,
    preloadedAssets,
    deviceConfig,
    serverConfig,
    emailJsConfig,
    isDarkMode,
    showComponentLibUrl = true,
  } = props;
  const [currentSection, setCurrentSection] = useState<string>("aboutMe");
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  let timer: NodeJS.Timeout;
  useEffect(() => {
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ProfileProvider
        value={{
          data: profileData,
          refs: {
            homeRef,
            skillsRef,
            experienceRef,
            educationRef,
            contactRef,
            openSourceRef,
          },
          isDarkMode,
          deviceConfig,
          appVersion,
          environment,
          currentSection,
          isExport,
          isDownloading,
          isMobile,
          isInstallBannerOpen,
          isContactFormOpen,
          preloadSrcList,
          preloadedFiles,
          preloadedAssets,
          serverConfig,
          emailJsConfig,
          showComponentLibUrl,
          setIsContactFormOpen,
        }}
      >
        <HamBurgerMenu
          isOpen={isHamburgerMenuOpen}
          hasPWAInstalled={hasPWAInstalled}
          setIsOpen={(isOpen) => setIsHamburgerMenuOpen(isOpen)}
          onMenuChange={(section) => setCurrentSection(section)}
          onInstallPWA={onInstallPWA}
        />
        {isMobile && <Swipe onTouchMove={() => setIsHamburgerMenuOpen(true)} />}
        <MenuBar onMenuChange={(section) => setCurrentSection(section)} />
        {!isHamburgerMenuOpen && (
          <>
            <Overlay
              background="#f0f0f0"
              height={15}
              bottom={isMobile ? "0" : "50"}
              opacity={0.9}
            />
            <Overlay
              background="#f0f0f0"
              height={15}
              bottom={isMobile ? "15" : "65"}
              opacity={0.6}
            />
          </>
        )}
        <ProfileSections />
      </ProfileProvider>
    </>
  );
};

const Swipe = styled.div`
  height: 100%;
  width: 60px;
  right: 0;
  position: fixed;
`;
