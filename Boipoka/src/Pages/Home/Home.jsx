import React from 'react';
import Book from '../Book/Book';
import { useLoaderData } from 'react-router';
import Hero from './Hero';

const Home = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div>
            <Hero></Hero>
            <Book data={data}></Book>
        </div>
    );
};

export default Home;