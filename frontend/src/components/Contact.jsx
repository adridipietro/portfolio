import { useRef } from 'react'
import emailjs from '@emailjs/browser'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

toast.configure()

const SERVICE_ID = "service_ed8neos"
const TEMPLATE_ID = 'template_5uffohf'
const USER_ID = "yX0TIcG5EBQ687WpH"

function Contact(){
    const form = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()

        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, USER_ID)
            .then((result) => {
                console.log(result.text)
                
            })
            .catch((error) => {
                console.log(error)
            })
            successNotify()    
            e.target.reset()
            
        }

    const successNotify = () => {
        toast.success('Message sent!', { position: toast.POSITION.TOP_RIGHT})
    }

    return (
        <div className="c">
            <div className="c-bg">
                <div className="c-wrapper">
                    <div className="c-left">
                        <h1 className="c-title">.CONTACT. .ME.</h1>
                        <div className="c-info" id="contact">
                            <div className="c-info-item" id="contact">
                                <a href="https://www.linkedin.com/in/adriana-dipietro/" className="c-icon" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin"></i></a>
                            </div>
                            <div className="c-info-item" id="contact">
                                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=adrianadipietro4@gmail.com&su=Hi+Adriana" className="c-icon" target="_blank" rel="noopener noreferrer"><i class="fa-regular fa-envelope"></i></a>
                            </div>
                            <div className="c-info-item" id="contact">
                                <a href="https://github.com/adridipietro" target="_blank" className="c-icon" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="c-right">
                        <p className="c-description">
                            <b>Questions?</b> <span style={{fontWeight: '600'}}>Get in touch.</span> 
                        </p>
                        <form ref={form} onSubmit={handleSubmit} className="contact-form">
                            <input type="text" placeholder="name" name="name" required />
                            <input type="email" placeholder="email" name="email" required/>
                            <textarea rows="5" placeholder="type your message here" name="message"required />
                            <button className="submit">submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact