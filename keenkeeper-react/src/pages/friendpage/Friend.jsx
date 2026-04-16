import React from 'react';

const statusLabel = (status) => {
  if (status === 'active') return 'Active';
  if (status === 'overdue') return 'Almost Due';
  return status;
};

const statusClass = (status) => {
  if (status === 'active') return 'badge-success';
  if (status === 'overdue') return 'badge-warning';
  return 'badge-secondary';
};

const Friend = ({ friends }) => {
  return (
    <div className='mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 min-h-screen'>
      {friends.map((friend) => (
        <div
          key={friend.id}
          className='card card-compact bg-white shadow-xl rounded-3xl p-6 mx-auto w-full max-w-xs'
        >
          <div className='flex flex-col items-center text-center space-y-4'>
            <div className='avatar'>
              <div className='w-28 h-28 rounded-full overflow-hidden ring ring-primary ring-offset-base-100 ring-offset-2'>
                <img src={friend.picture} alt={friend.name} />
              </div>
            </div>

            <div>
              <h3 className='text-lg font-semibold'>{friend.name}</h3>
              <p className='text-sm text-slate-500 mt-1'>
                {friend.days_since_contact}d ago
              </p>
            </div>

            <div className='flex flex-wrap items-center justify-center gap-2'>
              {friend.tags?.slice(0, 1).map((tag, index) => (
                <span key={index} className='badge badge-sm badge-primary uppercase'>
                  {tag}
                </span>
              ))}
              <span className={`badge badge-sm ${statusClass(friend.status)} uppercase`}>
                {statusLabel(friend.status)}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Friend;