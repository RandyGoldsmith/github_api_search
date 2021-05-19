import React from 'react';

const Card = (props) => {
    return (
        <div className="ui centered card">
            <div className="image">
                <img src={props.card.avatar_url} alt="the github users avatar" />
            </div>
            <div className="content">
                <a href={props.card.html_url} className="header">{props.card.name}</a>
                <div className="meta">
                    <span className="date">Joined in {new Date(props.card.created_at).getFullYear()}</span>
                </div>
                <div className="description">
                    {props.card.bio}
                </div>
            </div>
            <div className="extra content">
                <span className="right floated">
                    <i class="code branch icon"></i>
                    {props.card.public_repos} Repositories
                </span>
                <i class="users icon"></i>
                {props.card.followers} Followers                   
            </div>
        </div>
    );
}

export default Card;