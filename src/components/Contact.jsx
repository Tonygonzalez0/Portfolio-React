import React from 'react';

const Contact = () =>{
    return(
        <div className="contact--container__style">
            <hr/>
            <h2 className="main--text__style">Get In Touch</h2>

            <div className="form--email__container">
                <div className="form--container__style">
                    <div className="secondary--container__style">
                        <form action="">
                            <label htmlFor="name">Name</label>
                            <input type="text" placeholder="Name"/>

                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" placeholder="Email"/>

                            <label htmlFor="comment">Comments</label>
                            <input type="text" placeholder="Comments"/>

                            <button className="submit--button__style">Submit</button>
                        </form>
                    </div>
                </div>

                <div className="email--card__style">
                    <i className="far fa-envelope"></i>
                    <h3>Email</h3>  
                    <a href="mailto:t.gonzalez.2000@gmail.com" target="_blank" rel="noopener noreferrer">t.gonzalez.2000@gmail.com</a>  
                </div>
            </div>
        </div>
    )
};

export default Contact;