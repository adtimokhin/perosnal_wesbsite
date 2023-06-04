import SocialMediaButton from "../SocialMediaButton/SocialMediaButton";

function ContactButtons() {

  return (
    <div className="flex justify-between w-full">
      <SocialMediaButton
        iconSVG={
          <object className="w-full h-full">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="LinkedInIcon" clip-path="url(#clip0_1_2)">
                <rect
                  id="icon_bg_linkedIN"
                  x="3"
                  y="2"
                  width="19"
                  height="19"
                  fill="#F1F7EB"
                />
                <path
                  id="icon_LinkedIn"
                  d="M19 0H5C2.239 0 0 2.239 0 5V19C0 21.761 2.239 24 5 24H19C21.762 24 24 21.761 24 19V5C24 2.239 21.762 0 19 0ZM8 19H5V8H8V19ZM6.5 6.732C5.534 6.732 4.75 5.942 4.75 4.968C4.75 3.994 5.534 3.204 6.5 3.204C7.466 3.204 8.25 3.994 8.25 4.968C8.25 5.942 7.467 6.732 6.5 6.732ZM20 19H17V13.396C17 10.028 13 10.283 13 13.396V19H10V8H13V9.765C14.396 7.179 20 6.988 20 12.241V19Z"
                  fill="#77A842"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </object>
        }
        iconBgID={"icon_bg_linkedIN"}
        iconID={"icon_LinkedIn"}
        buttonUrl={"https://www.linkedin.com/in/adtimokhin/"}
      />

      <SocialMediaButton
        iconSVG={
          <object className="w-full h-full">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="GitHubIcon" clip-path="url(#clip0_1_5)">
                <circle id="icon_bg_GT" cx="12" cy="12" r="12" fill="#F1F7EB" />
                <path
                  id="icon_GT"
                  d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
                  fill="#77A842"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_5">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </object>
        }
        iconID={"icon_GT"}
        iconBgID={"icon_bg_GT"}
        buttonUrl={"https://github.com/adtimokhin/"}
      />

      <SocialMediaButton
        iconSVG={
          <object className="w-full h-full">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="EmailIcon" clip-path="url(#clip0_3_8)">
                <circle
                  id="email_bg_id"
                  cx="12"
                  cy="12"
                  r="12"
                  fill="#F1F7EB"
                />
                <path
                  id="email_icon"
                  d="M12 0.0200043C5.373 0.0200043 0 5.393 0 12.02C0 18.647 5.373 24.02 12 24.02C18.627 24.02 24 18.647 24 12.02C24 5.393 18.627 0.0200043 12 0.0200043ZM18.99 7L12 12.666L5.009 7H18.99ZM19 17H5V8.495L12 14.168L19 8.496V17Z"
                  fill="#77A842"
                />
              </g>
              <defs>
                <clipPath id="clip0_3_8">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </object>
        }
        iconID={"email_icon"}
        iconBgID={"email_bg_id"}
        buttonUrl={"mailto:adtiomkhin@gmail.com"}
      />
    </div>
  );
}

export default ContactButtons;
