import { CountdownTimer } from './CountdownTimer';

export function TimerStarter () {
    
    const elDays2 = document.querySelector('.timer .timer__days');
    const elHours2 = document.querySelector('.timer .timer__hours');
    const elMinutes2 = document.querySelector('.timer .timer__minutes');
    const elSeconds2 = document.querySelector('.timer .timer__seconds');
    const deadline = new Date(2023, 4, 31);
    new CountdownTimer(deadline, (timer) => {
        elDays2.textContent = timer.days;
        elHours2.textContent = timer.hours;
        elMinutes2.textContent = timer.minutes;
        elSeconds2.textContent = timer.seconds;
        elDays2.dataset.title = timer.daysTitle;
        elHours2.dataset.title = timer.hoursTitle;
        elMinutes2.dataset.title = timer.minutesTitle;
        elSeconds2.dataset.title = timer.secondsTitle;
    });
}