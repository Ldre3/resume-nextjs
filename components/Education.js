import React from 'react'
import Title from './Title'
import Item from './EducationItem'

export default class Education extends React.Component {
    render() {
        return (
            <section className="hero wrapper has-text-centered">
                <Title title="Education" color='#ffffff'/>
                <div className="container">
                    <Item 
                        time="Current"
                        name="CFGS Multiplatform Development"
                        descripcion="Ended first year with 7 honorable mentions"
                        color="#2ecc71"
                    />
                    <Item 
                        time="2021"
                        name="Bussiness Management Degree"
                        color="#3498db"
                        small
                        smallFontSize
                    />
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #c0392b url('/static/images/bg-edu.jpg');
                        background-size: cover;
                        color: #333333;
                        font-size: 1.3em;
                    }
                `}</style>
            </section>
        )
    }
}