import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      {
        threshold: 0.12,
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <a href="#" className="logo">
          Skill<span>Track</span>
        </a>

        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#about">About</a>
        </div>

        <a href="#about" className="nav-button">
          Get Started
        </a>
      </nav>


      {/* ================= HERO ================= */}

      <main>

        <section className="hero">

          <div className="hero-content reveal">

            <div className="badge">
              <span>✦</span>
              AI-powered career growth
            </div>

            <h1>
              Turn your skills into
              <span> your career advantage.</span>
            </h1>

            <p>
              SkillTrack helps you understand what you know,
              discover what to learn next, and build a clearer
              path toward your career goals.
            </p>

            <div className="hero-buttons">

              <a href="#about" className="primary-btn">
                Get Started
                <span>→</span>
              </a>

              <a href="#features" className="secondary-btn">
                Explore Features
              </a>

            </div>

            <div className="hero-note">
              <span>✓</span>
              Built for focused, continuous growth
            </div>

          </div>


          {/* ================= PRODUCT DASHBOARD ================= */}

          <div className="dashboard-wrapper reveal">

            <div className="dashboard">

              <div className="dashboard-top">

                <div>
                  <span className="dashboard-label">
                    YOUR DASHBOARD
                  </span>

                  <h3>
                    Skill Overview
                  </h3>
                </div>

                <div className="status">
                  <span>●</span>
                  On track
                </div>

              </div>


              {/* Overall Progress */}

              <div className="overall-card">

                <div className="overall-top">

                  <div>
                    <span>Career readiness</span>
                    <strong>78%</strong>
                  </div>

                  <div className="progress-circle">
                    78
                  </div>

                </div>

                <div className="progress-line">
                  <div></div>
                </div>

                <p>
                  You're making steady progress toward your goal.
                </p>

              </div>


              {/* Skills */}

              <div className="dashboard-section">

                <div className="section-title">
                  <span>Your skills</span>
                  <a href="#features">View all</a>
                </div>


                <div className="skill-row">

                  <div className="skill-info">
                    <div className="skill-icon react">
                      R
                    </div>

                    <div>
                      <strong>React</strong>
                      <small>Frontend development</small>
                    </div>
                  </div>

                  <div className="skill-score">
                    <strong>85%</strong>

                    <div className="mini-progress">
                      <div className="react-progress"></div>
                    </div>
                  </div>

                </div>


                <div className="skill-row">

                  <div className="skill-info">
                    <div className="skill-icon js">
                      JS
                    </div>

                    <div>
                      <strong>JavaScript</strong>
                      <small>Programming</small>
                    </div>
                  </div>

                  <div className="skill-score">
                    <strong>72%</strong>

                    <div className="mini-progress">
                      <div className="js-progress"></div>
                    </div>
                  </div>

                </div>


                <div className="skill-row">

                  <div className="skill-info">
                    <div className="skill-icon node">
                      N
                    </div>

                    <div>
                      <strong>Node.js</strong>
                      <small>Backend development</small>
                    </div>
                  </div>

                  <div className="skill-score">
                    <strong>64%</strong>

                    <div className="mini-progress">
                      <div className="node-progress"></div>
                    </div>
                  </div>

                </div>

              </div>


              {/* Recommendation */}

              <div className="recommendation">

                <div className="recommendation-icon">
                  ✦
                </div>

                <div>
                  <span>AI recommendation</span>

                  <strong>
                    Focus next on REST APIs
                  </strong>
                </div>

                <span className="arrow">
                  →
                </span>

              </div>

            </div>

          </div>

        </section>


        {/* ================= FEATURES ================= */}

        <section className="features" id="features">

          <div className="section-heading reveal">

            <span>FEATURES</span>

            <h2>
              Everything you need to grow.
            </h2>

            <p>
              A focused workspace for understanding your
              strengths and planning your next move.
            </p>

          </div>


          <div className="feature-grid">

            <article className="feature-card reveal">

              <div className="feature-icon">
                ◈
              </div>

              <span className="feature-number">
                01
              </span>

              <h3>
                Track Your Skills
              </h3>

              <p>
                Keep your technical and professional skills
                organized in one simple dashboard.
              </p>

              <div className="feature-link">
                Learn more →
              </div>

            </article>


            <article className="feature-card reveal">

              <div className="feature-icon">
                ✦
              </div>

              <span className="feature-number">
                02
              </span>

              <h3>
                Smart Roadmaps
              </h3>

              <p>
                Discover which skills to focus on next based
                on the career direction you're working toward.
              </p>

              <div className="feature-link">
                Learn more →
              </div>

            </article>


            <article className="feature-card reveal">

              <div className="feature-icon">
                ↗
              </div>

              <span className="feature-number">
                03
              </span>

              <h3>
                See Your Progress
              </h3>

              <p>
                Visualize your development and understand
                where you're improving over time.
              </p>

              <div className="feature-link">
                Learn more →
              </div>

            </article>

          </div>

        </section>


        {/* ================= HOW IT WORKS ================= */}

        <section
          className="how-it-works"
          id="how-it-works"
        >

          <div className="section-heading dark-heading reveal">

            <span>HOW IT WORKS</span>

            <h2>
              From learning to career-ready.
            </h2>

            <p>
              A simple process designed to keep your
              learning journey focused.
            </p>

          </div>


          <div className="steps">

            <div className="step reveal">

              <div className="step-top">
                <span>01</span>
                <div className="step-line"></div>
              </div>

              <h3>
                Choose your goal
              </h3>

              <p>
                Define the role or career direction
                you're working toward.
              </p>

            </div>


            <div className="step reveal">

              <div className="step-top">
                <span>02</span>
                <div className="step-line"></div>
              </div>

              <h3>
                Track your skills
              </h3>

              <p>
                Add the skills you already have and
                understand your current level.
              </p>

            </div>


            <div className="step reveal">

              <div className="step-top">
                <span>03</span>
                <div className="step-line"></div>
              </div>

              <h3>
                Keep improving
              </h3>

              <p>
                Follow your personalized direction and
                build confidence one skill at a time.
              </p>

            </div>

          </div>

        </section>


        {/* ================= CTA ================= */}

        <section
          className="cta reveal"
          id="about"
        >

          <div className="cta-badge">
            ✦ Start building your path
          </div>

          <h2>
            Your next skill could
            <span> change everything.</span>
          </h2>

          <p>
            Make your learning more intentional and
            your career direction more clear.
          </p>

          <a href="#features" className="primary-btn">
            Start Tracking
            <span>→</span>
          </a>

        </section>

      </main>


      {/* ================= FOOTER ================= */}

      <footer>

        <a href="#" className="logo">
          Skill<span>Track</span>
        </a>

        <p>
          Build skills. Build your future.
        </p>

        <div className="footer-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
        </div>

      </footer>

    </div>
  );
}

export default App;