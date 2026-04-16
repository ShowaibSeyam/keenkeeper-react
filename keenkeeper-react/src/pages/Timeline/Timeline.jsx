import React, { useState, useEffect } from 'react';
import { FaHandshake } from 'react-icons/fa';

import callIcon from '../../assets/call.png';
import textIcon from '../../assets/text.png';
import videoIcon from '../../assets/video.png';

const Timeline = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const storedEvents = JSON.parse(localStorage.getItem('timelineEvents') || '[]');
        setEvents(storedEvents);
    }, []);

    const getIcon = (type) => {
        switch (type?.toLowerCase()) {
            case 'call': return <img src={callIcon} alt="Call" className="w-6 h-6" />;
            case 'text': return <img src={textIcon} alt="Text" className="w-6 h-6" />;
            case 'video': return <img src={videoIcon} alt="Video" className="w-6 h-6" />;
            case 'meetup': return <FaHandshake className="text-amber-500" size={24} />;
            default: return <FaHandshake className="text-amber-500" size={24} />;
        }
    };

    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    };

    return (
        <div className='min-h-screen bg-slate-50 py-10'>
            <div className='max-w-4xl mx-auto px-4'>
                <h1 className='text-3xl font-bold text-slate-800 mb-6'>Timeline</h1>

                <div className='mb-8'>
                    <select className='select select-bordered w-full max-w-xs bg-white text-slate-500 border-slate-200'>
                        <option>Filter timeline</option>
                        <option>Meetup</option>
                        <option>Call</option>
                        <option>Text</option>
                        <option>Video</option>
                    </select>
                </div>

                <div className='space-y-3'>
                    {events.length === 0 ? (
                        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 text-center text-slate-500">
                            No events in timeline yet. Go to a friend's profile and check in!
                        </div>
                    ) : (
                        events.map((event, index) => (
                            <div key={event.id || index} className='bg-white rounded-xl shadow-sm border border-slate-100 p-5 flex items-start gap-4'>
                                <div className='mt-1 flex-shrink-0'>
                                    {getIcon(event.type)}
                                </div>
                                <div>
                                    <p className='font-semibold text-slate-800 text-lg'>
                                        {event.type} <span className="font-normal text-slate-500">with {event.friendName}</span>
                                    </p>
                                    <p className='text-sm text-slate-400 mt-1'>{formatDate(event.date)}</p>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Timeline;