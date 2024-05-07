import { useNavigate } from 'react-router-dom';

import React from 'react';

export default function Card({ step, content }) {
  return (
    <div className="shadow-md rounded-lg p-4 flex justify-between items-center">
      <div className=" flex items-center gap-3 py-3">
        <h3 className="text-primary text-lg px-2">{step}</h3>
        <p className="text-[#7A7886] font-semibold text-lg">{content}</p>
      </div>
    </div>
  );
}
