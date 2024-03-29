import classNames from "classnames";
import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { FlexBoxSection } from "../../common/Elements";
import { ProfileContext } from "../../store/context";
import { ProfileSectionType, RefTypes } from "../../store/types";
import { scrollTo } from "../../common/ScrollTo";
import { SECTION_ORDER_DISPLAY } from "../../common/constants";
import { uppercase } from "../../common/Utils";

interface IMenuBarProps {
  isMobileMenu?: boolean;
  closeHamburgerMenu?: () => void;
  onMenuChange?: (section: string) => void;
}
const MenuBar = (props: IMenuBarProps) => {
  const {
    refs,
    data,
    currentSection,
    isInstallBannerOpen,
    pwaOffset,
    isMobile,
  } = React.useContext(ProfileContext);
  const { onMenuChange } = props;
  const initialOffset = useMemo(() => (isMobile ? 100 : 30), [isMobile]);
  const goTo = (section: string) => {
    scrollTo(
      `#${section}`,
      isInstallBannerOpen ? pwaOffset + initialOffset : 20 + initialOffset
    );
  };
  let timeout: any;
  const menuItems = Object.keys(data.sections)
    .reduce(
      (
        items: { title: string; ref: string; section: string; order: number }[],
        current: string
      ) => {
        if (data.sections[current as ProfileSectionType].ref) {
          const { title, ref = "" } =
            data.sections[current as ProfileSectionType];

          const { order, display } = SECTION_ORDER_DISPLAY[uppercase(current)];
          if (display !== false) {
            items.push({
              section: current,
              title,
              ref,
              order,
            });
          }
        }
        return items;
      },
      []
    )
    .sort((a, b) => a.order - b.order);

  const handleScroll = () => {
    const resultPosition = menuItems.reduce(
      (result, curr, index) => {
        const { ref, section } = curr;
        const currentRef = refs[ref as RefTypes];
        if (currentRef.current) {
          let pos = currentRef.current.getBoundingClientRect().top;

          pos = Math.round(
            isInstallBannerOpen ? pos - pwaOffset - initialOffset : pos - 30
          );

          if (index === 0 || (pos <= 0 && pos > result.pos)) {
            return {
              section,
              pos,
            };
          }
        }
        return result;
      },
      { section: "aboutMe", pos: isInstallBannerOpen ? pwaOffset : 0 }
    );
    if (onMenuChange) {
      onMenuChange(resultPosition.section);
    }
  };

  const debounce = (method: () => void, delay: number) => {
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      method();
    }, delay);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", () => {
      debounce(handleScroll, 100);
    });
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pwaOffset, initialOffset]);

  return (
    <MenuWrapper
      className={classNames("wrapper", { mobile: props.isMobileMenu })}
    >
      <FlexBoxSection direction="column">
        {menuItems.map((item) => (
          <MenuBtn
            key={item.section}
            onClick={() => {
              goTo(item.section);
              if (props.closeHamburgerMenu) {
                props.closeHamburgerMenu();
              }
            }}
            className={classNames({
              "is-active": currentSection === item.section,
            })}
          >
            {item.title}
          </MenuBtn>
        ))}
      </FlexBoxSection>
    </MenuWrapper>
  );
};

export default MenuBar;

const MenuWrapper = styled.nav`
  overflow: hidden;
  position: fixed;
  top: 15%;
  right: 25px;
  width: 100%;
  z-index: 10;
  background-color: #222222;
  max-width: fit-content;
  border-radius: 5px;
  &.mobile {
    padding-top: 0;
    position: static;
    max-width: unset;
    height: 100%;
  }
  &.wrapper {
    .is-active {
      background-color: #3f9c35;
    }
    ul {
      list-style-type: none;
      padding: 0;
      margin: 0;
    }
    li {
      text-align: center;
      padding: 20px 5px;
    }
    a {
      font-weight: bold;
      padding: 20px 5px;
      text-decoration: none;
      color: #fff;
      &:hover {
        color: #434242;
      }
    }
  }
  &:not(.mobile) {
    @media screen and (max-width: 767px) {
      display: none;
      right: 0;
    }
  }
`;

const MenuBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  color: #fff;
  font-weight: bold;
  padding: 20px;
  &:hover {
    color: #00b2e2;
  }
`;
