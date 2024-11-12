import React from 'react';
//import './card.css'
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

/*export default class Card extends React.Component{
    render(){
        return (
            <div className="card-container">
                    <img className="monster-img" alt='monster' src='https://robohash.org/1?set=set2&size=180x180' />
                    <h2>Name</h2>
                    <p>E-mail address</p>
                </div>
        );
    }
}*/

/*const Card= props => (
    <div className="card-container">
        <img src={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`} alt='monsters'/>
        <h2>{props.monster.name}</h2>
        <p>{props.monster.email}</p>
    </div>)
*/

const Crd= props => (
    <Card sx={{ backgroundColor: '#95dada', '&:hover':{ backgroundColor: '#70ddd'}, cursor:'pointer',width:'200px', margin:2}}>
        <CardMedia
            component="img"
            sx={{
                margin:'auto auto',
                maxWidth:'80%',
                height:"auto",
            }}
            image={`https://robohash.org/${props.monster.id}?set=set2&size=180x180`}
            alt="monsters"
            />
        <CardContent>
            <Typography variant='h6' sx={{fontSize: { xs: '0.8rem', sm: '1rem', md:'1.2rem'}}}>
                {props.monster.name}
            </Typography>
            <Typography variant='body2' sx={{fontSize: { xs: '0.6rem', sm: '0.8rem', md:'1rem'}, wordWrap:'break-word'}}>
                {props.monster.email}
            </Typography>
        </CardContent>
    </Card>
)
export default Crd;