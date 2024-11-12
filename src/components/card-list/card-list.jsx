import './card-list.css';
import React from 'react';
import Card from '../card/card';
import { Grid2 } from '@mui/material';

/*class based component 
export default class CardList extends React.Component{
    render(){
        return(
            <div className="card-list">
                <Card/>
            </div>
        );
    }
}
*/

/*const CardList= props =>
    (<div className="card-list">
        {props.monsters.map(monster => <Card monster={monster}/>)}
    </div>
    )
*/

const CardList = props => (
    <Grid2 container >
        <Grid2 size={12} sx={{display:'flex', flexWrap:'wrap', margin:2}}>
            {props.monsters.map(monster => <Card monster={monster}/>)}
        </Grid2>
    </Grid2>
)
export default CardList;