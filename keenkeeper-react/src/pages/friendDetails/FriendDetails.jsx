import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { FiBell, FiArchive, FiTrash2, FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';
import './FriendDetails.css';

import callIcon from '../../assets/call.png';
import textIcon from '../../assets/text.png';
import videoIcon from '../../assets/video.png';

const statusLabel = (status) => {
    if (status === 'active') return 'Active';
    if (status === 'overdue') return 'Overdue';
    return status;
};

const statusClass = (status) => {
    if (status === 'active') return 'badge-success';
    if (status === 'overdue') return 'badge-error';
    return 'badge-secondary';
};

const FriendDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const friend = location.state?.friend ?? null;

    const handleCheckIn = (type) => {
        const newEvent = {
            id: Date.now(),
            type,
            friendName: friend.name,
            date: new Date().toISOString()
        };
        const existingEvents = JSON.parse(localStorage.getItem('timelineEvents') || '[]');
        localStorage.setItem('timelineEvents', JSON.stringify([newEvent, ...existingEvents]));
        toast.success(`Successfully added ${type} with ${friend.name} to timeline!`);
    };

    if (!friend) {
        return (
            <div className='min-h-screen flex items-center justify-center bg-slate-50'>
                <p className='text-base text-slate-500'>Loading friend details...</p>
            </div>
        );
    }

    const nextDue = new Date(friend.next_due_date);
    const nextDueMonthDay = nextDue.toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
    });
    const nextDueYear = nextDue.getFullYear();

    return (
        <div className='min-h-screen bg-slate-50 py-8'>
            <div className='max-w-5xl mx-auto px-4'>
                <button type='button' onClick={() => navigate(-1)} className='btn btn-ghost gap-2 mb-6'>
                    <FiArrowLeft /> Back
                </button>

                <div className='biglayout'>

                    {/* Left Column */}
                    <div>
                        <div className='bg-white rounded-xl border border-slate-200 shadow-sm p-6 text-center'>
                            <div className='avatar mx-auto mb-4'>
                                <div className='w-28 h-28 rounded-full overflow-hidden'>
                                    <img src={friend.picture} alt={friend.name} />
                                </div>
                            </div>

                            <h2 className='text-xl font-bold text-slate-800'>{friend.name}</h2>

                            <div className='mt-3 flex flex-wrap items-center justify-center gap-2'>
                                <span className={`badge badge-sm ${statusClass(friend.status)} uppercase font-semibold`}>
                                    {statusLabel(friend.status)}
                                </span>
                                {friend.tags?.slice(0, 1).map((tag, index) => (
                                    <span key={index} className='badge badge-sm badge-success uppercase font-semibold bg-emerald-100 text-emerald-800 border-none'>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className='mt-4 text-sm text-slate-500 italic'>"{friend.bio}"</p>
                            <p className='mt-3 text-xs text-slate-400'>Preferred: email</p>
                        </div>

                        <div className='stacklayout'>
                            <button className='btn btn-white border-slate-200 shadow-sm btn-block justify-center gap-3 bg-white hover:bg-slate-50'>
                                <FiBell className='text-slate-600' /> Snooze 2 Weeks
                            </button>
                            <button className='btn btn-white border-slate-200 shadow-sm btn-block justify-center gap-3 bg-white hover:bg-slate-50'>
                                <FiArchive className='text-slate-600' /> Archive
                            </button>
                            <button className='btn btn-white border-red-100 shadow-sm btn-block justify-center gap-3 text-red-500 bg-white hover:bg-red-50'>
                                <FiTrash2 /> Delete
                            </button>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className='space-y-4'>

                        {/* Stat Cards Row */}
                        <div className='smalllayout'>
                            <div className='stat-card bg-white rounded-xl border border-slate-200 shadow-sm p-6'>
                                <p className='text-4xl font-bold text-slate-800 leading-none'>{friend.days_since_contact}</p>
                                <p className='mt-3 text-sm font-medium text-slate-400'>Days Since Contact</p>
                            </div>

                            <div className='stat-card bg-white rounded-xl border border-slate-200 shadow-sm p-6'>
                                <p className='text-4xl font-bold text-slate-800 leading-none'>{friend.goal}</p>
                                <p className='mt-3 text-sm font-medium text-slate-400'>Goal (Days)</p>
                            </div>

                            <div className='stat-card bg-white rounded-xl border border-slate-200 shadow-sm p-6'>
                                <p className='text-3xl font-bold text-slate-800 leading-snug text-center'>
                                    {nextDueMonthDay},<br />{nextDueYear}
                                </p>
                                <p className='mt-3 text-sm font-medium text-slate-400'>Next Due</p>
                            </div>
                        </div>

                        {/* Relationship Goal */}
                        <div className='bg-white rounded-xl border border-slate-200 shadow-sm p-6'>
                            <div className='flex items-center justify-between gap-4'>
                                <div>
                                    <h3 className='text-lg font-bold text-slate-700'>Relationship Goal</h3>
                                    <p className='mt-2 text-sm text-slate-500'>
                                        Connect every <span className='font-semibold text-slate-800'>{friend.goal} days</span>
                                    </p>
                                </div>
                                <button className='btn btn-sm btn-outline border-slate-300 text-slate-600 whitespace-nowrap'>Edit</button>
                            </div>
                        </div>

                        {/* Quick Check-In */}
                        <div className='bg-white rounded-xl border border-slate-200 shadow-sm p-6'>
                            <h3 className='text-lg font-bold text-slate-700 mb-4'>Quick Check-In</h3>

                            <div className='smalllayout'>
                                <button onClick={() => handleCheckIn('Call')} className='checkin-btn btn btn-white border-slate-200 shadow-sm bg-white hover:bg-slate-50 rounded-xl transition-colors'>
                                    <img src={callIcon} alt="Call" className="w-6 h-6" />
                                    <span className='font-medium text-sm text-slate-700'>Call</span>
                                </button>
                                <button onClick={() => handleCheckIn('Text')} className='checkin-btn btn btn-white border-slate-200 shadow-sm bg-white hover:bg-slate-50 rounded-xl transition-colors'>
                                    <img src={textIcon} alt="Text" className="w-6 h-6" />
                                    <span className='font-medium text-sm text-slate-700'>Text</span>
                                </button>
                                <button onClick={() => handleCheckIn('Video')} className='checkin-btn btn btn-white border-slate-200 shadow-sm bg-white hover:bg-slate-50 rounded-xl transition-colors'>
                                    <img src={videoIcon} alt="Video" className="w-6 h-6" />
                                    <span className='font-medium text-sm text-slate-700'>Video</span>
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FriendDetails;