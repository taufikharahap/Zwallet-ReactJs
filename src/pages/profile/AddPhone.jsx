import React, { useState, useEffect } from 'react';
import useApi from '../../utils/useApi';
import { useNavigate } from 'react-router-dom';
import MainHeader from '../../component/ProfileHead';
import Card from '../../component/CardProfile';

// import { useSelector } from "react-redux";
import Header from '../../component/Header';
import Sidebar from '../../component/Sidebar';
import Input from '../../component/Input';
import Button from '../../component/Button';

export default function ChangePass() {
  let navigate = useNavigate();
  //   const user = useSelector((state) => state.user.data);
  const api = useApi();

  const [inputPhone, setInputPhone] = useState('');
  const handleOnChange = (e) => {
    setInputPhone(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const data = { phone_number: inputPhone };
    console.log(data);

    api
      .post('/phone', data)
      .then((res) => {
        alert(res.data.message);
        navigate('/profile/manage-phone');
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err.response.data);
      });
  };

  return (
    <div className="">
      <Header />
      <section className=" bg-primary bg-opacity-20 p-12 flex gap-8">
        <Sidebar />

        <main className="w-full bg-white rounded-3xl shadow-lg px-7 pt-7 pb-36">
          <MainHeader
            title={'Add Phone Number'}
            content={
              'Add at least one phone number for the transfer ID so you can start transfering your money to another user.'
            }
          />

          <form
            action=""
            className="w-full sm:w-[431px] mx-auto text-center space-y-5 mt-24"
            onSubmit={submitHandler}
          >
            <Input
              id={'noTelp'}
              type={'text'}
              name={'phone_number'}
              placeholder={'Enter your phone number'}
              icon={'akar-icons:phone'}
              onChange={handleOnChange}
            />

            <Button
              content={'Add Phone Number'}
              disable={inputPhone.length < 8 ? true : false}
            />
          </form>
        </main>
      </section>
    </div>
  );
}
