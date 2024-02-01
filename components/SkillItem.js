import React from 'react'

export default class SkillItem extends React.Component {
    render() {
        let { img, color, value } = this.props
        return (
            <div className="column is-2-desktop has-text-center" style={{'display': 'flex'}}>
                <div className={'circle c100 p' + value + ' dark big orange'}>
                    <span>
                        <img src={img} alt=""/>
                    </span>
                    <div className="slice">
                        <div className="bar"></div>
                        <div className="fill"></div>
                    </div>
                    <style jsx>{`
                        img {
                            margin-top: 30px;
                            max-width: 60px;
                        }
                        .bar {
                            border-color: ${color} !important;
                        }
                        .fill {
                            border-color: ${color} !important;
                        }
                        .circle {
                            margin: 10px auto;
                            
                        }
                    `}</style>
                </div>
            </div>
        )
    }
}