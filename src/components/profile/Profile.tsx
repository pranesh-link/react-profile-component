import { PDFExport } from "@progress/kendo-react-pdf";
import { PROFILE_PDF_NAME } from "../../common/constants";
import { HamBurgerMenu } from "./HamBurgerMenu";
import MenuBar from "./MenuBar";
import ProfileSections from "./ProfileSections";
import { ProfileProvider } from "../../store/context";
import {
  IDeviceConfig,
  IPreloadSrc,
  IPreloadedAsset,
  IPreloadedFile,
  IProfileData,
} from "../../store/types";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { Overlay } from "../../common/Elements";

interface ProfileProps {
  profileData: IProfileData;
  refs: {
    homeRef: React.MutableRefObject<any>;
    skillsRef: React.MutableRefObject<any>;
    experienceRef: React.MutableRefObject<any>;
    educationRef: React.MutableRefObject<any>;
    contactRef: React.MutableRefObject<any>;
  };
  preloadSrcList: IPreloadSrc[];
  preloadedFiles: IPreloadedFile[];
  preloadedAssets: IPreloadedAsset[];
  appVersion: string;
  environment: string;
  isDownloading: boolean;
  isMobile: boolean;
  isHamburgerMenuOpen: boolean;
  isInstallBannerOpen: boolean;
  isExport: boolean;
  hasPWAInstalled: boolean;
  deviceConfig: IDeviceConfig;
  setIsDownloading: (isDownloading: boolean) => void;
  setIsHamburgerMenuOpen: (isHamburgerMenuOpen: boolean) => void;
  onInstallPWA: () => void;
}

export const Profile = (props: ProfileProps) => {
  const {
    profileData,
    refs: { homeRef, skillsRef, experienceRef, educationRef, contactRef },
    isDownloading,
    isMobile,
    isHamburgerMenuOpen,
    isInstallBannerOpen,
    isExport,
    hasPWAInstalled,
    setIsDownloading,
    setIsHamburgerMenuOpen,
    onInstallPWA,
    appVersion,
    environment,
    preloadSrcList,
    preloadedFiles,
    preloadedAssets,
    deviceConfig,
  } = props;
  const [hasDownloadedProfile, setHasDownloadedProfile] =
    useState<boolean>(false);
  const [currentSection, setCurrentSection] = useState<string>("aboutMe");
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  let timer: NodeJS.Timeout;
  useEffect(() => {
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  let pdfExportComponent: PDFExport;
  const {
    download: { type },
  } = profileData;

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
          },
          deviceConfig,
          appVersion,
          environment,
          currentSection,
          isExport,
          isDownloading,
          isMobile,
          isInstallBannerOpen,
          hasDownloadedProfile,
          isContactFormOpen,
          preloadSrcList,
          preloadedFiles,
          preloadedAssets,
          setIsContactFormOpen,
        }}
      >
        <HamBurgerMenu
          isOpen={isHamburgerMenuOpen}
          hasPWAInstalled={hasPWAInstalled}
          setIsOpen={isOpen => setIsHamburgerMenuOpen(isOpen)}
          onMenuChange={section => setCurrentSection(section)}
          onInstallPWA={onInstallPWA}
        />
        {isMobile && <Swipe onTouchMove={() => setIsHamburgerMenuOpen(true)} />}
        <MenuBar onMenuChange={section => setCurrentSection(section)} />
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
        <ProfileSections
          exportProfile={() => {
            setIsDownloading(true);
            pdfExportComponent.save(() => {
              setIsDownloading(false);
              setHasDownloadedProfile(true);
              timer = setTimeout(() => setHasDownloadedProfile(false), 5000);
            });
          }}
        />
      </ProfileProvider>
      {type !== "static" && (
        <ProfileProvider
          value={{
            data: profileData,
            refs: {
              homeRef,
              skillsRef,
              experienceRef,
              educationRef,
              contactRef,
            },
            preloadSrcList,
            preloadedFiles,
            preloadedAssets,
            deviceConfig,
            appVersion,
            environment,
            currentSection,
            isExport,
            isDownloading,
            isMobile,
            isInstallBannerOpen,
            hasDownloadedProfile,
            isContactFormOpen,
            setIsContactFormOpen,
          }}
        >
          <div className="export-wrapper">
            <PDFExport
              scale={0.65}
              paperSize="A4"
              creator="Pranesh"
              author="Pranesh"
              title="Pranesh_Profile"
              margin={{ top: "20mm", bottom: "25mm" }}
              forcePageBreak=".page-break"
              keepTogether=".keep-together"
              fileName={PROFILE_PDF_NAME}
              ref={(component: PDFExport) => (pdfExportComponent = component)}
            >
              <MenuBar />
              <ProfileSections />
            </PDFExport>
          </div>
        </ProfileProvider>
      )}
    </>
  );
};

const Swipe = styled.div`
  height: 100%;
  width: 60px;
  right: 0;
  position: fixed;
`;
