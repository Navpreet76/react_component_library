import React from 'react';
import Comment from

class CommentList extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            //Datasource is some Global Data
            comments: DataSource.getComments()
        };
    }

    componentDidMount() {
        //Subscribe to Changes
        DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
        //Clean up Listener
        DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
        //Update component state whenever the data source changes
        this.setState({
            comments: DataSource.getComments()
        });
    }
    render() {
        return (
            <div>
                {this.state.comments.map((comment) => (
                    <Comment comment = {comment} key = {comment.id} />
                ))}
            </div>
        ); 
    }

}
export default CommentList;