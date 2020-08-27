import React from 'react';

function About () {


    return(
        <div className="About">
            <div className="box">
                <div className="box-title">
                    <h1>ABOUT</h1>
                </div>
                <hr></hr>
                <div className="box-content">
                    <p>Hello, my name is Faiz.In this React app we are fetching
                        data from unsplash API and mapping it to our browser. I didn't 
                        focus to the styling much just clearing the API concepts.<br/> In this app 
                        you can search any random photos and it will give you 12 results at a time.
                        In the Home Section I have used Infinite scroll for endless images.
                        <br/> Hope you will like it.
                    </p>
                    <a href="https://www.linkedin.com/in/muhammad-faiz-42bb23190/"><button>CONNECT</button></a>
                </div>
            </div>
        </div>     
    )
}

export default About;