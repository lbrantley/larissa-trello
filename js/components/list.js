import React from 'react';
import Card from './card';

export default function List(props) {
	
    return (
    	<div className="list">{props.title}</div>
        <div className="list">{props.cards.map(function(cardText){
        	return <Card text={cardText} />});
        }</div>
    );
}