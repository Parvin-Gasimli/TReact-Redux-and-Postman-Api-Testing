import React from "react";
import useStyles from "./styles"
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@material-ui/core";
import ThumbAltIcon from "@material-ui/icons/ThumbUpAlt"
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizeIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
const Post = ({ post, }) => {
    const classes = useStyles()

    return (

        <Card className={classes.card}>

            <CardMedia className={classes.media}
                image={post.selectedFile}
                title={post.title} />
            <div className={classes.overlay}>
                <Typography variant="h6">{post.creator}</Typography>
                <Typography variant="body2">{moment(post.createAt).fromNow()}</Typography>

            </div>
            <div className={classes.overlay}>
                <Button style={{ color: 'white' }}
                    size="small"
                    onClick={() => { }}
                >
                    <MoreHorizeIcon fontSize="default" />
                </Button>
            </div>
            <div className={classes.details}>

                <Typography variant="body2" color="textSecondary" >{post.tags.map((tag) => `#${tag}`)}</Typography>

            </div>
            <CardContent>
                <Typography className={classes.title} variant="h5" gutterBottom >{post.message}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size='small' color='primary' onClick={() => { }} >
                    <ThumbAltIcon fontSize="small" />
                    like
                    {post.likeCount}
                </Button>
                <Button size='small' color='primary' onClick={() => { }} >
                    <DeleteIcon fontSize="small" />
                    Delete
               
                </Button>
            </CardActions>


        </Card>
    )

}
export default Post;