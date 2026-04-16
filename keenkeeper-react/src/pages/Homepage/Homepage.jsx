import React, { useState, useEffect } from 'react';
import Friend from '../friendpage/Friend';

const Homepage = () => {
    const [friends, setFriends] = useState([]);

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setFriends(data))
            // .catch(err => console.error('Failed to load friends:', err));
    }, []);

    return (
        <div className='flex flex-col mt-16 items-center justify-center mx-auto px-4'>
            <h3 className='text-4xl font-semibold'>Friends to keep close in your life</h3>
            <p className='mt-4'>Your personal shelf of meaningful connections. Browse, tend, and nurture <br />
                <span className='flex justify-center'>the relationships that matter most.</span>
            </p>
            <button className="mt-8 px-6 py-2.5 bg-[#244D3F] hover:bg-[#1a382d] text-white rounded-md font-medium transition-colors">
                + Add a Friend
            </button>
            <Friend friends={friends} />
        </div>
    );
};

export default Homepage;