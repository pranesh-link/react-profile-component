import styled from "styled-components";
import { memo, useContext } from "react";
import { ISkill } from "../../../store/types";
import {
  FlexBox,
  FlexBoxSection,
  Grid,
  SecHeader,
} from "../../../common/Elements";
import classNames from "classnames";
import { ProfileContext } from "../../../store/context";
import { SECTIONS } from "../../../common/constants";
import StarIcon from "../../svg/StarIcon";
import StarUnfilledIcon from "../../svg/StarUnfilledIcon";

export const Skills = () => {
  const {
    isMobile,
    isExport = false,
    refs: { skillsRef: refObj },
    data: {
      sections: { skills },
    },
  } = useContext(ProfileContext);

  const SKILL_ICON_TEXT_MAP = {
    filled: {
      icon: <StarIcon />,
      text: "Star filled",
    },
    unfilled: {
      icon: <StarUnfilledIcon />,
      text: "Star unfilled",
    },
  };

  const SkillWithStars = memo(({ starNum }: { starNum: number }) => {
    const { filled, unfilled } = SKILL_ICON_TEXT_MAP;
    return (
      <FlexBox className="stars">
        {Array(5)
          .fill(null)
          .map((_item, index) => {
            const skillParams = index + 1 <= starNum ? filled : unfilled;
            return (
              <div key={index} className="star">
                {skillParams.icon}
              </div>
            );
          })}
      </FlexBox>
    );
  });

  const getColumnData = (skill: ISkill) => (
    <FlexBox className="skill">
      <div className="skill-label">
        <strong>{skill.label}</strong>
      </div>
      <SkillWithStars starNum={skill.star} />
    </FlexBox>
  );

  const getStarredSkillsData = () =>
    skills.info.map((skill: ISkill, index: number) => (
      <div key={index}>{getColumnData(skill)}</div>
    ));

  return (
    <section
      className="profile-section"
      id={isExport ? "" : SECTIONS.SKILLS}
      ref={isExport ? null : refObj}
    >
      <SecHeader className={classNames({ export: isExport })}>
        {skills.title}
      </SecHeader>
      <SkillsInfoWrapper
        isExport={isExport}
        isMobile={isMobile}
        justifyContent={isExport ? "normal" : "center"}
      >
        <Grid gridTemplateColumns="1fr 1fr">{getStarredSkillsData()}</Grid>
      </SkillsInfoWrapper>
    </section>
  );
};

const SkillsInfoWrapper = styled(FlexBoxSection)<{
  isMobile: boolean;
  isExport: boolean;
}>`
  .skill {
    padding-bottom: 10px;
    .skill-label {
      flex-basis: ${(props) => {
        let flexBasis = "50%";
        flexBasis = props.isExport ? "60%" : props.isMobile ? "40%" : flexBasis;
        return flexBasis;
      }};
      padding-right: 10px;
      ${(props) => props.isMobile && !props.isExport && "font-size: 13px"}
    }
    .stars {
      margin-right: ${(props) => (props.isExport ? "100px" : "10px")};
    }

    .star {
      height: ${(props) =>
        props.isMobile && !props.isExport ? "15px" : "20px"};
      width: ${(props) =>
        props.isMobile && !props.isExport ? "15px" : "20px"};
    }
  }

  @media screen and (max-width: 767px) {
    justify-content: normal;
  }
`;
