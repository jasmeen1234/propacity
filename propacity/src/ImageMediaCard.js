import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import dashLogo from './assets/dashLogo.png';
export default function ImgMediaCard() {
  return (
    <Card >
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        image={dashLogo}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        Welcome to Star Wars Dashboard
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.
        </Typography>
      </CardContent>
      
    </Card>
  );
}