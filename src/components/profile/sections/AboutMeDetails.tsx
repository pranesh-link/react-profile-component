import classNames from "classnames";
import { FlexBoxSection, Grid } from "../../../common/Elements";
import { getHref, lowercase } from "../../../common/Utils";
import { ProfileContext } from "../../../store/context";
import { AboutMeDetailType } from "../../../store/types";
import { useContext } from "react";
import styled from "styled-components";
import * as clipboard from "clipboard-polyfill/text";
import {
  CopyIcon,
  LocationIcon,
  MailIcon,
  MobileIcon,
  TickIcon,
} from "react-profile-component/components/svg";

interface AboutMeDetailsProps {
  copyState: string;
  setCopyState: (copyInfoId: string) => void;
}
const DetailInfoComponents: Record<AboutMeDetailType, JSX.Element> = {
  location: <LocationIcon />,
  email: <MailIcon />,
  mobile: <MobileIcon />,
};
export const AboutMeDetails = (props: AboutMeDetailsProps) => {
  const {
    isMobile,
    isExport,
    data: {
      sections: { details },
    },
  } = useContext(ProfileContext);
  const { copyState, setCopyState } = props;

  return (
    <DetailSection className="details" isMobile={false} isExport={isExport}>
      {!isExport && (
        <FlexBoxSection direction="column" justifyContent="space-between">
          {details.info.map((detail, index) => {
            const { id, label, info, canCopy } = detail;
            const copied = copyState === label;
            return (
              <Grid
                key={index}
                alignItems="start"
                gridTemplateColumns="0.2fr 1fr 1fr"
                className="detail-icon"
              >
                <div className="info-icon">{DetailInfoComponents[id]}</div>
                {(isMobile || isExport) && canCopy ? (
                  <a href={getHref(lowercase(label), info)}>{info}</a>
                ) : (
                  <span className="detail-info-text" id={lowercase(label)}>
                    <b>{info}</b>
                  </span>
                )}
                <CopyButton
                  data-id={lowercase(label)}
                  data-clipboard-text={info}
                  onClick={() => {
                    clipboard.writeText(info).then(() => {
                      setCopyState(label);
                    });
                  }}
                  className={classNames({
                    hide: !canCopy,
                    mobile: !isExport && isMobile && canCopy,
                    copied,
                  })}
                >
                  {copied ? (
                    <TickIcon fillColor="#3fc935" strokeWidth={5} />
                  ) : (
                    <CopyIcon />
                  )}
                </CopyButton>
              </Grid>
            );
          })}
        </FlexBoxSection>
      )}
    </DetailSection>
  );
};

const DetailSection = styled(FlexBoxSection)<{
  isMobile: boolean;
  isExport?: boolean;
}>`
  cursor: pointer;
  line-height: 1.5;
  .detail-icon {
    margin: ${(props) => (props.isMobile && !props.isExport ? "0" : "10px 0")};
    &.export {
      min-width: 0;
      width: 25px;
      margin-right: 10px;
    }
  }
  .mobile-detail {
    margin-bottom: 7px;
  }
  .detail-info {
    padding: 7px 0;
  }
  .detail-info-text {
    cursor: auto;
    flex-basis: 80%;
    margin-right: 5px;
  }
`;

const CopyButton = styled.button`
  border: none;
  color: #f0f0f0;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  padding: 2px;
  font-size: 10px;
  margin-left: 10px;
  max-width: 50px;
  &.mobile {
    display: inline-block;
    img {
      width: 15px;
      height: 15px;
    }
  }
  &.copied {
    svg {
      animation: blinker 1s linear infinite;
    }
  }
`;
