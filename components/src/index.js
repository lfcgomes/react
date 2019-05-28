import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>

            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.findName()}
                    avatar={faker.image.avatar()}
                    timeAgo={faker.date.past().toISOString()}
                    content={faker.lorem.sentences(1)}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.findName()}
                    avatar={faker.image.avatar()}
                    timeAgo={faker.date.past().toISOString()}
                    content={faker.lorem.sentences(1)}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.findName()}
                    avatar={faker.image.avatar()}
                    timeAgo={faker.date.past().toISOString()}
                    content={faker.lorem.sentences(1)}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.findName()}
                    avatar={faker.image.avatar()}
                    timeAgo={faker.date.past().toISOString()}
                    content={faker.lorem.sentences(1)}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author={faker.name.findName()}
                    avatar={faker.image.avatar()}
                    timeAgo={faker.date.past().toISOString()}
                    content={faker.lorem.sentences(1)}
                />
            </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));
