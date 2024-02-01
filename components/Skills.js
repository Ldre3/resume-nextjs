import React from 'react'
import Title from './Title'
import Group from './SkillItemGroup'
import circle from './../static/css/circle.css'

export default class Skills extends React.Component {
    render() {
        const skillImgs = [
            {
                name: 'Back-ends',
                list: [
                    { name: 'java', color: '#1e77b7', value: '100' },
                    { name: 'hibernate', color: '#b09f9e', value: '100' },
                    { name: 'spring', color: '#70af50', value: '100' }
                ]
            },
            {
                name: 'Front-ends',
                list: [
                    { name: 'html5', color: '#f16529', value: '100' },
                    { name: 'css3', color: '#29a9df', value: '100' },
                    { name: 'javascript', color: '#f7df1e', value: '100' },
                    { name: 'angularjs', color: '#e80909', value: '100' }
                ]
            },
            {
                name: 'Databases',
                list: [
                    { name: 'mysql', color: '#0784af', value: '100' },
                    { name: 'mongo', color: '#13aa52', value: '100' }
                ]
            },
            {
                name: 'Tools',
                list: [
                    { name: 'git', color: '#F05032', value: '100' },
                    { name: 'npm', color: '#cb3736', value: '100' },
                    { name: 'docker', color: '#1792b5', value: '100' },
                    { name: 'Junit', color: '#13aa52', value: '100' },
                ]
            } 
        ]

        return (
            <section className="hero wrapper has-text-centered">
                <style dangerouslySetInnerHTML={{ __html: circle }} />
                <Title title="Technologies" color='#ffffff'/>
                <div className="container">
                    {
                        skillImgs.map((item, key) => (
                            <Group key={key} name={item.name} items={item.list} />    
                        ))
                    }
                </div>
                
                <style jsx>{`
                    .wrapper {
                        padding-top: 50px;
                        padding-bottom: 50px;
                        background: #2f353f;
                        background-size: cover;
                        color: #333333;
                        font-size: 1.3em;
                    }
                `}</style>
            </section>
        )
    }
}