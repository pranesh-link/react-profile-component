import React, { useState } from "react";
import { Profile } from "react-profile-component/components/profile";
import mockProfileData from "./profile-data";

export const ProfilePage = () => {
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

  const onClickInstall = () => {};
  const setDownloading = () => {};

  return (
    <Profile
      isExport={false}
      profileData={mockProfileData}
      refs={{
        homeRef: React.createRef(),
        skillsRef: React.createRef(),
        experienceRef: React.createRef(),
        educationRef: React.createRef(),
        contactRef: React.createRef(),
        openSourceRef: React.createRef(),
      }}
      isDownloading={false}
      isMobile={false}
      isInstallBannerOpen={false}
      hasPWAInstalled={false}
      isHamburgerMenuOpen={isHamburgerMenuOpen}
      setIsDownloading={setDownloading}
      setIsHamburgerMenuOpen={(isHamburgerMenuOpen: boolean) =>
        setIsHamburgerMenuOpen(isHamburgerMenuOpen)
      }
      emailJsConfig={{
        serviceId: "yourserviceid",
        templateId: "yourtemplateid",
        publicKey: "yourpublickey",
      }}
      isDarkMode={false}
      onInstallPWA={onClickInstall}
      environment={process.env.NODE_ENV}
      appVersion="1.0.0"
      showComponentLibUrl={false}
      deviceConfig={{
        os: ["Windows"],
        osName: "Windows",
        browserName: "Chrome",
        browsers: ["Chrome"],
      }}
      preloadSrcList={[
        {
          id: "offlineAnimation",
          type: "image",
          fileName: "offline-animation.gif",
          fileLocation: "web",
        },
        {
          id: "resume",
          type: "pdf",
          fileName: "Pranesh_Resume.pdf",
          fileLocation: "server",
        },
      ]}
      preloadedAssets={[
        {
          id: "starUnfilled",
          image:
            "data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDExIiB3aWR0aD0iMjg4IiBoZWlnaHQ9IjI4OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+PGRlZnMgaWQ9IlN2Z2pzRGVmczEwMTIiPjwvZGVmcz48ZyBpZD0iU3ZnanNHMTAxMyI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyODgiIGhlaWdodD0iMjg4Ij48cGF0aCBkPSJNMjEuOTE4OTQ1MywxMC4xMjY1MjU5YzAuMDgwMjYxMi0wLjU0NjgxNC0wLjI5Nzk3MzYtMS4wNTUxMTQ3LTAuODQ0NzI2Ni0xLjEzNTM3NkwxNS40MjI4NTE2LDguMTY0OTc4bC0yLjUyNTM5MDYtNS4xNDY0ODQ0Yy0wLjA5MDk0MjQtMC4xNTY5ODI0LTAuMjIxNDM1NS0wLjI4NzM1MzUtMC4zNzg1NC0wLjM3ODExMjhjLTAuNDk2MDMyNy0wLjI4NjY4MjEtMS4xMzA2MTUyLTAuMTE3MDA0NC0xLjQxNzM1ODQsMC4zNzkwODk0TDguNTc3MTQ4NCw4LjE2NDk3OEwyLjkyNTc4MTIsOC45OTEyMTA5QzIuNzA5NzE2OCw5LjAyMjg4ODIsMi41MTAwMDk4LDkuMTI0NDUwNywyLjM1Njk5NDYsOS4yODAyNzM0Yy0wLjM4NzE0NiwwLjM5NDM0ODEtMC4zODEyMjU2LDEuMDI3ODkzMSwwLjAxMzEyMjYsMS40MTUwMzkxbDQuMDkyNzczNCw0LjAxMjY5NTNsLTAuOTY1ODIwMyw1LjY2NDA2MjVjLTAuMDA5MTU1MywwLjA1NDE5OTItMC4wMTM4NTUsMC4xMDkwNjk4LTAuMDEzOTc3MSwwLjE2NDEyMzVjLTAuMDAxNTI1OSwwLjU1MzQwNTgsMC40NDU4NjE4LDEuMDAzMjk1OSwwLjk5OTMyODYsMS4wMDQ4MjE4YzAuMTYzMTQ3LTAuMDAwMjQ0MSwwLjMyMzc5MTUtMC4wNDA0NjYzLDAuNDY3NzczNC0wLjExNzE4NzVMMTIsMTguNzUzOTA2Mmw1LjA0ODgyODEsMi42Njg5NDUzYzAuMTk1MTI5NCwwLjEwMzU3NjcsMC40MTkwMDYzLDAuMTM5NjQ4NCwwLjYzNjc3OTgsMC4xMDI1MzkxYzAuNTQ0MTg5NS0wLjA5MjgzNDUsMC45MTAwOTUyLTAuNjA5MTMwOSwwLjgxNzMyMTgtMS4xNTMzMjAzbC0wLjk2NTgyMDMtNS42NjQwNjI1bDQuMDkzNzUtNC4wMTM3MzI5QzIxLjc4NjEzMjgsMTAuNTQxNDQyOSwyMS44ODcyNjgxLDEwLjM0MjEwMjEsMjEuOTE4OTQ1MywxMC4xMjY1MjU5eiBNMTYuNjUwMzkwNiwxNC4xNzY2OTY4Yy0wLjExNzA2NTQsMC4xMTQ4NjgyLTAuMTcwNjU0MywwLjI3OTY2MzEtMC4xNDM1NTQ3LDAuNDQxNDA2MmwxLjAwOTc2NTYsNS45MjA4OTg0bC01LjI4MzIwMzEtMi43OTMwMjk4Yy0wLjE0NjMwMTMtMC4wNzYxNzE5LTAuMzIwNDk1Ni0wLjA3NjE3MTktMC40NjY3OTY5LDBMNi40ODMzOTg0LDIwLjUzOTk3OGwxLjAwOTcwNDYtNS45MjE4MTRjMC4wMjcxNjA2LTAuMTYxNzQzMi0wLjAyNjQyODItMC4zMjY1MzgxLTAuMTQzNTU0Ny0wLjQ0MTQwNjJMMy4wNzAyNTE1LDkuOTgxNDQ1M2w1LjkxMjEwOTQtMC44NjQyNTc4QzkuMTQ1NjI5OSw5LjA5Mjc3MzQsOS4yODY0OTksOC45ODk4NjgyLDkuMzU5Mzc1LDguODQxNzk2OUwxMiwzLjQ2MDAyMmwyLjY0MDU2NCw1LjM4MTcxMzljMC4wNzI4NzYsMC4xNDgwNzEzLDAuMjEzODA2MiwwLjI1MDk3NjYsMC4zNzcwMTQyLDAuMjc1MzkwNmw1LjkxMzA4NTksMC44NjMyODEyTDE2LjY1MDM5MDYsMTQuMTc2Njk2OHoiIGZpbGw9IiNmY2Q2MzUiIGNsYXNzPSJjb2xvcjAwMCBzdmdTaGFwZSI+PC9wYXRoPjwvc3ZnPjwvZz48L3N2Zz4=",
        },
      ]}
      preloadedFiles={[
        {
          id: "resume",
          file: "blob:https://yoursite.com/2a82b8f5-5f38-42d8-a4ef-54f0d32fc721",
        },
      ]}
      serverConfig={{
        webServerConfig: {
          devWebUrl: "http://your-dev-url",
          prodWebUrl: "https://your-prod-url",
        },
        cmsServerConfig: {
          devCMSUrl: "http://your-dev-cms-url",
          prodCMSUrl: "https://your-prod-cms-url",
        },
      }}
    />
  );
};
