import React from 'react';

export default function Button({ content, disable }) {
  return (
    <button
      type="submit"
      className="w-full bg-primary text-white rounded-xl py-3 disabled:cursor-not-allowed disabled:text-[#88888F] disabled:bg-[#DADADA]"
      disabled={disable ? true : false}
    >
      {content}
    </button>
  );
}
