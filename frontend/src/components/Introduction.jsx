import React from 'react'
import selfie from '../images/IMG_9857.jpg'

const skillset = [
    {
        name: 'RUBY ON RAILS'
    },
    {
        name: 'JAVASCRIPT | REACT'
    },
    {
        name: 'KAFKA | gRPC | GRAPHQL'
    },
    {
        name: 'HTML | CSS | BOOTSTRAP | MATERIAL-UI'
    },
    {
        name: 'CI/CD'
    },
]

function Introduction(){
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">
                    <h2 className="i-name">.ADRIANA. .DIPIETRO.</h2>
                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">WEB DEVELOPER</div>
                            <div className="i-title-item">TECHNICAL WRITER</div>
                            <div className="i-title-item">FREELANCER</div>
                        </div>
                    </div>
                    <div className="i-skillset" style={{paddingTop:'60px'}} >
                        {skillset.map((skill, index) => {
                            return (
                                <p key={index}>{skill.name}</p>
                            )
                        })}
                    </div>
                    <br/>
                    <div className="c-info" >
                        {/* linkedin */}
                        <div className="c-info-item" id="introduction">
                            <a href="https://www.linkedin.com/in/adriana-dipietro/" className="c-icon" id="introduction" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                            {/*  /adriana-dipietro */}
                        </div>
                        {/*  email */}
                        <div className="c-info-item" id="introduction">
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adrianadipietro4@gmail.com&su=Hi+Adriana" className="c-icon" id="introduction" target="_blank" rel="noopener noreferrer"><i class="fa-regular fa-envelope"></i></a>
                            {/* adrianadipietro4@gmail.com */}
                        </div>
                        {/* github */}
                        <div className="c-info-item" id="introduction">
                            <a href="https://github.com/adridipietro" target="_blank" className="c-icon" id="introduction" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="i-right">
                <div className="i-right-wrapper">
                   <img className="i-img" src={selfie} alt="" /> 
                </div>
                
            </div>
        </div>
    )
}

export default Introduction