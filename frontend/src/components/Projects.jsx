import congruent from '../images/congruent.png'
import adrui from '../images/adr-ui.png'

const project_intro = 'I am a software engineer who looks to turn complex problems into elegant solutions. Experienced in Ruby on Rails, JavaScript and React with a background in English literature and writing. I found web development when I realized challenging myself is the best way to approach life.'
const projects = [
    {
        name: 'dillonperino.com',
        image: congruent,
        description: "dillonperino.com is an art-portfolio website built using ReactJS, HTML, CSS and Bootstrap. Dillonperino.com is a living and changing collection of art that reflects the artist's accomplishments, skills and experiences.",
        github: 'https://github.com/am20dipi/dillonperino'
    },
    {
        name: 'ADR-UI',
        image: adrui,
        description: 'ADR-UI is a UI library that exemplifies simple, reusable code to be utilized in future applications. ADR-UI utilizes JavaScript, HTML, CSS, Webpack and Node Package Manager.',
        github: 'https://github.com/am20dipi/adr-ui'
    }
]

function Projects() {
    return (
        <div className="container">
            <div className="p">
                <div className="p-wrapper">
                    <h4 className="p-text" style={{fontSize: '50px', fontFamily: 'Nighty'}}>BACKEND SOFTWARE ENGINEER</h4>
                    <h3 className="p-text" style={{fontSize: '28px'}}>WITH FULLSTACK EXPERIENCE</h3>
                    <br/>
                    <p className="p-desc" style={{fontWeight: '100'}}>{project_intro}</p> 
                    <br/>
                    <div className="card-columns" id="project">
                        {projects.map((project, index) => {
                            return (
                            <div className="card" id="project" key={index} onClick={() => window.open(project.github)}>
                             {/* <img className="card-img" src={project.image} alt={project.name} style={{width: '40%'}} /> */}
                                <div className="card-body">
                                    <h5 className="card-title">{project.name}</h5>
                                    <p className="card-text text-muted">{project.description}</p>
                                </div>
                                <div className="card-footer">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="card-link" ><i className="fa fa-github"></i></a>
                                </div>
                            </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects