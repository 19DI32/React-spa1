import React from 'react';
import './news.css';
import checkNews from '../../HOC/withCheckNews';
import {NewsList} from './newsComponents';
export const News = (props)=> {
    return (
        <div>
            <h2>Hot news</h2>
            <p>BTC isn't a good last time</p>
            <NewsList />
        </div>
    )
}




