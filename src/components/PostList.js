import React from 'react';
import { connect } from "react-redux";
import { fetchPosts } from "../actions";
import UserHeader from "./UserHeader";
import { Grid, Paper, Typography } from "@material-ui/core";


class PostList extends React.Component{



    componentDidMount() {
        this.props.fetchPosts();
    }

    renderList() {


        if(!this.props.posts){
            return <div>loading posts</div>;
        } else {
            return this.props.posts.map(post => {
                return(
                    <div  key={post.id}>
                        <Grid container
                              direction="row"
                              justify="center"
                              spacing={3}>
                            <Grid item xs={6}>
                                <Paper  style={{marginBottom: 10, padding: 30}}>
                                    <Typography variant="h5" component="h3">
                                        {post.title}
                                    </Typography>
                                    <Typography component="p">
                                        {post.body}
                                    </Typography>
                                    <UserHeader userId={post.userId} />
                                </Paper>
                            </Grid>
                        </Grid>
                    </div>
                );
            });
        }


        // return (this.props.posts.map(post => {
        //     return(
        //         <div>test</div>
        //     );
        // }) || <div>test2</div>);

    }

    render() {

        console.log(this.props.posts);
        return (
            <div>
                {this.renderList()}
            </div>
        );
    };
}

const mapStateToProps = state => {

    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPosts: fetchPosts } )(PostList);