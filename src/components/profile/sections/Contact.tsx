import React, { useContext, useMemo } from "react";
import { FlexBoxSection } from "../../../common/Elements";
import { ILink, ISectionInfo, LinkType } from "../../../store/types";
import {
  getFilteredLinks,
  valueIsArray,
  valueIsLinkInfo,
} from "../../../common/Utils";
import styled from "styled-components";
import { ProfileContext } from "../../../store/context";
import { SECTIONS } from "../../../common/constants";
import {
  FacebookIcon,
  GithubIcon,
  LinkedInIcon,
  TwitterIcon,
  WhatsAppIcon,
} from "react-profile-component/components/svg";

interface IContactProps {
  links?: ISectionInfo;
  refObj?: React.MutableRefObject<any>;
}

const LinkComponents: Record<LinkType, JSX.Element> = {
  whatsApp: <WhatsAppIcon />,
  github: <GithubIcon />,
  linkedIn: <LinkedInIcon />,
  facebook: <FacebookIcon />,
  twitter: <TwitterIcon />,
};

export const Contact = (props: IContactProps) => {
  const { links: propsLinks, refObj: propsRefObj } = props;
  const { isMobile } = useContext(ProfileContext);

  let {
    data: {
      sections: { links },
    },
    refs: { contactRef: refObj },
  } = useContext(ProfileContext);
  if (propsLinks && propsRefObj) {
    links = propsLinks;
    refObj = propsRefObj;
  }

  const filteredLinks = useMemo(
    () => getFilteredLinks(links.info as ILink[]),
    [links.info],
  );

  return (
    <ContactsSection
      justifyContent={isMobile ? "space-evenly" : "center"}
      alignItems="center"
      className="profile-section links"
      id={SECTIONS.LINKS}
      ref={refObj}
    >
      {valueIsArray(links.info) && valueIsLinkInfo(links.info)
        ? filteredLinks.map((link, index) => (
            <div key={index} className="link-wrapper">
              <a
                className="link"
                href={link.link}
                target="_blank"
                key={link.label}
                rel="noopener noreferrer"
              >
                {LinkComponents[link.label]}
              </a>
            </div>
          ))
        : null}
    </ContactsSection>
  );
};

const ContactsSection = styled(FlexBoxSection)`
  .hide-profile-url {
    display: none;
  }
`;
