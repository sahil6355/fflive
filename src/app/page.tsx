import QuizBox from "@/components/QuizBox";
import HeaderAds from "@/components/HeaderAds";
import ContentAds from "@/components/ContentAds";

export default function Home() {
  return (
    <main>
      <div className="bg-top-1"></div>
      <div className="bg-bottom-1"></div>
      <div className="main_page">
        <div className="content_set">
          <HeaderAds />
          <div className="px-3 pt-2">
            <h1 className="heading">Quick Start!</h1>
            <p className="description">
              Answer 2 questions and win upto 200 coins.
            </p>
            <QuizBox />

            <div className="featured-section mt-4">
              <h3>Why Choose Our Quiz Platform?</h3>
              <div className="features-grid">
                <div className="feature-item">
                  <h5>🏆 Daily Rewards</h5>
                  <p>Login daily to get bonus coins and special rewards</p>
                </div>
                <div className="feature-item">
                  <h5>📱 Mobile Friendly</h5>
                  <p>
                    Play seamlessly on any device - mobile, tablet, or desktop
                  </p>
                </div>
                <div className="feature-item">
                  <h5>⚡ Live Contests</h5>
                  <p>Join real-time quiz competitions with players worldwide</p>
                </div>
              </div>
            </div>

            <ContentAds />

            <div className="fact_box">
              <h5>#Fun Fact</h5>
              <p>
                Mahendara Singh Dhoni clenches a title of being the most
                successful captain in the IPL history.
              </p>
            </div>

            <div className="how-to-play mt-4">
              <h3>How to Play?</h3>
              <ol className="play-steps">
                <li>Select your favorite quiz category</li>
                <li>Answer questions correctly to earn coins</li>
                <li>Compete on leaderboards</li>
                <li>Redeem coins for exciting rewards</li>
              </ol>
            </div>

            <div className="quiz_rules">
              <h3>Play Quiz and Win Coins!</h3>
              <ul className="quiz_rules_set">
                <li>
                  Play Quizzes in 25+ categories like GK, Sports, Bollywood,
                  Business, Cricket &amp; more!
                </li>
                <li>Compete with lakhs of other players!</li>
                <li>Win coins for every game</li>
                <li>Trusted by millions of other quiz enthusiasts like YOU!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
