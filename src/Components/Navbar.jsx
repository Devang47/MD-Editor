import React from "react";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a
            href="http://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="github_logo"
            aria-label='github_link'
          >
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2438 10.2562 29.2313C11.0062 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9812 11.2688 25.725C7.5 26.4187 6.525 24.8063 6.225 23.9625C6.05625 23.5313 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8688 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3437 23.625C11.475 22.65 11.8688 21.9938 12.3 21.6188C8.9625 21.2438 5.475 19.95 5.475 14.2125C5.475 12.5812 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9687 21.0938 21.2438 17.7562 21.6188C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
                fill="black"
              />
            </svg>
          </a>
        </li>
        <li className="logo">
          <h1> MD Editor<span className="highlight">.</span> </h1>
        </li>
        <li className="autosave">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.28571 0C2.41429 0 1.57855 0.346172 0.962363 0.962363C0.346172 1.57855 0 2.41429 0 3.28571V19.7143C0 20.5857 0.346172 21.4214 0.962363 22.0376C1.57855 22.6538 2.41429 23 3.28571 23H19.7143C20.5857 23 21.4214 22.6538 22.0376 22.0376C22.6538 21.4214 23 20.5857 23 19.7143V3.28571C23 2.41429 22.6538 1.57855 22.0376 0.962363C21.4214 0.346172 20.5857 0 19.7143 0H3.28571ZM9.85714 17.1087L5.40993 12.6615L7.73293 10.3385L9.85714 12.4627L16.0885 6.23136L18.4115 8.55436L9.85714 17.1087Z"
              fill="black"
            />
          </svg>
          <span className="autosave_txt">Autosave</span>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
