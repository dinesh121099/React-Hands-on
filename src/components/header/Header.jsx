import React from 'react'

export default class Header extends React.Component{
    render(){
        return(
            <div>
                <img src="https://mirafra.com/wp-content/uploads/2023/07/mirafra-logo-hires-1.svg" alt="logo"/>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</a></li>
                        <li><a href="https://mirafra.com/">About Us</a></li>
                        <li><a href="https://chatgpt.com/">ChatGPT</a></li>
                    </ul>
                </nav>
            </div>
        )
    }
}
