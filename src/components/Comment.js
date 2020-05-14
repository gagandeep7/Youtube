import React from 'react';
import Faker from 'faker';

class Comment extends React.Component {


    render() {
        // no of comments
        const arr = ['', '', ''];
        return (
            <div class="ui comments">
                {arr.map((e, id) => {
                    // get random date and likes
                    let random = Math.ceil(Math.random() * 365);
                    let starRandom = Math.ceil(Math.random() * 50);

                    return (<div class="comment">
                        <a class="avatar">
                            <img src={Faker.image.avatar()} alt = 'avatar' />
                        </a>
                        <div class="content">
                            <a class="author">{Faker.name.firstName()}</a>
                            <div class="metadata">
                                <div class="date">{random} days ago</div>
                                <div class="rating">
                                    <i class="star icon"></i>
                            {starRandom} Faves
                        </div>
                            </div>
                            <div class="text">
                                <p>{Faker.lorem.sentences()}</p>
                            </div>
                        </div>
                    </div>);
                })}
            </div>
        );
    }


}


export default Comment;