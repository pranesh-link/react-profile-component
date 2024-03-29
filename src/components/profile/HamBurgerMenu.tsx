import classNames from "classnames";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { Transition } from "react-transition-group";
import styled from "styled-components";
import {
  ActionBtn,
  FlexBox,
  FlexBoxSection,
  Version,
} from "../../common/Elements";
import MenuBar from "./MenuBar";
import { ComponentType } from "react";
import { TransitionProps } from "react-transition-group/Transition";
import { isSupportedBrowserAndOS } from "../../common/Utils";
import { VersionModal } from "../common/VersionModal";
import { ProfileContext } from "../../store/context";
import CloseIcon from "../svg/CloseIcon";
import HamburgerIcon from "../svg/HamburgerIcon";
import MobileApplicationIcon from "../svg/MobileApplicationIcon";

const TransitionComponent = Transition as ComponentType<TransitionProps>;

interface IHamburgerMenuProps {
  isOpen: boolean;
  hasPWAInstalled: boolean;
  setIsOpen: (isOpen: boolean) => void;
  onMenuChange: (section: string) => void;
  onInstallPWA: () => void;
}

export const HamBurgerMenu = (props: IHamburgerMenuProps) => {
  const { isOpen, hasPWAInstalled, setIsOpen, onMenuChange, onInstallPWA } =
    props;
  const contentRef = React.useRef<HTMLDivElement>(null);
  const {
    appVersion: version,
    deviceConfig: { browserName, browsers, os, osName },
  } = useContext(ProfileContext);

  const hasPWASupport = useMemo(
    () => isSupportedBrowserAndOS(browsers, os, browserName, osName),
    [browsers, os, browserName, osName]
  );

  const [hamburgerClicked, setHamburgerClicked] = useState<boolean>(false);
  const [displayVersionModal, setDisplayVersionModal] =
    useState<boolean>(false);
  const scrollbarSize =
    window.innerWidth - document.documentElement.clientWidth;

  useEffect(() => {
    // On open scroll to top of content div
    // Else content div will be at previously scrolled position
    if (isOpen && contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
    setTimeout(() => {
      // Disable body scroll to avoid double scroll on page
      document.getElementsByTagName("body")[0].style.overflow = isOpen
        ? "hidden"
        : "";
      // Add padding to body so that content inside body does not glitch
      document.getElementsByTagName("body")[0].style.paddingRight = isOpen
        ? `${scrollbarSize}px`
        : "";
    }, 100);
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <>
      <VersionModal
        displayVersionModal={displayVersionModal}
        setDisplayVersionModal={setDisplayVersionModal}
      />
      <IconWrap onTouchMove={() => setIsOpen(true)}>
        <ActionBtn
          onClick={() => {
            setIsOpen(true);
            setHamburgerClicked(true);
          }}
          className={classNames("hamburger-icon", {
            clicked: hamburgerClicked,
          })}
        >
          <HamburgerIcon />
        </ActionBtn>
      </IconWrap>
      <TransitionComponent
        in={isOpen}
        duration={0}
        addEndListener={(node, done) => {
          // use the css transitionend event to mark the finish of a transition
          node.addEventListener("transitionend", done, true);
        }}
      >
        {(state) => (
          <Menu className={state}>
            <ContentSection direction="column" justifyContent="space-around">
              <FlexBox justifyContent="flex-end">
                <ActionBtn
                  className="close-button"
                  onClick={() => setIsOpen(false)}
                >
                  <CloseIcon />
                </ActionBtn>
              </FlexBox>
              <MenuBar
                isMobileMenu
                closeHamburgerMenu={() => setIsOpen(false)}
                onMenuChange={(section) => onMenuChange(section)}
              />
              {hasPWASupport && !hasPWAInstalled && (
                <FlexBox justifyContent="center">
                  <ActionBtn
                    className="install-app-button"
                    onClick={onInstallPWA}
                  >
                    <FlexBox alignItems="center">
                      <ActionBtn className="mobile-application-icon">
                        <MobileApplicationIcon />
                      </ActionBtn>
                      <span className="install-app-text">Install app</span>
                    </FlexBox>
                  </ActionBtn>
                </FlexBox>
              )}
              <Version
                href=""
                onClick={(e) => {
                  e.preventDefault();
                  setIsOpen(false);
                  setDisplayVersionModal(true);
                }}
              >
                v{version}
              </Version>
            </ContentSection>
            <RightSection onClick={() => setIsOpen(false)} />
          </Menu>
        )}
      </TransitionComponent>
    </>
  );
};

const IconWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  width: 100%;
  z-index: 20;
  background-color: #f0f0f0;
  padding: 20px 0;

  .hamburger-icon {
    margin-right: 10px;
    cursor: pointer;
    padding: 10px;
    animation: blinker 5s linear infinite;
    box-shadow: rgb(0 0 0 / 20%) 0 -1px 0px 1px, inset #304701 0 -1px 0px,
      #3f9c35 0 2px 12px;
    &.clicked {
      animation: none;
      box-shadow: none;
      @keyframes blinker {
        50% {
          opacity: 0.5;
          box-shadow: none;
        }
      }
    }
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;
const Menu = styled.div`
  display: flex;
  position: fixed;
  flex-direction: row-reverse;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 100011;
  transition: all 200ms;
  &.exited {
    visibility: hidden;
  }
  &.entered {
    background-color: rgba(0, 0, 0, 0.75);
  }
`;
const ContentSection = styled(FlexBoxSection)`
  background-color: #222222;
  flex-basis: 50%;
  .find-me {
    align-self: center;
    color: #f0f0f0;
    padding-bottom: 5px;
    padding-left: 15px;
    font-style: italic;
    font-weight: bold;
  }
  .close-button {
    cursor: pointer;
    margin: 10px;
    height: 30px;
  }

  .install-app-button {
    margin-bottom: 25px;
    background-color: #f0f0f0;
    border-radius: 30px;
    padding: 5px 20px;
    max-width: fit-content;
  }

  .mobile-application-icon {
    cursor: pointer;
    height: 25px;
    padding: 0;
  }

  .install-app-text {
    margin-left: 10px;
    font-weight: bold;
  }
`;
const RightSection = styled.div`
  flex-basis: 50%;
`;
