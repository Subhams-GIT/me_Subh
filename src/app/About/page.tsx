import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="text-xl">About</h1>
      <p>
        I am a pre-final year Computer Engineering student at Silicon University
        aiming to become a Full-Stack Developer while having a keen interest in
        space science and how things work , understanding laws of Nature.
      </p>
      <br />
      <div className="my-4 py-2">
        <h2 className="text-xl">Experience</h2>
        <b>Web Dev Lead in GDGOC-SU</b>
        <br />
        <p>Aug 2024 - May 2025 </p>
        <br />
        <ol>
          <li>
            Conducted a workshop on building a basic version of Paytm, guiding
            participants through payment gateway creation , UI design, and
            essential backend processes.
          </li>
        </ol>
      </div>
      <div className="my-4 py-2">
        <b>GSSOC Contributor</b>
        <br />
        <p> May 2023 - Aug 2023 </p>
        <br />
        <ol>
          <li>
            Enhanced skills in frontend and backend development, API
            integration, and debugging complex code structures
          </li>
        </ol>
      </div>
    </div>
  );
};

export default page;
