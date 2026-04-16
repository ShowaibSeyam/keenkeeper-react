import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { FiBell, FiArchive, FiTrash2, FiArrowLeft } from 'react-icons/fi';
import callImage from '../../assets/call.png';
import textImage from '../../assets/text.png';
import vidImage from '../../assets/video.png';

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

    if (!friend) {
        return (
            <div className='min-h-screen flex items-center justify-center bg-slate-50'>
                <p className='text-base text-slate-500'>Loading friend details...</p>
            </div>
        );
    }

    return (
        <div className='min-h-screen bg-slate-50 py-8'>
            <div className='max-w-6xl mx-auto px-4'>
                <button type='button' onClick={() => navigate(-1)} className='btn btn-ghost gap-2 mb-6'>
                    <FiArrowLeft /> Back
                </button>

                <div className='grid gap-6 lg:grid-cols-[320px_1fr]'>
                    <div className='space-y-4'>
                        <div className='bg-white rounded-3xl border border-slate-200 shadow-sm p-6 text-center'>
                            <div className='avatar mx-auto mb-4'>
                                <div className='w-28 h-28 rounded-full overflow-hidden'>
                                    <img src={friend.picture} alt={friend.name} />
                                </div>
                            </div>

                            <h2 className='text-xl font-semibold'>{friend.name}</h2>

                            <div className='mt-4 flex flex-wrap items-center justify-center gap-2'>
                                <span className={`badge badge-sm ${statusClass(friend.status)} uppercase`}>
                                    {statusLabel(friend.status)}
                                </span>
                                {friend.tags?.slice(0, 1).map((tag, index) => (
                                    <span key={index} className='badge badge-sm badge-primary uppercase'>
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <p className='mt-4 text-slate-500'>"{friend.bio}"</p>
                            <p className='mt-3 text-xs uppercase tracking-[0.24em] text-slate-400'>Preferred: email</p>
                        </div>

                        <div className='grid gap-3'>
                            <button className='btn btn-outline btn-block justify-start gap-3'>
                                <FiBell /> Snooze 2 Weeks
                            </button>
                            <button className='btn btn-outline btn-block justify-start gap-3'>
                                <FiArchive /> Archive
                            </button>
                            <button className='btn btn-outline btn-error btn-block justify-start gap-3 text-red-600 border-red-200 hover:bg-red-50'>
                                <FiTrash2 /> Delete
                            </button>
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <div className='grid gap-4 sm:grid-cols-3'>
                            <div className='bg-white rounded-3xl border border-slate-200 shadow-sm p-5 text-center'>
                                <p className='text-3xl font-semibold text-slate-900'>{friend.days_since_contact}</p>
                                <p className='mt-2 text-sm text-slate-500'>Days Since Contact</p>
                            </div>
                            <div className='bg-white rounded-3xl border border-slate-200 shadow-sm p-5 text-center'>
                                <p className='text-3xl font-semibold text-slate-900'>{friend.goal}</p>
                                <p className='mt-2 text-sm text-slate-500'>Goal (Days)</p>
                            </div>
                            <div className='bg-white rounded-3xl border border-slate-200 shadow-sm p-5 text-center'>
                                <p className='text-2xl font-semibold text-slate-900'>
                                    {new Date(friend.next_due_date).toLocaleDateString('en-US', {
                                        month: 'short',
                                        day: 'numeric',
                                        year: 'numeric',
                                    })}
                                </p>
                                <p className='mt-2 text-sm text-slate-500'>Next Due</p>
                            </div>
                        </div>

                        <div className='bg-white rounded-3xl border border-slate-200 shadow-sm p-6'>
                            <div className='flex items-start justify-between gap-4'>
                                <div>
                                    <p className='text-sm uppercase tracking-[0.24em] text-slate-400'>Relationship Goal</p>
                                    <p className='mt-3 text-lg font-medium'>Connect every <span className='font-semibold'>{friend.goal}</span> days</p>
                                </div>
                                <button className='btn btn-sm btn-outline'>Edit</button>
                            </div>
                        </div>

                        <div className='bg-white rounded-3xl border border-slate-200 shadow-sm p-6'>
                            <p className='text-sm uppercase tracking-[0.24em] text-slate-400'>Quick Check-In</p>
                            <div className='mt-4 grid gap-3 sm:grid-cols-3'>
                                <button className='btn btn-white border-slate-200 shadow-sm flex flex-col items-center justify-center gap-3 py-6'>
                                    <img src={callImage} alt='call' className='mx-auto w-6 h-6 object-contain' />
                                    Call
                                </button>
                                <button className='btn btn-white border-slate-200 shadow-sm flex flex-col items-center justify-center gap-3 py-6'>
                                    <img src={textImage} alt='text' className='mx-auto w-6 h-6 object-contain' />
                                    Text
                                </button>
                                <button className='btn btn-white border-slate-200 shadow-sm flex flex-col items-center justify-center gap-3 py-6'>
                                    <img src={vidImage} alt='video' className='mx-auto w-6 h-6 object-contain' />
                                    Video
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