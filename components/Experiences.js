import React from 'react'
import Title from './Title'
import Timeline from './ExperiencesTimelineItem'

export default class Experiences extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Experience" color='#2c3e50'/>
                <div className="container">
                    <Timeline side="left" time="Oct 2021 - Jan 2021" color="#e67e22">
                        <h4 style={{'color': '#e67e22'}}>RFPA</h4>
                        <p>
                            <i className="position">Collegiate Soccer Referee</i><br/>
                            Certified referee by the technical committee of referees with a 3RFPA level.<br/>
                            Officiated matches from grassroots football to 3RFPA level.<br/>
                            <b>Performed well under pressure.</b><br/>
                            <b>Collaborated</b> effectively with other members of the officiating team.<br/>
                            <b>Demonstrated conflict resolution skills.</b>
                        </p>
                    </Timeline> 
                    <Timeline side="right" time="Jun 2018 - Aug 2019" color="#3498db">
                        <h4 style={{'color': '#3498db'}}>Astilleros Armon</h4>
                        <p>
                            <i className="position">Trainee</i><br/>
                            <b>Multilingual telephone customer service</b>.<br/>
                            Request and processing of necessary permits for port access and usage.<br/>
                            Warehouse management using <b>business software.</b>
                        </p>
                    </Timeline>
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #bdc3c7;
                        color: #333333;
                        font-size: 1.3em;
                    }
                    h4 {
                        font-size: 1.2em;
                        font-weight: bold;
                    }
                    p {
                        font-size: 0.8em;
                    }
                    i.position {
                        color: #c0392b;
                    }
                `}</style>
            </section>
        )
    }
}