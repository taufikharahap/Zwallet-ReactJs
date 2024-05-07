import React, { useState, useEffect } from 'react';

import MainHeader from '../../component/ProfileHead';
import Card from '../../component/CardProfile';
import useApi from '../../utils/useApi';
// import { useSelector } from "react-redux";
import Header from '../../component/Header';
import Sidebar from '../../component/Sidebar';
import { useNavigate } from 'react-router-dom';

export default function ChangePass() {
  const [user, setUser] = useState(true);
  const [checkPin, setCheckPin] = useState(true);
  const navigate = useNavigate();
  const [form, setForm] = useState({});
  const api = useApi();
  const [pin, setPin] = useState({
    pin1: '',
    pin2: '',
    pin3: '',
    pin4: '',
    pin5: '',
    pin6: '',
  });

  const handleChange = (e) => {
    setPin({ ...pin, [e.target.name]: e.target.value });
  };

  const inputFocus = (e) => {
    if (e.key === 'Delete' || e.key === 'Backspace') {
      const next = e.target.tabIndex - 2;
      if (next > -1) {
        e.target.form.elements[next].focus();
      }
    } else {
      const next = e.target.tabIndex;
      if (next < 6) {
        e.target.form.elements[next].focus();
      }
    }
  };

  const handleSubmitConfirmPin = async (e) => {
    e.preventDefault();
    let allPin = '';
    for (const item in pin) {
      allPin += pin[item];
    }
    api
      .post('/user/checkpin', { pin: allPin })
      .then((res) => {
        alert(res.data.message);
        setCheckPin(false);
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err.response.data);
      });
  };

  const handleSubmitUpdatePin = (e) => {
    e.preventDefault();
    let allPin = '';
    for (const item in pin) {
      allPin += pin[item];
    }
    api
      .patch('/user/updatepin', { pin: allPin })
      .then((res) => {
        alert(res.data.message);
        navigate('/profile');
        setCheckPin(true);
      })
      .catch((err) => {
        alert(err.response.data.message);
        console.log(err.response.data);
      });
  };

  console.log(form);
  return (
    <div className="">
      <Header />
      <section className=" bg-primary bg-opacity-20 p-12 flex gap-8">
        <Sidebar />

        <main className="bg-white w-full rounded-3xl shadow-lg px-7 pt-7 pb-20">
          <MainHeader
            title={'Change Pin'}
            content={
              'You must enter your current password and then type your new password twice.'
            }
          />
          {checkPin ? (
            <form
              action=""
              className="w-full sm:w-[431px] mx-auto text-center space-y-8 mt-24"
              onSubmit={handleSubmitConfirmPin}
            >
              <div className="flex flex-row justify-between gap-x-2 overflow-x-hidden">
                {[1, 2, 3, 4, 5, 6].map((i) => {
                  return (
                    <input
                      className=" md:w-[53px] md:h-[65px] w-[47px] h-[58px] text-center  text-[30px] font-bold p-2 border rounded-[10px] outline-none"
                      type="text"
                      maxLength={1}
                      inputMode="numeric"
                      autoComplete="off"
                      name={`pin${i}`}
                      required
                      key={i}
                      pattern="\d*"
                      tabIndex={i}
                      value={pin[`pin${i}`]}
                      placeholder="_"
                      onChange={handleChange}
                      onKeyUp={inputFocus}
                    />
                  );
                })}
              </div>

              <button
                className="w-full bg-primary text-white disabled:text-[#88888F] disabled:bg-[#DADADA] rounded-[10px] p-5"
                type="submit"
                disabled={
                  pin.pin1 &&
                  pin.pin2 &&
                  pin.pin3 &&
                  pin.pin4 &&
                  pin.pin5 &&
                  pin.pin6
                    ? false
                    : true
                }
              >
                Confirm Pin
              </button>
            </form>
          ) : (
            <form
              action=""
              className="w-full sm:w-[431px] mx-auto text-center space-y-8 mt-24"
              onSubmit={handleSubmitUpdatePin}
            >
              <div className="flex flex-row justify-between gap-x-2 overflow-x-hidden">
                {[1, 2, 3, 4, 5, 6].map((i) => {
                  return (
                    <input
                      className=" md:w-[53px] md:h-[65px] w-[47px] h-[58px] text-center  text-[30px] font-bold p-2 border rounded-[10px] outline-none"
                      type="text"
                      maxLength={1}
                      inputMode="numeric"
                      autoComplete="off"
                      name={`pin${i}`}
                      required
                      key={i}
                      pattern="\d*"
                      tabIndex={i}
                      value={pin[`pin${i}`]}
                      placeholder="_"
                      onChange={handleChange}
                      onKeyUp={inputFocus}
                    />
                  );
                })}
              </div>

              <button
                className="w-full bg-primary text-white disabled:text-[#88888F] disabled:bg-[#DADADA] rounded-[10px] p-5"
                type="submit"
                disabled={
                  pin.pin1 &&
                  pin.pin2 &&
                  pin.pin3 &&
                  pin.pin4 &&
                  pin.pin5 &&
                  pin.pin6
                    ? false
                    : true
                }
              >
                Change Pin
              </button>
            </form>
          )}
        </main>
      </section>
    </div>
  );
}
