"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import RewardModal from "@/components/RewardModal";
import HeaderAds from "@/components/HeaderAds";

export default function Result() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <main>
        <div className="bg-top-1"></div>
        <div className="bg-bottom-1"></div>
        <div className="main_page">
          <div className="content_set">
            <HeaderAds />
            <div className="px-3 pt-2">
              <div className="result_box">
                <img alt="Picture of the author" width={948} height={763} className="winner_img" src="/winner.gif" />
                <h3>You Have got <span className="coin_set">400</span>coins</h3>
                <button onClick={() => router.push("/")}>
                  Play Now
                </button>
              </div>
              <div className="quiz_rules">
                <h3>Play Quiz and Win Coins!</h3>
                <ul className="quiz_rules_set">
                  <li>Play Quizzes in 25+ categories like GK, Sports, Bollywood, Business, Cricket &amp; more!</li>
                  <li>Compete with lakhs of other players!</li>
                  <li>Win coins for every game</li>
                  <li>Trusted by millions of other quiz enthusiasts like YOU!</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      <RewardModal
        show={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
}