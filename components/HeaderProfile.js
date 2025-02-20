import React from 'react'

export default class HeaderBrace extends React.Component {
    render() {
        const estilo = {
            padding: 0
        }
        return (
            <div className="column profile" style={estilo}>
                <figure className="image" onClick={()=>this.props.toggle()}>
                    <img src="/static/images/profile.png" />
                </figure>
                <style jsx>{`
                    .profile {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                    }
                    figure {
                        cursor: pointer;
                        margin: 0 auto;
                        width: 500px;
                        height: 500px;
                    }
                    @media screen and (max-width: 769px) {
                        figure {
                            width: 250px;
                            height: 250px;
                        }
                    }
                    img {
                        -webkit-transition: -webkit-transform 1s ease-in-out;
                        transition: transform 1s ease-in-out;
                        -webkit-animation: flip 1s;
                        animation: flip 1s;

                    }
                    img:hover {
                        -webkit-transform: rotateY(360deg);
                        transform: rotateY(360deg);
                    }
                    @-webkit-keyframes flip {
                        from {
                            transform: rotateY(360deg) scale(0);
                        }
                        to {
                            transform: rotateY(0deg) scale(1);
                        }
                    }
                    @keyframes flip {
                        from {
                            transform: rotateY(360deg) scale(0);
                        }
                        to {
                            transform: rotateY(0deg) scale(1);
                        }
                    }
                `}</style>
            </div>
        )
    }
}