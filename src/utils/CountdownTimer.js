/* eslint-disable no-unused-expressions */
export class CountdownTimer {
    constructor(deadline, cbChange, cbComplete) {
        this._deadline = deadline;
        this._cbChange = cbChange;
        this._cbComplete = cbComplete;
        this._timerId = null;
        this._out = {
            days: '',
            hours: '',
            minutes: '',
            seconds: '',
            daysTitle: '',
            hoursTitle: '',
            minutesTitle: '',
            secondsTitle: ''
        };
        this._start();
    }
    static declensionNum(num, words) {
        return words[(num > 1)?1:0];
    }
    _start() {
        this._calc();
        this._timerId = setInterval(this._calc.bind(this), 1000);
    }
    _calc() {
        const diff = this._deadline - new Date();
        const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
        const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
        const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
        const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
        this._out.days = days < 10 ? '0' + days : days;
        this._out.hours = hours < 10 ? '0' + hours : hours;
        this._out.minutes = minutes < 10 ? '0' + minutes : minutes;
        this._out.seconds = seconds < 10 ? '0' + seconds : seconds;
        this._out.daysTitle = CountdownTimer.declensionNum(days, ['Day', 'Days']);
        this._out.hoursTitle = CountdownTimer.declensionNum(hours, ['Hour', 'Hours']);
        this._out.minutesTitle = CountdownTimer.declensionNum(minutes, ['Minute', 'Minutes']);
        this._out.secondsTitle = CountdownTimer.declensionNum(seconds, ['Second', 'Seconds']);
        this._cbChange ? this._cbChange(this._out) : null;
        if (diff <= 0) {
            clearInterval(this._timerId);
            this._cbComplete ? this._cbComplete() : null;
        }
    }
}