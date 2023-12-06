import React from "react";
import { Profile } from "react-profile-component";

const ProfilePage = () => {
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);
    
    const onClickInstall = () => {};
    const setDownloading = () => {};

    const profileData = {
        "header": {
            "shortDesc": "Hi, I'm",
            "name": "Pranesh",
            "currentJobRole": "Lead UI Engineer"
        },
        "sections": {
            "header": {
                "shortDesc": "Hi, I'm",
                "name": "Pranesh",
                "currentJobRole": "Lead UI Engineer"
            },
            "aboutMe": {
                "title": "About Me",
                "ref": "homeRef",
                "info": "I'm an enthusiastic <b>Lead UI Engineer</b> aspiring to be <b>UI Architect</b> with 11+ years of technology experience who wants to be an integral part of a competitive work environment, which would help me to update my knowledge and skills, both on the intellectual and personal front while contributing to the growth and success of the organisation.",
                "icon": "images/display-pic.avif",
                "pdfExportIcon": "https://profile-jsons.pranesh.link/images/display-pic.avif"
            },
            "details": {
                "title": "Details",
                "info": [
                    {
                        "label": "Lives in",
                        "info": "Bengaluru, India",
                        "pdfExportIcon": "https://profile-jsons.pranesh.link/images/location-icon.svg",
                        "icon": "images/location-icon.svg"
                    },
                    {
                        "label": "Mobile",
                        "info": "+91-9443329991",
                        "pdfExportIcon": "https://profile-jsons.pranesh.link/images/mobile-icon.svg",
                        "icon": "images/mobile-icon.svg",
                        "canCopy": true
                    },
                    {
                        "label": "E-mail",
                        "info": "prans1991@gmail.com",
                        "pdfExportIcon": "https://profile-jsons.pranesh.link/images/mail-icon.svg",
                        "icon": "images/mail-icon.svg",
                        "canCopy": true
                    }
                ]
            },
            "education": {
                "title": "Education",
                "ref": "educationRef",
                "info": "<strong>B.E (Electronics and Communication)</strong>, Sri Krishna College of Engineering and Technology, Coimbatore"
            },
            "experiences": {
                "title": "Experiences",
                "ref": "experienceRef",
                "info": [
                    {
                        "designation": "Senior Lead Engineer, XT",
                        "name": "Your organization",
                        "from": "Jan 2015",
                        "type": "Current",
                        "responsibilities": "<ul><li>Design and development of web UI</li><li>Unit test and integration tests</li><li>Code review with fellow colleagues</li><li>Educating team towards better coding standards</li><li>Independent development contribution of features</li><li>Development of reusable UI components</li></ul>",
                        "projects": [
                            {
                                "title": "My project",
                                "shortTitle": "My project",
                                "client": "XyZ",
                                "duration": "Jun 2023 - till date",
                                "role": "Lead developer/ Individual contributor",
                                "softwareTech": "React, Typescript, CSS, HTML5, Jest, React Testing library",
                                "description": "My project description, this is a sample description with HTML support <ul><li><b>My Profile:</b> View or update your personal information.</li>  <li><strong>Additional Rewards</strong>: View other services offered.</li><li><strong>Redeem Your Retail Card</strong>: Redeem subscriptions purchased through the retail store.</li><li><strong>Common FAQs</strong>: Get answers to commonly asked questions.</li></ul>",
                                "links": [
                                    "https://yourproject.com"
                                ]
                            },
                        ]
                    },
                ]
            },
            "skills": {
                "title": "Skills",
                "ref": "skillsRef",
                "info": [
                    {
                        "label": "HTML 5",
                        "star": 3
                    },
                ]
            },
            "links": {
                "title": "Links",
                "info": [
                    {
                        "label": "My Profile",
                        "link": "https://mysite.com",
                        "pdfExportIcon": "https://mycmssite.com/images/profile.png",
                        "icon": "images/profile.png",
                        "isExportOnly": true
                    },
                    {
                        "label": "Github",
                        "link": "https://github.com/myaccount/",
                        "pdfExportIcon": "https://mycmssite.com/images/github-logo.png",
                        "icon": "images/github-logo.png"
                    },
                    {
                        "label": "LinkedIn",
                        "link": "https://www.linkedin.com/mycountry/myprofile/",
                        "pdfExportIcon": "https://mycmssite.com/images/linkedin-logo.svg",
                        "icon": "images/linkedin-logo.svg"
                    },
                    {
                        "label": "WhatsApp",
                        "link": "https://wa.me/mynumber?text=Hi MyName",
                        "pdfExportIcon": "https://mycmssite.com/images/whatsapp-logo.svg",
                        "icon": "images/whatsapp-logo.svg"
                    },
                    {
                        "label": "Facebook",
                        "link": "https://www.facebook.com/myprofile/",
                        "pdfExportIcon": "https://mycmssite.com/images/facebook-logo.svg",
                        "icon": "images/facebook-logo.svg",
                        "display": false
                    },
                    {
                        "label": "Twitter",
                        "link": "https://twitter.com/myprofile",
                        "pdfExportIcon": "https://mycmssite.com/images/twitter-logo.svg",
                        "icon": "images/twitter-logo.svg",
                        "display": false
                    }
                ]
            }
        },
        "download": {
            "type": "static",
            "staticFileUrl": "files/myResume.pdf",
            "download": {
                "disabled": false,
                "message": "for my Resume",
                "icon": "images/download.gif"
            },
            "downloading": {
                "message": "Downloading",
                "icon": "images/downloading.gif"
            },
            "downloaded": {
                "message": "Downloaded!",
                "icon": "images/downloaded.gif"
            }
        },
        "forms": {
            "contactForm": {
                "name": "contact-form",
                "header": "Contact Me",
                "actionButtonLabel": "Contact Me",
                "label": {
                    "submit": "Send",
                    "submitting": "Sending...",
                    "reviewEdit": "Review & edit",
                    "close": "Close"
                },
                "key": "asecretkey",
                "defaultMaxLength": 20,
                "statusMessages": {
                    "sending": "Almost there! your request is in progress...",
                    "success": "Request sent successfully! You will be contacted soon.",
                    "error": "<span>Something went wrong. </span> <span> Please try sending again.</span>",
                    "review": "<span> Your request is about to be sent. </span> <span> You can <i style='color: #b21807'><b>review and edit</b></i> or <i style='color: #3fc935'><b>send</b></i> the request now.</span>",
                    "offline": "<span>You seem to be offline.</span> <span> Please check your network connection and try again.</span>"
                },
                "messages": {
                    "retry": "Try again",
                    "mandatoryError": "* This field is required"
                },
                "transformFields": [
                    {
                        "id": "userSocialMessengers",
                        "transform": "boolToYesNo"
                    }
                ],
                "fields": [
                    {
                        "id": "userName",
                        "name": "userName",
                        "label": "Name",
                        "placeholder": "Enter your name",
                        "required": true,
                        "type": "text",
                        "maxLength": 25,
                        "regex": ""
                    },
                    {
                        "id": "userMobile",
                        "name": "userMobile",
                        "label": "Mobile",
                        "placeholder": "Enter your mobile number",
                        "required": true,
                        "type": "mobile",
                        "maxLength": 15,
                        "childFields": [
                            "userSocialMessengers"
                        ],
                        "regex": "",
                        "messages": {
                            "regexError": "Oops, that doesn't seem right. Please enter numbers.",
                            "fieldError": "Oops, that doesn't seem right. The phone number doesn't match the selected country"
                        }
                    },
                    {
                        "id": "userSocialMessengers",
                        "name": "userSocialMessengers",
                        "label": "",
                        "placeholder": "",
                        "type": "checkbox",
                        "parentField": "userMobile",
                        "values": [
                            {
                                "label": "WhatsApp",
                                "value": "whatsapp"
                            }
                        ]
                    },
                    {
                        "id": "userEmail",
                        "name": "userEmail",
                        "label": "E-mail",
                        "placeholder": "Enter your E-mail",
                        "required": true,
                        "subType": "email",
                        "type": "text",
                        "maxLength": 50,
                        "regex": "[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}",
                        "messages": {
                            "regexError": "Oops, that doesn't seem right. Please try with valid email"
                        }
                    },
                    {
                        "id": "message",
                        "name": "message",
                        "label": "Message",
                        "placeholder": "Enter your message",
                        "required": true,
                        "type": "textarea",
                        "maxLength": 200,
                        "regex": ""
                    }
                ]
            }
        }
    }

    return <Profile
                isExport={false}
                profileData={profileData}
                refs={{
                    homeRef: React.createRef(),
                    skillsRef: React.createRef(),
                    experienceRef: React.createRef(),
                    educationRef: React.createRef(),
                    contactRef: React.createRef()
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
                onInstallPWA={onClickInstall}
                environment={process.env.NODE_ENV}
                appVersion="1.0.0"
                deviceConfig={{ os: ["Windows"], osName: "Windows", browserName: "Chrome", browsers: ["Chrome"] }}
                preloadSrcList={
                    [
                        {
                            "id": "offlineAnimation",
                            "type": "image",
                            "fileName": "offline-animation.gif",
                            "fileLocation": "web"
                        },
                        {
                            "id": "resume",
                            "type": "pdf",
                            "fileName": "Pranesh_Resume.pdf",
                            "fileLocation": "server"
                        }
                    ]
                }
                preloadedAssets={[
                    {
                        "id": "starUnfilled",
                        "image": "data:image/svg+xml;base64,PHN2ZyBpZD0iU3ZnanNTdmcxMDExIiB3aWR0aD0iMjg4IiBoZWlnaHQ9IjI4OCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4bWxuczpzdmdqcz0iaHR0cDovL3N2Z2pzLmNvbS9zdmdqcyI+PGRlZnMgaWQ9IlN2Z2pzRGVmczEwMTIiPjwvZGVmcz48ZyBpZD0iU3ZnanNHMTAxMyI+PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDI0IDI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHdpZHRoPSIyODgiIGhlaWdodD0iMjg4Ij48cGF0aCBkPSJNMjEuOTE4OTQ1MywxMC4xMjY1MjU5YzAuMDgwMjYxMi0wLjU0NjgxNC0wLjI5Nzk3MzYtMS4wNTUxMTQ3LTAuODQ0NzI2Ni0xLjEzNTM3NkwxNS40MjI4NTE2LDguMTY0OTc4bC0yLjUyNTM5MDYtNS4xNDY0ODQ0Yy0wLjA5MDk0MjQtMC4xNTY5ODI0LTAuMjIxNDM1NS0wLjI4NzM1MzUtMC4zNzg1NC0wLjM3ODExMjhjLTAuNDk2MDMyNy0wLjI4NjY4MjEtMS4xMzA2MTUyLTAuMTE3MDA0NC0xLjQxNzM1ODQsMC4zNzkwODk0TDguNTc3MTQ4NCw4LjE2NDk3OEwyLjkyNTc4MTIsOC45OTEyMTA5QzIuNzA5NzE2OCw5LjAyMjg4ODIsMi41MTAwMDk4LDkuMTI0NDUwNywyLjM1Njk5NDYsOS4yODAyNzM0Yy0wLjM4NzE0NiwwLjM5NDM0ODEtMC4zODEyMjU2LDEuMDI3ODkzMSwwLjAxMzEyMjYsMS40MTUwMzkxbDQuMDkyNzczNCw0LjAxMjY5NTNsLTAuOTY1ODIwMyw1LjY2NDA2MjVjLTAuMDA5MTU1MywwLjA1NDE5OTItMC4wMTM4NTUsMC4xMDkwNjk4LTAuMDEzOTc3MSwwLjE2NDEyMzVjLTAuMDAxNTI1OSwwLjU1MzQwNTgsMC40NDU4NjE4LDEuMDAzMjk1OSwwLjk5OTMyODYsMS4wMDQ4MjE4YzAuMTYzMTQ3LTAuMDAwMjQ0MSwwLjMyMzc5MTUtMC4wNDA0NjYzLDAuNDY3NzczNC0wLjExNzE4NzVMMTIsMTguNzUzOTA2Mmw1LjA0ODgyODEsMi42Njg5NDUzYzAuMTk1MTI5NCwwLjEwMzU3NjcsMC40MTkwMDYzLDAuMTM5NjQ4NCwwLjYzNjc3OTgsMC4xMDI1MzkxYzAuNTQ0MTg5NS0wLjA5MjgzNDUsMC45MTAwOTUyLTAuNjA5MTMwOSwwLjgxNzMyMTgtMS4xNTMzMjAzbC0wLjk2NTgyMDMtNS42NjQwNjI1bDQuMDkzNzUtNC4wMTM3MzI5QzIxLjc4NjEzMjgsMTAuNTQxNDQyOSwyMS44ODcyNjgxLDEwLjM0MjEwMjEsMjEuOTE4OTQ1MywxMC4xMjY1MjU5eiBNMTYuNjUwMzkwNiwxNC4xNzY2OTY4Yy0wLjExNzA2NTQsMC4xMTQ4NjgyLTAuMTcwNjU0MywwLjI3OTY2MzEtMC4xNDM1NTQ3LDAuNDQxNDA2MmwxLjAwOTc2NTYsNS45MjA4OTg0bC01LjI4MzIwMzEtMi43OTMwMjk4Yy0wLjE0NjMwMTMtMC4wNzYxNzE5LTAuMzIwNDk1Ni0wLjA3NjE3MTktMC40NjY3OTY5LDBMNi40ODMzOTg0LDIwLjUzOTk3OGwxLjAwOTcwNDYtNS45MjE4MTRjMC4wMjcxNjA2LTAuMTYxNzQzMi0wLjAyNjQyODItMC4zMjY1MzgxLTAuMTQzNTU0Ny0wLjQ0MTQwNjJMMy4wNzAyNTE1LDkuOTgxNDQ1M2w1LjkxMjEwOTQtMC44NjQyNTc4QzkuMTQ1NjI5OSw5LjA5Mjc3MzQsOS4yODY0OTksOC45ODk4NjgyLDkuMzU5Mzc1LDguODQxNzk2OUwxMiwzLjQ2MDAyMmwyLjY0MDU2NCw1LjM4MTcxMzljMC4wNzI4NzYsMC4xNDgwNzEzLDAuMjEzODA2MiwwLjI1MDk3NjYsMC4zNzcwMTQyLDAuMjc1MzkwNmw1LjkxMzA4NTksMC44NjMyODEyTDE2LjY1MDM5MDYsMTQuMTc2Njk2OHoiIGZpbGw9IiNmY2Q2MzUiIGNsYXNzPSJjb2xvcjAwMCBzdmdTaGFwZSI+PC9wYXRoPjwvc3ZnPjwvZz48L3N2Zz4="
                    }
                ]}
                preloadedFiles={
                    {
                        "id": "resume",
                        "file": "blob:https://yoursite.com/2a82b8f5-5f38-42d8-a4ef-54f0d32fc721"
                    }
                }
            />
}