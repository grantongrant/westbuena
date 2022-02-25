import { NavLink } from "react-router-dom";
import "./AboutMe.css";

const AboutMe = () => {

    return (
        <>
        <div className="about-me-container">
            <div className="about-me-top-page">
                <div className="about-left">
                    <div className="about-me-header1">Welcome to West Buena</div>
                    <div className="about-me-header2">Grant Russell</div>
                    <div className="about-body-text1">
                    
                    <p>I live in Chicago, in the neighborhood of Buena Park. I live on West Buena Avenue. 
                    For this West Elm clone site, the name West Buena just felt right. <strong>The ideas of home and place are important to me</strong>, 
                    and I spend a good amount of time curating my space with the help of websites like West Elm.</p>

                    <p>Navigating this site isn't just a demonstration of the skill set that I learned while at App Academy; it's also an opportunity 
                    to learn a little about me.</p>

                    <a href="https://linkedin.com/in/grant-ellis-russell" target="_blank" rel="noreferrer"><p>@grantongrant</p></a>
                
                    </div>
                </div>
                <div className="about-right">
                    <img src="https://westbuena.s3.us-east-2.amazonaws.com/self1.png"/>
                </div>

            </div>
            <div className="about-me-middle-page">
                <div className="about-body-text2">
                
                <p>In addition to being a Full Stack Web Developer, <strong>I am a master gardener</strong>; this is the reason West Buena 
                has a gardening theme. On free days you can find me in the middle of a forest, searching for rare plants. You may also find me identifying pests that plague 
                the trees that line my street. Or maybe I'm volunteering with the neighborhood giving garden, or helping the neighborhood maintain its public spaces.</p>
                
                </div>
                <div className="about-body-text2">
                
                <p><strong>I'm curious</strong>. I seek knowledge; knowing this gets you very close to my core being. The urge to know has taken me to amazing
                places around the world. It's also what drove me to know more about the natural world. And it's what drove me here, to know 
                more about technology. I always want to know more, and I want to do more. I bring this energy and this intensity to every part of my life.</p>
                
                </div>
            </div>
            <div id="mental-health-awareness">I support mental health awareness.</div>
            <div id="bottom-about" className="about-body-text2">
                <div>

                <p>My life is complicated by a diagnosis of Bipolar II Disorder. Having lived with it for 35 years I understand it well, and I understand how 
                to manage it while still being a productive citizen, friend, family-member, and employee. But there are still challenges; it is ever-present. 
                I choose to be open about my diagnosis to demonstrate to others that it's possible to thrive, even under difficult circumstances.</p> 

                <p>The future looks bright. I'm ready to share more, to know more, and to do more.</p> 

                </div>
            </div>
        </div>
         </>
    )
};

export default AboutMe;