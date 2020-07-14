import React from 'react';

import './Github.css'
import GitHubIcon from '@material-ui/icons/GitHub';

const GithubCard = (props) => {
    
    const bStyle = {
        color: "#2E2E2E",
        width: '2em',
        height: '2em',
    }

    return(
        <button className = 'Card'>
                <GitHubIcon style={bStyle}/>
            <div className = 'gitInfo'>
            <h3>Username: {props.user.login}</h3>
            <h3>Repos: {props.user.public_repos}</h3>
            </div>
        </button>
    )
}

export default GithubCard;