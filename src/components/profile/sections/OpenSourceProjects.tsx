import classNames from "classnames";
import { useContext } from "react";
import {
  SectionWrapper,
  SecHeader,
  ProjectLink,
  FlexBox,
} from "react-profile-component/common/Elements";
import { goToLink } from "react-profile-component/common/Utils";
import { SECTIONS } from "react-profile-component/common/constants";
import { ProfileContext } from "react-profile-component/store/context";

const OpenSourceProjects = () => {
  const {
    data: {
      labels,
      sections: { openSourceProjects },
    },
    refs: { openSourceRef },
  } = useContext(ProfileContext);
  return (
    <section
      id={SECTIONS.OPEN_SOURCE_PROJECTS}
      ref={openSourceRef}
      className={classNames("profile-section", "experience")}
    >
      <SecHeader>{openSourceProjects.title}</SecHeader>
      <SectionWrapper direction="column" justifyContent="space-around">
        {openSourceProjects.info.map((item) => {
          return (
            <section key={item.id} className="os-project">
              <h3 className="os-project-name">{item.id}</h3>
              <p className="os-project-desc">{item.description}</p>
              <FlexBox className="project-titles-wrap" flexWrap="wrap">
                {item.npm && (
                  <ProjectLink onClick={() => goToLink(item.npm)}>
                    {labels.npm}
                  </ProjectLink>
                )}
                {item.github && (
                  <ProjectLink onClick={() => goToLink(item.github)}>
                    {labels.github}
                  </ProjectLink>
                )}
              </FlexBox>
            </section>
          );
        })}
      </SectionWrapper>
    </section>
  );
};

export { OpenSourceProjects };
