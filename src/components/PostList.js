import React from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import Typography from '@material-ui/core/Typography';

class PostList extends React.Component{

    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <Typography variant="h2" >
                    PostList
                </Typography>
            </div>
    )
    }
}

export default connect(null, { fetchPosts: fetchPosts } )(PostList);