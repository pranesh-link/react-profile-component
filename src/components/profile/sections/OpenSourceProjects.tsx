import classNames from "classnames";
import { useContext, useState } from "react";
import {
  SectionWrapper,
  SecHeader,
  ProjectLink,
  FlexBox,
  ModalContentWrap,
  ModalBanner,
  CustomModalComponent,
  ActionBtn,
} from "react-profile-component/common/Elements";
import { goToLink } from "react-profile-component/common/Utils";
import { LABEL_TEXT, SECTIONS } from "react-profile-component/common/constants";
import { IOpenSource } from "react-profile-component/store";
import { ProfileContext } from "react-profile-component/store/context";

const OpenSourceProjects = () => {
  const {
    data: {
      labels,
      sections: { openSourceProjects },
    },
    refs: { openSourceRef },
    setIsModalOpen,
  } = useContext(ProfileContext);
  const [currentProject, setCurrentProject] = useState<IOpenSource | null>(
    null
  );

  return (
    <>
      <CustomModalComponent
        isOpen={!!currentProject}
        onRequestClose={() => {
          setCurrentProject(null);
          setIsModalOpen(false);
        }}
      >
        {currentProject && (
          <ModalContentWrap
            direction="column"
            className="open-source-content-wrap"
          >
            <ModalBanner className="header" />
            <section className="os-project">
              <h3 className="os-project-name">{currentProject.id}</h3>
              <p className="os-project-desc">{currentProject.description}</p>
              <p className="os-project-skills">
                <span className="label">{labels.skills}: </span>{" "}
                <span className="info">{currentProject.skillsUsed}</span>
              </p>
              <FlexBox className="os-project-links" flexWrap="wrap">
                {currentProject.npm && (
                  <ProjectLink onClick={() => goToLink(currentProject.npm)}>
                    {labels.npm}
                  </ProjectLink>
                )}
                {currentProject.github && (
                  <ProjectLink onClick={() => goToLink(currentProject.github)}>
                    {labels.github}
                  </ProjectLink>
                )}
              </FlexBox>
            </section>
            <ActionBtn
              className="close"
              onClick={() => setCurrentProject(null)}
            >
              {LABEL_TEXT.close}
            </ActionBtn>
            <ModalBanner className="footer" />
          </ModalContentWrap>
        )}
      </CustomModalComponent>
      <section
        id={SECTIONS.OPEN_SOURCE_PROJECTS}
        ref={openSourceRef}
        className={classNames("profile-section", "experience")}
      >
        <SecHeader>{openSourceProjects.title}</SecHeader>
        <SectionWrapper flexWrap="wrap">
          {openSourceProjects.info.map((item) => {
            return (
              <FlexBox key={item.id} className="os-project">
                <ProjectLink
                  onClick={() => {
                    setCurrentProject(item);
                    setIsModalOpen(true);
                  }}
                >
                  {item.id}
                </ProjectLink>
              </FlexBox>
            );
          })}
        </SectionWrapper>
      </section>
    </>
  );
};

export { OpenSourceProjects };
