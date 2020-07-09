import React from 'react';
import GitLogo from '../../assets/githublogo.png';
import './Github.css'

const GithubCard = (props) => {
    

    return(
        <div className = 'Card'>
            <div className = 'gitImg'>
                <img alt = 'github logo' className ='GithubLogo' src ={GitLogo}/>
            </div>
            <div className = 'gitInfo'>
            <h3>Username: {props.user.login}</h3>
            <h3>Repos: {props.user.public_repos}</h3>
            </div>
        </div>
    )
}

export default GithubCard;