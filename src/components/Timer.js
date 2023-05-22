import { useEffect } from "react";

import { TimerStarter } from "../utils/TimerStarter";

import "./Timer.scss";


export const Timer = () => {
    useEffect(() => {
        TimerStarter();
    }, []);

    return (
        <div className="timer">
            <div className="timer__items">
                <div className="timer__item timer__days" data-title-tablet="DD">00</div>
                <div className="timer__item timer__hours" data-title-tablet="HH">00</div>
                <div className="timer__item timer__minutes" data-title-tablet="MM">00</div>
                <div className="timer__item timer__seconds" data-title-tablet="SS">00</div>
            </div>
        </div>
    );
}