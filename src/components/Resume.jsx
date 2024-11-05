import React from "react";
import './Resume.css'

function Resume() {
  return (
    <div className="resume-container">
      <header className="header">
        <h1>Aman Dubey</h1>
        <p className="contact-info">
          <span>📧 Email: superaman200@gmail.com</span>
          <span>📞 Phone: 7985586135</span>
        </p>
      </header>

      <section className="education">
        <h2>Educational Qualifications</h2>
        <ul>
          <li>
            <strong>KIET Group Of Institution</strong> — BTech in Computer
            Science
            <br />
            <em>Graduation year: 2026</em>
            <br />
            <em>CGPA: 8.43</em>
          </li>
          <li>
            <strong>Dr.Virendra Swaroop Education Center</strong> — 12 class
            <br />
            <em>Passed: 2021</em>
            <br />
            <em>Percentage(PCM): 96%</em>
          </li>
          <li>
            <strong>Sri Ram Education Center</strong> — 10 class
            <br />
            <em>Passed: 2019</em>
            <br />
            <em>Percentage: 94.4%</em>
          </li>
        </ul>
        <h2>Skills</h2>

        <ul>
          <li>c++(DSA)</li>
          <li>MERN Stack</li>
          <li>SQL</li>
        </ul>
        <h2>Projects</h2>
        <strong>The Blog Web App</strong>
        <ul>
          <li>
            <em>
              Used javascript,node js,express js,mongo db, react, JWT
              authenication.
            </em>
            <br />
            <em>
              In this user can create different categories blog update and
              delete them with proper JWT Authentication.
            </em>
            <br />
            <a href="https://github.com/aman1015/BlogApp3">Git Hub link</a>
          </li>
        </ul>

        <strong>File Sharing Web App</strong>
        <ul>
          <li>
            <em>used javascript,node js,express js,mongo db, react</em>
            <br />
            <em>
              It generate a link of selected files and other user can easily
              download it.
            </em>
            <br />
            <a href="https://github.com/aman1015/fileSharing.git">
              Git Hub link
            </a>
          </li>
        </ul>
        <h2>Practice Projects</h2>
        <ul>
          <li>
            <a href="https://aman1015.github.io/socialMedia/">
              Social media app
            </a>
          </li>

          <li>
            <a href="https://lucent-buttercream-2906ca.netlify.app/">
              Amazon frontened clone
            </a>
          </li>
        </ul>

        <h2>Achievements</h2>
        <ul>
          <li>Solved 300+ question on leetcode, gfg, codeshef</li>
          <li>
            <a
              href="https://leetcode.com/u/superaman200/
"
            >
              leetcode profile
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1-r7HWV7QIsDUClS_POecmXWsxNX2LeWe/view?usp=drivesdk">
              web development certificate
            </a>
          </li>
        </ul>
      </section>

      <footer className="footer">
        <p>&copy; 2024 Aman Dubey</p>
      </footer>
    </div>
  );
}

export default Resume;
