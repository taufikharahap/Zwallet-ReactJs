import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ListProfile({ content }) {
  let navigate = useNavigate();
  const handleNavigate = () => {
    switch (content) {
      case 'Personal Information':
        navigate('/');
        break;
      case 'Change Password':
        navigate('/');
        break;
      case 'Change PIN':
        navigate('/');
        break;
      //   case "Logout":
      //     axiosClient.post("auth/logout");
      //     Object.keys(Cookies.get()).map((item) => {
      //       Cookies.remove(item);
      //     });
      //     router.push("/login");

      default:
        break;
    }
  };

  return (
    <div>
      <button
        className="text-list font-semibold bg-[#E5E8ED] flex justify-between items-center py-5 px-5 rounded-lg  w-[433px]"
        onClick={handleNavigate}
      >
        <p>{content}</p>
      </button>
    </div>
  );
}
