import { IProfileData } from "react-profile-component/store";

const mockProfileData: IProfileData = {
  labels: {
    github: "Github",
    npm: "NPM",
  },
  header: {
    shortDesc: "Hi, I'm",
    name: "John",
    currentJobRole: "Lead UI Engineer",
  },
  sections: {
    aboutMe: {
      title: "About Me",
      ref: "homeRef",
      info: "I'm an enthusiastic <b>Lead UI Engineer</b> aspiring to be <b>UI Architect</b> with 11+ years of technology experience who wants to be an integral part of a competitive work environment, which would help me to update my knowledge and skills, both on the intellectual and personal front while contributing to the growth and success of the organisation.",
      icon: "images/demo-display-pic.avif",
    },
    details: {
      title: "Details",
      info: [
        {
          id: "location",
          label: "Lives in",
          info: "Bengaluru, India",
        },
        {
          id: "mobile",
          label: "Mobile",
          info: "+91-984723477",
          canCopy: true,
        },
        {
          id: "email",
          label: "E-mail",
          info: "myemail@email.com",
          canCopy: true,
        },
      ],
    },
    education: {
      title: "Education",
      ref: "educationRef",
      info: "<strong>B.E (Electronics and Communication)</strong>, Anna University, Coimbatore",
    },
    experiences: {
      title: "Experiences",
      ref: "experienceRef",
      info: [
        {
          designation: "Senior Lead Engineer, XT",
          name: "Your organization",
          from: "Jan 2015",
          type: "Current",
          responsibilities:
            "<ul><li>Design and development of web UI</li><li>Unit test and integration tests</li><li>Code review with fellow colleagues</li><li>Educating team towards better coding standards</li><li>Independent development contribution of features</li><li>Development of reusable UI components</li></ul>",
          projects: [
            {
              title: "My project",
              shortTitle: "My project",
              client: "XyZ",
              duration: "Jun 2023 - till date",
              role: "Lead developer/ Individual contributor",
              softwareTech:
                "React, Typescript, CSS, HTML5, Jest, React Testing library",
              description:
                "My project description, this is a sample description with HTML support <ul><li><b>My Profile:</b> View or update your personal information.</li>  <li><strong>Additional Rewards</strong>: View other services offered.</li><li><strong>Redeem Your Retail Card</strong>: Redeem subscriptions purchased through the retail store.</li><li><strong>Common FAQs</strong>: Get answers to commonly asked questions.</li></ul>",
              links: ["https://myproject.com"],
            },
          ],
        },
      ],
    },
    skills: {
      title: "Skills",
      ref: "skillsRef",
      info: [
        {
          label: "HTML 5",
          star: 3,
        },
      ],
    },
    openSourceProjects: {
      title: "Open source projects",
      ref: "openSourceRef",
      info: [
        {
          id: "my-component",
          title: "My Component",
          npm: "https://www.npmjs.com/package/my-component",
          github: "https://github.com/my-profile/my-component",
          skillsUsed: "React, TypeScript, HTML, CSS",
          description: "This is the description for My component",
        },
      ],
    },
    links: {
      title: "Links",
      info: [
        {
          label: "github",
          link: "https://github.com/myaccount/",
        },
        {
          label: "linkedIn",
          link: "https://www.linkedin.com/mycountry/myprofile/",
        },
        {
          label: "whatsApp",
          link: "https://wa.me/mynumber?text=Hi MyName",
        },
        {
          label: "facebook",
          link: "https://www.facebook.com/myprofile/",
          display: false,
        },
        {
          label: "twitter",
          link: "https://twitter.com/myprofile",
          display: false,
        },
      ],
    },
  },
  download: {
    type: "static",
    staticFileUrl: "files/myResume.pdf",
    download: {
      disabled: false,
      message: "for my Resume",
      icon: "images/download.gif",
    },
    downloading: {
      message: "Downloading",
      icon: "images/downloading.gif",
    },
    downloaded: {
      message: "Downloaded!",
      icon: "images/downloaded.gif",
    },
  },
  forms: {
    contactForm: {
      name: "contact-form",
      header: "Contact Me",
      actionButtonLabel: "Contact Me",
      label: {
        submit: "Send",
        submitting: "Sending...",
        reviewEdit: "Review & edit",
        close: "Close",
      },
      key: "asecretkey",
      defaultMaxLength: 20,
      statusMessages: {
        form_fill: "",
        sending: "Almost there! your request is in progress...",
        success: "Request sent successfully! You will be contacted soon.",
        error:
          "<span>Something went wrong. </span> <span> Please try sending again.</span>",
        review:
          "<span> Your request is about to be sent. </span> <span> You can <i style='color: #b21807'><b>review and edit</b></i> or <i style='color: #3fc935'><b>send</b></i> the request now.</span>",
        offline:
          "<span>You seem to be offline.</span> <span> Please check your network connection and try again.</span>",
      },
      messages: {
        retry: "Try again",
        mandatoryError: "* This field is required",
      },
      transformFields: [
        {
          id: "userSocialMessengers",
          transform: "boolToYesNo",
        },
      ],
      fields: [
        {
          id: "userName",
          name: "userName",
          label: "Name",
          placeholder: "Enter your name",
          required: true,
          type: "text",
          maxLength: 25,
          regex: "",
        },
        {
          id: "userMobile",
          name: "userMobile",
          label: "Mobile",
          placeholder: "Enter your mobile number",
          required: true,
          type: "mobile",
          maxLength: 15,
          childFields: ["userSocialMessengers"],
          regex: "",
          messages: {
            regexError: "Oops, that doesn't seem right. Please enter numbers.",
            fieldError:
              "Oops, that doesn't seem right. The phone number doesn't match the selected country",
          },
        },
        {
          id: "userSocialMessengers",
          name: "userSocialMessengers",
          label: "",
          placeholder: "",
          type: "checkbox",
          parentField: "userMobile",
          values: [
            {
              label: "WhatsApp",
              value: "whatsapp",
            },
          ],
        },
        {
          id: "userEmail",
          name: "userEmail",
          label: "E-mail",
          placeholder: "Enter your E-mail",
          required: true,
          subType: "email",
          type: "text",
          maxLength: 50,
          regex: "[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}",
          messages: {
            fieldError: "",
            regexError:
              "Oops, that doesn't seem right. Please try with valid email",
          },
        },
        {
          id: "message",
          name: "message",
          label: "Message",
          placeholder: "Enter your message",
          required: true,
          type: "textarea",
          maxLength: 200,
          regex: "",
        },
      ],
    },
  },
};

export default mockProfileData;
