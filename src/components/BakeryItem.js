// // TODO: create a component that displays a single bakery item
import React from "react";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; // Import Box component for additional control

function BakeryItem(props) {
    return (
        <Card sx={{ maxWidth: 400, minWidth: 400, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <CardMedia
                component="img"
                height="200"
                image={props.image}
                alt={props.name}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between', paddingRight: 2 , marginLeft: 1.5, marginBottom: 1}}>
                <Typography variant="body1" color="text.primary">
                    ${props.price}
                </Typography>
                <Button size="medium" onClick={props.onAddToCart}>Add to Cart</Button>
            </CardActions>
        </Card>
    );
}

export default BakeryItem;

