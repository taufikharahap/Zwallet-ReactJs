const History = ({
  user_id,
  sender_id,
  sender_image,
  sender_username,
  receiver_image,
  receiver_username,
  notes,
  amount,
}) => {
  return (
    <div className="w-full h-[96px] flex justify-between items-center">
      <div className="flex">
        <img
          src={user_id === sender_id ? receiver_image : sender_image}
          alt="photo profile"
          className="size-[56px] rounded-[12px]"
        />
        <div className="flex flex-col justify-between w-[112px] ml-[15px] my-[3px]">
          <div className="font-bold leading-[22px] truncate">
            {user_id === sender_id ? receiver_username : sender_username}
          </div>
          <div className="text-sm leading-[19px] text-[#7A7886]">{notes}</div>
        </div>
      </div>
      <div
        className={`${
          user_id === sender_id ? 'text-[#FF5B37]' : 'text-[#1EC15F]'
        } font-bold leading-[22px]`}
      >
        {user_id === sender_id ? '-Rp' : '+Rp'}
        {amount.toLocaleString('id-ID')}
      </div>
    </div>
  );
};

export default History;
