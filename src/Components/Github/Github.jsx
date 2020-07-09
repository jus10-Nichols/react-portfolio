import React from 'react';
import axios from 'axios';
import GithubCard from './GithubCard';
import './Github.css'
export default class GithubInfo extends React.Component {
    constructor(){
        super()
        this.state = {
        user: {},
        followers:[]
        };
    }
    componentDidMount() {
        console.log("first render(mounting)");
        axios
        .get("https://api.github.com/users/jnichols93")
        .then(res => this.setState({ user: res.data }))
        //.catch(err => console.log("error"));
        axios
        .get("https://api.github.com/users/jnichols93/followers")
        
        .then(res => this.setState({ followers: res.data }))}
        
        render() {
            console.log('state', this.state)
            return (
                <div className = 'gitProfile'>
                    <GithubCard user = {this.state.user}/>
                </div>
            );}


}