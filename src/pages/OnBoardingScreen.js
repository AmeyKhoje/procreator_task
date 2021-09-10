import Wave1 from "../assets/images/wave1.svg"
import Wave2 from "../assets/images/wave2.svg"
import Wave3 from "../assets/images/wave3.svg"

const OnBoardingScreen = (props) => {
    return (
        <div className="onboarding">
            <div className="top-waves">
                <div className="wave wave1">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="#cedbff" fillOpacity="1" d="M0,192L48,192C96,192,192,192,288,176C384,160,480,128,576,144C672,160,768,224,864,250.7C960,277,1056,267,1152,234.7C1248,203,1344,149,1392,122.7L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                    {/* <img src={Wave1} alt="" /> */}
                </div>
                <div className="wave wave2">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="#8bacff" fillOpacity="1" d="M0,224L48,224C96,224,192,224,288,208C384,192,480,160,576,149.3C672,139,768,149,864,165.3C960,181,1056,203,1152,208C1248,213,1344,203,1392,197.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>

                    {/* <img src={Wave2} alt="" /> */}
                </div>
                <div className="wave wave3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="#6893fd" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,128C384,117,480,139,576,165.3C672,192,768,224,864,250.7C960,277,1056,299,1152,288C1248,277,1344,235,1392,213.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                    </svg>
                    {/* <img src={Wave3} alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default OnBoardingScreen;