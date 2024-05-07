import { useNavigate } from 'react-router-dom';

import React from 'react';

export default function Card({ title, content, email, phone }) {
  let navigate = useNavigate();

  return (
    <div className="shadow-md rounded-lg p-4 flex justify-between items-center">
      <div>
        <h3 className="text-[#7A7886] mb-2">{title}</h3>
        <p
          className={`${
            email ? 'text-[#7A7886]' : 'text-[#514F5B]'
          } font-semibold text-xl`}
        >
          {content}
        </p>
      </div>
      {phone ? (
        <button
          className="text-primary font-medium"
          onClick={() => navigate('/profile/detail')}
        >
          Manage
        </button>
      ) : (
        ''
      )}
    </div>
  );
}
