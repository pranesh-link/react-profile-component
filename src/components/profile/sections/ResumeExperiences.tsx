import classNames from "classnames";
import {
  SecHeader,
  ActionBtn,
  FlexBox,
  ModalBanner,
  ModalContentWrap,
  SectionWrapper,
  ProjectLink,
  CustomModalComponent,
} from "../../../common/Elements";
import { memo, useContext, useEffect, useMemo, useState } from "react";
import { ProfileContext } from "../../../store/context";
import { IProjectExperience } from "../../../store/types";
import {
  EXPERIENCE_TYPES,
  LABELS,
  LABEL_TEXT,
  SECTIONS,
} from "../../../common/constants";
import { ProjectInfo } from "../../common/ProjectInfo";

interface INames {
  projectNames: string[];
  clientNames: string[];
}

export const ResumeExperiences = memo(() => {
  const {
    data: {
      sections: { experiences },
    },
    isExport,
    isMobile,
    refs: { experienceRef },
    setIsModalOpen,
  } = useContext(ProfileContext);
  const [currentProject, setCurrentProject] =
    useState<IProjectExperience | null>(null);

  const getExperienceInfo = (
    projects: IProjectExperience[],
    type: string,
    from: string,
    to?: string
  ) => {
    const names = projects.reduce(
      (curr: INames, next: IProjectExperience) => ({
        projectNames: [...curr.projectNames, next.title],
        clientNames: [...curr.clientNames, next.client],
      }),
      { projectNames: [], clientNames: [] }
    );
    const projectNames = names.projectNames.join(", ");
    const clientNames = [...new Set(names.clientNames)].join(", ");
    const duration =
      type === EXPERIENCE_TYPES.CURRENT
        ? `${from} - present`
        : `${from} - ${to}`;
    return {
      projectNames,
      clientNames,
      duration,
      totalClients: [...new Set(names.clientNames)].length,
    };
  };

  const textSeparator = useMemo(
    () => <>{isMobile ? <br /> : <span>,&nbsp;</span>}</>,
    [isMobile]
  );

  return (
    <>
      {!isExport && currentProject && (
        <CustomModalComponent
          isOpen={!!currentProject}
          shouldCloseOnOverlayClick
          className="modal-wrap"
          ariaHideApp={false}
        >
          <ModalContentWrap direction="column">
            <ModalBanner className="header" />
            <ProjectInfo project={currentProject} />
            <ActionBtn
              className="close"
              onClick={() => {
                setCurrentProject(null);
                setIsModalOpen(false);
              }}
            >
              {LABEL_TEXT.close}
            </ActionBtn>
            <ModalBanner className="footer" />
          </ModalContentWrap>
        </CustomModalComponent>
      )}

      <section
        className={classNames("profile-section", "experience", {
          export: isExport,
        })}
        id={isExport ? "" : SECTIONS.EXPERIENCE}
        ref={isExport ? null : experienceRef}
      >
        <SecHeader
          className={classNames("page-break", { export: isExport })}
          onClick={() => setCurrentProject(experiences.info[0].projects[0])}
        >
          {experiences.title}
        </SecHeader>
        <SectionWrapper
          direction="column"
          justifyContent="space-around"
          className={classNames({ export: isExport })}
        >
          {experiences.info.map((experience, index) => {
            const {
              name,
              from,
              to,
              type,
              designation,
              responsibilities,
              projects,
            } = experience;

            const { duration } = getExperienceInfo(projects, type, from, to);
            return (
              <section key={index} className="organization">
                <h3
                  className={classNames("org-name", type.toLowerCase(), {
                    "page-break": false,
                  })}
                >
                  <span>{designation}</span>
                  {textSeparator}
                  <span>{name}</span>
                  {textSeparator}
                  <span className="duration">{duration}</span>
                </h3>
                <h4 className="projects-label">
                  <label>{LABELS.PROJECTS}</label>
                </h4>
                <FlexBox className="project-titles-wrap" flexWrap="wrap">
                  {projects.map((project, index) => (
                    <ProjectLink
                      key={index}
                      onClick={() => {
                        setCurrentProject(project);
                        setIsModalOpen(true);
                      }}
                    >
                      {project.shortTitle}
                    </ProjectLink>
                  ))}
                </FlexBox>
                <h4 className="responsibilities">
                  <label>{LABELS.RESPONSIBILITIES}</label>
                </h4>
                <div
                  className="responsibilities"
                  dangerouslySetInnerHTML={{
                    __html: responsibilities,
                  }}
                />
              </section>
            );
          })}
        </SectionWrapper>
      </section>
    </>
  );
});
