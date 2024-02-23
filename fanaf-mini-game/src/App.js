import React, { useState, useEffect } from "react";
import './App.css';

import {FanafGame} from "./components/FanafGame/FanafGame.js"

export const App = () => {
    useEffect(() => {
        const onPageLoad = () => {
            console.log("appLoaded");
        };

        if (document.readyState === "complete") {
            onPageLoad();
        } else {
            window.addEventListener("load", onPageLoad, false);
            return () => window.removeEventListener("load", onPageLoad);
        }
    }, []);

    return (
        <div className="App">
            <FanafGame/>
        </div>
    );
};
