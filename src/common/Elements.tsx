import { MouseEventHandler } from "react";
import { ModalComponent } from "react-profile-component/components/common/Component";
import styled from "styled-components";

export const ActionBtn = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  outline: none;
`;
export const FlexBox = styled.div<{
  direction?: FLEX_DIRECTION;
  justifyContent?: JUSTIFY_CONTENT;
  alignItems?: string;
  flexWrap?: FLEX_WRAP;
  flexBasis?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justifyContent || "normal"};
  align-items: ${(props) => props.alignItems || "normal"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  flex-basis: ${(props) => props.flexBasis || "auto"};
`;

export const FlexBoxSection = styled.section<{
  direction?: FLEX_DIRECTION;
  justifyContent?: JUSTIFY_CONTENT;
  alignItems?: string;
  flexWrap?: FLEX_WRAP;
  flexBasis?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  justify-content: ${(props) => props.justifyContent || "normal"};
  align-items: ${(props) => props.alignItems || "normal"};
  flex-wrap: ${(props) => props.flexWrap || "nowrap"};
  flex-basis: ${(props) => props.flexBasis || "auto"};
  &.short-info {
    padding-left: 10px;
  }
`;

export const Grid = styled.div<{
  gridTemplateColumns?: string;
  gridTemplateRows?: string;
  justifyItems?: string;
  alignItems?: string;
}>`
  display: grid;
  grid-template-columns: ${(props) => props.gridTemplateColumns || "1fr"};
  grid-template-rows: ${(props) => props.gridTemplateRows || "1fr"};
  align-items: ${(props) => props.alignItems || "normal"};
  justify-items: ${(props) => props.justifyItems || "normal"};
`;

export type FLEX_WRAP =
  | "wrap"
  | "nowrap"
  | "initial"
  | "inherit"
  | "wrap-reverse"
  | "unset";

export type JUSTIFY_CONTENT =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "normal";

export type ALIGN_ITEMS =
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline"
  | "stretch"
  | "normal";

export type FLEX_DIRECTION =
  | "row"
  | "row-reverse"
  | "column"
  | "column-reverse";

export const SecHeader = styled.header`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #22a39f;
  text-align: center;
  &.export {
    text-align: unset;
    margin-bottom: 0;
    font-size: 30px;
  }
  &.about-me-title {
    text-align: left;
    @media screen and (max-width: 767px) {
      margin-bottom: 10px;
    }
  }
  @media screen and (max-width: 767px) {
    text-align: left;
    font-size: 28px;
  }
`;

export const Desc = styled.p`
  margin: 0;
  padding-right: 15%;

  &.about {
    padding-left: 0;
    padding-top: 10px;
  }
  &.education {
    text-align: center;
    padding-right: 0;
    @media screen and (max-width: 767px) {
      text-align: left;
      padding: 0 5px;
    }
  }
  &.export {
    text-align: left;
  }
  strong {
    color: #3e3e3e;
  }

  @media screen and (max-width: 767px) {
    padding-right: 0;
    &.about {
      padding-top: 20px;
    }
  }
`;

export const SectionsWrapper = styled.section<{
  isMobile: boolean;
  isExport: boolean;
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  margin-top: 40px;
  padding-bottom: 40px;
  &.export {
    padding-left: 10%;
    margin-top: 0;
  }
  &.hamburger-menu {
    padding-left: 0;
    padding-bottom: 0;
    height: unset;
    padding: 0 10px;
    .profile-section {
      &.links {
        @media screen and (max-width: 767px) {
          display: flex;
        }
      }
    }
  }
  .profile-section {
    margin-bottom: 20px;
    padding-bottom: 20px;
    > header {
      @media screen and (max-width: 767px) {
        margin-bottom: 10px;
      }
    }

    &.links {
      padding: 15px 0 5px;
      background-color: #222222;
      position: fixed;
      bottom: 0;
      width: 100%;
      margin-bottom: 0;
      z-index: 2;
      &.export {
        position: static;
        background-color: transparent;
        @media screen and (max-width: 767px) {
          display: flex;
          position: static;
          padding: 20px 0;
          background-color: transparent;
        }
        .link {
          padding-right: 15px;
        }
      }

      .link {
        @media screen and (max-width: 767px) {
          margin-bottom: 0;
        }
        a {
          padding: 10px 15px;
          text-decoration: none;
          border-radius: 20px;
          background-color: #0c77b9;
          &:hover {
            background-color: #3f9c35;
          }
        }
        img {
          height: 25px;
          &.Github {
            @media screen and (max-width: 767px) {
              height: 28px;
            }
          }
        }
        a,
        span {
          color: #f0f0f0;
        }
        .link-separator {
          &:last-child {
            display: none;
          }
        }
      }
    }

    &.experience {
      &.export {
        background-color: transparent;
        padding-top: 0px;
      }
      ${SecHeader} {
        @media screen and (max-width: 767px) {
          margin-bottom: 10px;
        }
      }
      @media screen and (max-width: 767px) {
        background: none;
      }
    }
    &.about {
      padding-top: 20px;
      @media screen and (max-width: 767px) {
        flex-direction: column;
        justify-content: normal;
        &.export {
          flex-direction: row;
        }
      }
    }
    .image-details-wrap {
      margin-right: 10px;
      align-self: flex-end;
      @media screen and (max-width: 767px) {
        margin-top: 15px;
        align-items: normal;
        align-self: normal;
      }
    }
    .about-me {
      flex-basis: 25%;
      padding-right: 10px;
      &.export {
        flex-basis: 33%;
      }
    }
    .image {
      .image-wrap {
        margin-right: 50px;
        @media screen and (max-width: 767px) {
          margin-right: 20px;
        }
      }
      .profile-image {
        width: ${(props) =>
          props.isMobile && !props.isExport ? "125px" : "200px"};
        height: ${(props) =>
          props.isMobile && !props.isExport ? "125px" : "200px"};
        border-radius: 50%;
        border: 2px solid #dddbca;
      }
    }
    .details {
      min-width: 55%;
      .detail {
        padding-bottom: 5px;
      }
      .detail-info {
        line-height: 2;
        span {
          /* flex-basis: 75%; */
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    margin-top: 0;
    .profile-section {
      padding-left: 20px;
      padding-right: 10px;
    }
  }
`;

interface CloseButtonProps {
  onClose: MouseEventHandler<HTMLButtonElement>;
  icon: string;
  width: string;
}
export const CloseButton = (props: CloseButtonProps) => (
  <i className="material-icons" onClick={props.onClose}>
    <img src={props.icon} alt="Close icon" width={props.width} />
  </i>
);

export const AutoCloseToastMessage = styled.div`
  font-family: Open Sans, sans-serif !important;
  text-align: center;
  font-style: italic;
  letter-spacing: 0.5px;
  color: #3f9c35;
`;

export const PWAWrapper = styled(FlexBox)<{ top?: string; bottom?: string }>`
  position: fixed;
  z-index: 20;
  ${({ top }) =>
    top &&
    `
    top: ${top};
  `}
  ${({ bottom }) =>
    bottom &&
    `
    bottom: ${bottom};
  `}
  background: #8f00ff;
  width: 100%;
  padding: 25px 0;
  /* animation: ease-in-h 1s ease 1;
  @keyframes ease-in-h {
    from {
      height: 0;
    }
    to {
      height: auto;
    }
  } */
  p {
    color: #fff;
    font-weight: 600;
    font-size: 1.1em;
  }
  button {
    color: #fff;
    border: none;
    background: none;
    flex-basis: 15%;
    cursor: pointer;
    font-size: 1.2em;
    font-weight: bold;
    &.install {
      background: #fff;
      margin-right: 15px;
      color: #8f00ff;
      padding: 10px 0;
      border-radius: 25px;
      font-size: 1.2em;
      a {
        text-decoration: none;
      }
    }
    &.not-now {
      color: rgb(170, 187, 187, 0.8);
    }
  }

  &.hide {
    display: none;
  }

  @media only screen and (max-width: 767px) {
    padding: 10px 0;
    p {
      font-size: 14px;
    }
    button {
      font-size: 15px !important;
      &.install {
        padding: 5px 10px;
      }
    }
  }
`;

export const MobilePWAWrapper = styled(PWAWrapper)`
  z-index: 5;
  p {
    font-size: 14px;
    padding: 0 10px;
  }
  button {
    flex-basis: auto !important;
    font-size: 15px !important;
    padding: 10px !important;
  }
`;

export const LoaderImg = styled.img<{ isMobile: boolean }>`
  width: ${(props) => (props.isMobile ? "75px" : "100px")};
  position: absolute;
  top: 40%;
  left: ${(props) => (props.isMobile ? "40%" : "45%")};
  animation: loader-spin infinite 1s linear;

  @keyframes loader-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Overlay = styled.div<{
  opacity: number;
  top?: number;
  bottom?: string;
  height?: number;
  background?: string;
}>`
  position: fixed;
  ${(props) => props.top && `top: ${props.top}px`};
  ${(props) => props.bottom && `bottom: ${props.bottom}px`};
  height: ${(props) => props.height || 0}px;
  background: ${(props) => props.background || "#fff"};
  width: 100%;
  opacity: ${(props) => props.opacity};
`;

export const ModalBanner = styled.div`
  height: 5px;
  background: #3fc935;
  position: fixed;
  width: 100%;
  &.header {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  &.footer {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    bottom: 0;
  }
`;

export const ModalContentWrap = styled(FlexBox)`
  background: #f0f0f0;
  position: relative;
  border-radius: 5px;

  &.contact-modal {
    .close {
      margin-bottom: 0;
    }
  }

  .close {
    align-self: self-end;
    margin-right: 20px;
    margin-bottom: 20px;
    padding: 7px 15px;
    background: #3498db;
    border-radius: 20px;
    color: #f0f0f0;
    &:hover {
      background: #ee4b2b;
    }
    @media only screen and (max-width: 992px) {
      align-self: center;
      margin-right: 0;
    }
  }

  @media only screen and (max-width: 374px) and (orientation: portrait) {
    max-height: 99vh;
    overflow-y: scroll;
  }

  @media only screen and (min-width: 375px) and (max-width: 992px) and (orientation: portrait) {
    max-height: 90vh;
    overflow-y: scroll;
  }

  @media only screen and (max-width: 992px) and (orientation: landscape) {
    max-height: 80vh;
    overflow-y: scroll;
  }
`;

export const Version = styled.a`
  color: #f0f0f0;
  margin-top: 10px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  background: rgb(52, 152, 219);
  opacity: 0.7;
  padding: 5px 10px;
  border-radius: 20px;
  width: fit-content;
  margin: 0 auto;
  margin-bottom: 60px;
  &:hover {
    opacity: 1;
  }
`;

export const SectionWrapper = styled(FlexBoxSection)`
  padding-left: 20px;
  padding-right: 15%;
  margin-left: 25%;
  .project-titles-wrap {
    max-width: 70%;
    margin-top: 15px;
  }
  &.export {
    margin-left: 0;
    padding-left: 0px;
  }
  .org-name {
    font-size: 22px;
    margin-block: 5px;
    &.current {
      color: #3f9c35;
    }
    &.previous {
      color: #8a8982;
    }
  }
  .duration {
    font-size: 13px;
    text-transform: uppercase;
    font-weight: bold;
  }
  .projects-label,
  .clients-label {
    span {
      margin-left: 5px;
    }
  }
  .projects-label,
  .clients-label,
  .responsibilities {
    display: flex;
    margin-block-start: 10px;
    margin-block-end: 0;
    label {
      text-transform: uppercase;
      margin-right: 10px;
    }
    span {
      font-weight: 600;
    }
    div {
      font-weight: normal;
    }
  }
  .responsibilities {
    flex-direction: column;
  }
  .org-projects {
    padding-left: 10px;
  }
  .responsibilities {
    ul {
      padding-inline-start: 5px;
      list-style-type: none;
      margin-block: 5px;
      li {
        display: flex;
        padding-bottom: 7px;
        align-items: center;
        &::before {
          content: "✓";
          color: #3fc935;
          font-size: 20px;
          font-weight: bold;
          margin-right: 10px;
        }
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 0;
    margin-left: 0;
    ul {
      margin: 0;
      padding-left: 25px;
    }
    .org-name {
      font-size: 20px;
    }

    .project-titles-wrap {
      max-width: unset;
    }

    .open-source-project-name {
      font-size: 18px;
    }
  }
`;

export const ProjectLink = styled(ActionBtn)`
  padding: 10px 15px;
  border-radius: 20px;
  background: #3498db;
  color: #f0f0f0;
  margin-bottom: 15px;
  margin-right: 20px;
  &:hover {
    background: #3f9c35;
  }
`;

export const CustomModalComponent = styled(ModalComponent)`
  .open-source-content-wrap {
    .os-project {
      margin: 20px 10px 10px;
      .os-project-name {
        font-size: 20px;
        margin: 0 0 10px 0;
        text-decoration: underline;
      }

      .os-project-desc {
        padding-bottom: 5px;
        text-indent: 1em;
      }

      .os-project-links {
        margin-top: 15px;
      }

      .os-project-skills {
        font-size: 16px;
        .label {
          font-weight: 700;
        }
        .info {
          font-weight: 600;
        }
      }
    }
  }
  &.version-modal {
    background: #f0f0f0;
    padding: 25px;
    border-radius: 50px;
    width: fit-content;
    margin: 0 auto;
    font-size: 18px;
    font-weight: 600;
    color: #3e3e3e;
    span {
      font-style: italic;
      font-weight: bold;
    }
  }
  &.contact-form-status-modal-content {
    margin: 0 30%;
    display: flex;
    justify-content: center;
  }
  &.contact-modal-content {
    margin: 0 30%;
  }
  @media only screen and (max-width: 992px) {
    &.ReactModal__Content {
      margin: 0 15px;
    }

    ::-webkit-scrollbar {
      width: 7px;
    }

    &.version-modal {
      font-size: 15px;
      margin: 0 auto;
      letter-spacing: 0.5px;
    }
  }
`;
