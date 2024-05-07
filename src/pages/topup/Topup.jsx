import React from 'react';

import Header from '../../component/Header';
import Sidebar from '../../component/Sidebar';
import Card from '../../component/CardTopup';
import MainHeader from '../../component/ProfileHead';

function Home() {
  return (
    <div className="">
      <Header />
      <section className=" bg-primary bg-opacity-20 p-12 flex gap-8">
        <Sidebar />
        <main className="bg-white w-full rounded-3xl shadow-lg px-7 pt-7 pb-12">
          <MainHeader title={'How to Top-Up'} />

          <div className="mt-5 grid gap-y-5">
            <Card
              step="1"
              content="Go to the nearest ATM or you can use E-Banking."
            />
            <Card
              step="2"
              content="Type your security number on the ATM or E-Banking."
            />
            <Card step="3" content="Select “Transfer” in the menu" />
            <Card
              step="4"
              content="Type the virtual account number that we provide you at the top."
            />
            <Card
              step="5"
              content="Type the amount of the money you want to top up."
            />
            <Card step="6" content="Read the summary details" />
            <Card step="7" content="Press transfer / top up" />
            <Card
              step="8"
              content="You can see your money in Zwallet within 3 hours."
            />
          </div>
        </main>
      </section>
    </div>
  );
}

export default Home;
