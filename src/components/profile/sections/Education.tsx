import classNames from "classnames";
import { useContext } from "react";
import { SecHeader, Desc } from "../../../common/Elements";
import { ProfileContext } from "../../../store/context";
import { SECTIONS } from "../../../common/constants";

export const Education = () => {
  const {
    isExport,
    data: {
      sections: { education },
    },
    refs: { educationRef: refObj },
  } = useContext(ProfileContext);
  return (
    <section
      className="profile-section"
      id={isExport ? "" : SECTIONS.EDUCATION}
      ref={isExport ? null : refObj}
    >
      <SecHeader className={classNames({ export: isExport })}>
        {education.title}
      </SecHeader>
      <Desc
        className={classNames("education", { export: isExport })}
        dangerouslySetInnerHTML={{ __html: education.info as string }}
      />
    </section>
  );
};
