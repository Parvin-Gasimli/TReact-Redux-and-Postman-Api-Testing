import React, { useEffect } from "react";
import Post from "./Post/Post";
import useStyles from "./styles"
import { CircularProgress, Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../actions/posts";
const Posts = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getPosts())

    },[])

    const posts = useSelector((state) => state.posts)
    const classes = useStyles();


    return (
        !posts?.data?.length ? <CircularProgress /> : (
            <Grid className={classes.container}
                container alignItems="atretch"
                spacing={3}
            >
                {
                    posts?.data.map((post) => (
                        <Grid key={post.id} item xs={12} sm={6}>
                            <Post post={post} />
                        </Grid>
                    ))
                }

            </Grid>
        )
    )

}
export default Posts