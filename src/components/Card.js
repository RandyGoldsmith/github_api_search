import React from 'react';

const Card = (props) => {
    return (
        <div className="ui centered card">
            <div className="image">
                <img src={props.data.avatar_url} alt="the github users avatar" />
            </div>
            <div className="content">
                <a href={props.data.html_url} className="header">{props.data.name}</a>
                <div className="meta">
                    <span className="date">Joined in {new Date(props.data.created_at).getFullYear()}</span>
                </div>
                <div className="description">
                    {props.data.bio}
                </div>
            </div>
            <div className="extra content">
                <span className="right floated">
                    <i class="code branch icon"></i>
                    {props.data.public_repos} Repositories
                </span>
                <i class="users icon"></i>
                {props.data.followers} Followers                   
            </div>
        </div>
    );
}

export default Card;