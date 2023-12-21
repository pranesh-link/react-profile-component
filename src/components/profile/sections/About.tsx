import classNames from "classnames";
import React, { useEffect, useRef, useState } from "react";
import {
  FlexBoxSection,
  Desc,
  FlexBox,
  ModalBanner,
  ModalContentWrap,
} from "../../../common/Elements";
import { getIconUrl, getPdfUrl, getPdfBlob } from "../../../common/Utils";
import styled from "styled-components";
import { ProfileContext } from "../../../store/context";
import { AboutMeDetails } from "./AboutMeDetails";
import { PDF_NAME } from "../../../common/constants";
import { ContactForm } from "../../form/contact/Form";
import { ModalComponent } from "../../common/Component";
import { ContactMe } from "../../common/ContactMe";

interface IAboutProps {
  exportProfile: () => void;
}
export const About = (_props: IAboutProps) => {
  const {
    isContactFormOpen,
    setIsContactFormOpen,
    hasDownloadedProfile,
    environment,
    isExport,
    isMobile,
    isDownloading,
    data: {
      sections: { aboutMe },
      download,
    },
    refs: { homeRef: refObj },
    preloadSrcList,
    preloadedFiles,
    serverConfig: { cmsServerConfig },
  } = React.useContext(ProfileContext);

  const preloadedPdfBlob = preloadedFiles.find(
    item => item.id === "resume",
  )?.file;
  const pdfFileName = preloadSrcList.find(
    item => item.id === "resume",
  )?.fileName;
  const [copyState, setCopyState] = useState<string>("");
  const [pdfUrl] = useState<string>(preloadedPdfBlob || "");
  const downloadRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (copyState) {
      setTimeout(() => {
        setCopyState("");
      }, 3000);
    }
  }, [copyState]);

  const downloadFile = (url: string) => {
    if (downloadRef.current !== null) {
      downloadRef.current.download = pdfFileName || "";
      downloadRef.current.href = url;
      downloadRef.current?.click();
    }
  };

  const downloadResume = async () => {
    let url = pdfUrl;
    if (!url) {
      const blob = await getPdfBlob(
        getPdfUrl(environment, pdfFileName || "", cmsServerConfig),
      );
      url = blob.objectUrl;
      downloadFile(url);
    } else {
      downloadFile(url);
    }
  };

  return (
    <>
      <ModalComponent
        className="contact-modal-content"
        isOpen={isContactFormOpen}
        ariaHideApp={false}
      >
        <ModalContentWrap direction="column" className="contact-modal">
          <ModalBanner className="header" />
          <ContactForm closeModal={() => setIsContactFormOpen(false)} />
          <ModalBanner className="footer" />
        </ModalContentWrap>
      </ModalComponent>
      <FlexBoxSection
        className={classNames("profile-section", "about", { export: isExport })}
        justifyContent={isExport ? "normal" : "center"}
        ref={isExport ? null : refObj}
        id={isExport ? "" : "home"}
      >
        <FlexBoxSection
          direction="column"
          className={classNames("about-me", { export: isExport })}
        >
          {!isExport && isMobile && (
            <FlexBoxSection
              justifyContent={isMobile ? "space-around" : "normal"}
              className="image"
            >
              <p className="image-wrap">
                <img
                  alt=""
                  className="profile-image"
                  src={getIconUrl(
                    aboutMe.icon || "",
                    environment,
                    cmsServerConfig,
                  )}
                />
              </p>
            </FlexBoxSection>
          )}
          <Desc
            className="about"
            dangerouslySetInnerHTML={{ __html: aboutMe.info as string }}
          />
        </FlexBoxSection>
        <FlexBoxSection alignItems="center" className="image-details-wrap">
          {(!isMobile || isExport) && (
            <FlexBoxSection
              justifyContent={isMobile ? "space-around" : "normal"}
              className="image"
            >
              <p className="image-wrap">
                <img
                  alt=""
                  className="profile-image"
                  src={getIconUrl(
                    aboutMe.icon || "",
                    environment,
                    cmsServerConfig,
                  )}
                />
              </p>
            </FlexBoxSection>
          )}
          <FlexBoxSection direction="column">
            <AboutMeDetails
              copyState={copyState}
              setCopyState={(copyInfoId: string) => {
                setCopyState(copyInfoId);
              }}
            />
            <InterestedInProfile
              isMobile={isMobile}
              disabled={download.download.disabled}
              className={classNames({
                "downloaded-profile": hasDownloadedProfile,
              })}
              alignItems="center"
            >
              {!download.download.disabled &&
                !isDownloading &&
                !hasDownloadedProfile && (
                  <>
                    <a
                      href="placeholder_href"
                      ref={downloadRef}
                      download={PDF_NAME}
                      className="hide"
                    >
                      Placeholder
                    </a>
                    <img
                      className="download"
                      alt="Click here"
                      height="25px"
                      onClick={downloadResume}
                      src={getIconUrl(
                        download.download.icon,
                        environment,
                        cmsServerConfig,
                      )}
                      loading="lazy"
                    />

                    <span className="download-text">
                      {download.download.message}
                    </span>
                  </>
                )}
              <ContactMe />
            </InterestedInProfile>
          </FlexBoxSection>
        </FlexBoxSection>
      </FlexBoxSection>
    </>
  );
};

const InterestedInProfile = styled(FlexBox)<{
  isMobile: boolean;
  disabled?: boolean;
}>`
  margin: ${props => (props.isMobile ? "10px 0 0 0" : "10px 0 0 0px")};
  min-height: ${props => (props.disabled ? "0px" : "50px")};
  font-weight: bold;
  &.downloaded-profile {
    margin-left: ${props => (props.isMobile ? "0" : "5px")};
  }

  .download {
    min-width: 100px;
    margin-right: 5px;
    border-radius: 5px;
    cursor: pointer;
  }

  .download-text {
    overflow: hidden;
    white-space: nowrap;
    width: 0;
    animation: typing;
    animation-duration: 3s;
    animation-timing-function: steps(30, end);
    animation-fill-mode: forwards;
  }

  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
  .downloading-text {
    margin-left: 5px;
    .progress-animation {
      position: relative;
      width: 7px;
      height: 7px;
      border-radius: 5px;
      background-color: #3f9c35;
      color: #3f9c35;
      animation: flashing 1s infinite linear alternate;
      animation-delay: 0.5s;
      margin: 5px 0 0 20px;
      &::before,
      &::after {
        content: "";
        display: inline-block;
        position: absolute;
        top: 0;
      }
      &::before {
        left: -15px;
        width: 7px;
        height: 7px;
        border-radius: 5px;
        background-color: #3f9c35;
        color: #3f9c35;
        animation: flashing 1s infinite alternate;
        animation-delay: 0s;
      }
      &::after {
        left: 15px;
        width: 7px;
        height: 7px;
        border-radius: 5px;
        background-color: #3f9c35;
        color: #3f9c35;
        animation: flashing 1s infinite alternate;
        animation-delay: 1s;
      }

      @keyframes flashing {
        0% {
          background-color: #3f9c35;
        }
        50%,
        100% {
          background-color: rgba(152, 128, 255, 0.2);
        }
      }
    }
  }
`;
