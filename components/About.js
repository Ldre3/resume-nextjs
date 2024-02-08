import React from 'react'
import Title from './Title'
import Interersts from './AboutInterest'

export default class About extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="About me" color='#ffffff'/>
                <div className="columns is-mobile">
                    <div className="column has-text-right-tablet has-text-center is-12-mobile is-6-desktop">
                        <dl>
                            <dt>FULL NAME</dt>
                            <dd>Jorge Abrodes de la Rosa</dd>
                            <dt>EMAIL</dt>
                            <dd>work@abrodesdev.com</dd>
                            <dt>MOBILE NO.</dt>
                            <dd>652877446</dd>
                        </dl>
                    </div>
                    <div className="column has-text-left">
                        <img src="/static/images/mascot.png" className="mascot" />
                    </div>
                </div>
                <div className="columns">
                    <div
                        className="column detail is-10 is-offset-1 is-6-desktop is-offset-3-desktop is-10-mobile is-offset-1-mobile">
                        Hello, my name is <b>Jorge Abrodes de la Rosa</b>.
                        Now, Im studying Multiplatform Development
                        but I enjoy <b>back-end</b> the most because
                        I prefer working with <i>data</i>, <i>logic</i> and <i>databases</i>. <br></br>
                        Currently, I know <i>Java</i> but im the process of learning <i>C#</i>. <br></br>
                        I've also been working as a <b>volunteer</b> in a dog shelter for 6 years now.<br></br>
                        I Have driver license and my own car.
                    </div>
                </div>
                <Interersts />
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #34495e;
                        color: #ffffff;
                        font-size: 1.3em;
                    }
                    dl > dt {
                        color: #ffcc00;
                        font-weight: bold;
                    }
                    dl > dd {
                        margin-bottom: 30px;
                    }
                    .mascot {
                        margin-left: 20px;
                        width: 350px;
                        height: 300px;
                    }
                    .detail {
                        font-size: 0.95em;
                    }
                    .detail > b {
                        color: #F1A9A0;
                    }
                    .detail > i {
                        color: #00E640;
                    }
                `}</style>
            </section>
        )
    }
}