"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function RewardModal({ show, onClose }) {
    const [visible, setVisible] = useState(show);
    const [closing, setClosing] = useState(false);

    useEffect(() => {
        if (show) {
            setVisible(true);
            setClosing(false);
        }
    }, [show]);

    const handleClose = () => {
        setClosing(true);

        setTimeout(() => {
            setVisible(false);
            onClose();
        }, 300); // match CSS animation duration
    };

    if (!visible) return null;

    return (
        <>
            {/* backdrop */}
            <div
                className={`modal-backdrop-custom ${closing ? "hide" : "show"}`}
                onClick={handleClose}
            />

            {/* modal */}
            <div
                className={`fade ads-container modal ${closing ? "hide" : "show"}`}
                tabIndex={-1}
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">

                            {/* close button */}
                            <div
                                className="close-button-container"
                                onClick={handleClose}
                            >
                                <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </div>

                            <div className="relative reward-container text-center text-white flex flex-col justify-center items-center mx-4 p-0">
                                <Image
                                    src="/coin.png"
                                    alt="reward"
                                    width={128}
                                    height={128}
                                />

                                <h2 className="mb-4 new-reward">
                                    New Reward Available
                                </h2>
                                <h2 className="mb-4 get-coins">
                                    Get Instant 100 Coins!
                                </h2>
                                <p className="watch-reward mb-6">
                                    Watch a simple ad and get rewarded
                                </p>

                                <button
                                    className="claim-button text-black font-bold py-3 px-4 mr-2"
                                    onClick={handleClose}
                                >
                                    Claim
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}