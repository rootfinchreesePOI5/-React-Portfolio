import React from 'react'
import './Contact.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "e9909238-8860-4ddd-82f6-f1722546689a");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            console.log("Success", res);
            alert(res.message)
        }
    };

    return (
        <div className='contact' id='contact'>
            <div className="contact-title">
                <h1>Get In Touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Lets Talk</h1>
                    <p>I'm currently available to take on my new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" />
                            <p>mohamedabdiaziz515@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" />
                            <p>Kenya, Nairobi-Kenya</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" />
                            <p>+254700809559</p>
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <form onSubmit={onSubmit} className="contact-right-form">
                        <label>
                            Your Name
                        </label>
                        <input type="text" placeholder='Enter your name' name='name' />
                        <label>
                            Your Email
                        </label>
                        <input type="email" placeholder='Enter your Email' name='Email' />
                        <label>
                            Your Number
                        </label>
                        <input type="number" placeholder='Enter your Number' name='number' />
                        <label>
                            Write your Message Here

                        </label>
                        <textarea spellCheck='true' name="message" rows="8" id="" placeholder='Enter your message'>
                        </textarea>
                        <button type='submit' className='contact-submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact
