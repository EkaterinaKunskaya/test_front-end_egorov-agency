import logo from './assets/images/logo.svg';
import arrow from './assets/images/arrow.svg';

import { Timer } from './components/Timer';
import { Footer } from './components/Footer';

import "./App.scss";


function App() {
    return (
        <div className="wrapper" id="anchor">
            <div className="element-left"></div>
            <div className="element-right"></div>
            <div className="content" id="content">
                <a href="#anchor"><img className="logo" alt="logo" src={logo} /></a>
                <div className="section-title-text">
                    <h1 className="title">Under Construction</h1>
                    <span className="text">We're making lots of improvements and will be back soon</span>
                </div>
                <Timer />
                <div className="section-btn-text">
                    <span className="text">Check our event page when you wait:</span>
                    <a
                        className="button-main"
                        href="https://egorovagency.by/#main"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Go to the event
                        <img alt="arrow" src={arrow} />
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default App;