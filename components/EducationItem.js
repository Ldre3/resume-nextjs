import React from 'react'

export default class EducationItem extends React.Component {
    render() {
        let { color, name, time, descripcion,small, smallFontSize} = this.props
        const itemClass = small ? 'column is-5-desktop is-offset-3-desktop is-10-mobile is-offset-1-mobile' : 'column is-10 is-offset-1 is-6-desktop is-offset-3-desktop is-10-mobile is-offset-1-mobile';
        const fontSizeClass = smallFontSize ? 'small-font-size' : '';
        return (
            <div className="columns wrapper">
                <div className={`column item ${itemClass}`}>
                    <div className="columns">
                        <div className={`column is-9 has-text-left school ${fontSizeClass}`}>
                            <p>{time}</p>  
                            <h4 className={`name ${fontSizeClass}`}>
                                {name}
                            </h4>
                            {descripcion}
                        </div>

                    </div>
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 15px;
                        padding-bottom: 15px;   
                    }
                    .item {
                        border-left: 8px solid ${color};
                        background-color: #ffffff;
                        box-shadow: 10px 10px 0px #333333;
                    }
                    .school .time {

                    }
                    .school .name {
                        font-weight: bold;
                        font-size: 1.3em;
                        color: ${color};
                    }
                    .small-font-size {
                        font-size: 0.6em;
                    }
                `}</style>
            </div>
        )
    }
}