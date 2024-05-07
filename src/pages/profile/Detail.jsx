import React, { useState, useEffect } from 'react';

import Header from '../../component/Header';
import Sidebar from '../../component/Sidebar';
import Card from '../../component/CardProfile';
import MainHeader from '../../component/ProfileHead';
import { useSelector } from 'react-redux';
import defaultProfile from '../../assets/profile-default.png';
import { useNavigate, Link } from 'react-router-dom';

function Home() {
  let navigate = useNavigate();
  const { profile } = useSelector((s) => s.profile);
  return (
    <div className="">
      <Header />
      <section className=" bg-primary bg-opacity-20 p-12 flex gap-8">
        <Sidebar />
        <main className="bg-white w-full rounded-3xl shadow-lg px-7 pt-7 pb-12">
          <MainHeader
            title={'Personal Information'}
            content={
              'We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.'
            }
          />

          <div className="mt-10 grid gap-y-5">
            <Card
              title={'First Name'}
              content={profile.username.split(' ')[0]}
            />
            <Card
              title={'Last Name'}
              content={profile.username.split(' ')[1]}
            />
            <Card
              title={'Verified Email'}
              content={profile.email}
              email={true}
            />
            <div className="shadow-md rounded-lg p-4 flex justify-between items-center">
              <div>
                <h3 className="text-[#7A7886] mb-2">Phone Number</h3>
                <p className="text-[#514F5B] font-semibold text-xl">
                  {profile.phone ? profile.phone : 'Phone Not Set'}
                </p>
              </div>
              {profile.phone ? (
                <button
                  className="text-primary font-medium"
                  onClick={() => navigate('/profile/manage-phone')}
                >
                  Manage
                </button>
              ) : (
                <button
                  className="text-primary font-medium"
                  onClick={() => navigate('/profile/add-phone')}
                >
                  Add Phone
                </button>
              )}
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Home;
