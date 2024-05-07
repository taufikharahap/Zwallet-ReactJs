import React, { useState } from 'react';
import Searchinput from '../elements/Search';
import UserLists from '../elements/UserLists';
import { Card, CardContent, CardHeader, CardTitle } from '../parts/card';

const avatarDumy = [
  {
    id: 1,
    frist_name: 'John',
    last_name: 'Doe',
    phone_number: '+62 813-8492-9994',
    picture_url:
      'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    frist_name: 'Momo',
    last_name: 'Taro',
    phone_number: '+62 812-4343-6731',
    picture_url:
      'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    frist_name: 'Jessica',
    last_name: 'Keen',
    phone_number: '+62 811-3452-5252',
    picture_url:
      'https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    frist_name: 'Michael',
    last_name: 'Le',
    phone_number: '+62 810-4224-4613',
    picture_url:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

function Content() {
  const [search, setSearch] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setSearch(value);
    console.log(search);
  };

  return (
    <Card className="bg-white border-none drop-shadow-md">
      <CardHeader className="gap-6 p-[30px]">
        <CardTitle className="text-lg font-bold">Transfer To</CardTitle>
        <Searchinput onInputChange={handleInputChange} />
      </CardHeader>
      <CardContent className="flex flex-col gap-5 px-[30px pb-5">
        <UserLists />
        <UserLists />
      </CardContent>
    </Card>
  );
}

export default Content;
