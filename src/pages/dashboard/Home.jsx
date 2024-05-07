import React, { useEffect, useState } from 'react';
import Footer from '../../component/Footer';
import Header from '../../component/Header';
import History from '../../component/History';
import Sidebar from '../../component/Sidebar';

import backArrow from '../../assets/back-arrow-transaction.svg';
import expenseIcon from '../../assets/expense-icon.svg';
import incomeIcon from '../../assets/income-icon.svg';
import topUpIconPurple from '../../assets/top-up-icon-purple.svg';
import topUpIcon from '../../assets/top-up-icon.svg';
import transferIconPurple from '../../assets/transfer-icon-purple.svg';
import transferIcon from '../../assets/transfer-icon.svg';

import 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { jwtDecode } from 'jwt-decode';

import { Bar } from 'react-chartjs-2';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import NewSidebar from '../../component/NewSidebar.jsx';
import { getProfile } from '../../store/reducer/profile.js';
import useApi from '../../utils/useApi.js';

function Home() {
  const navigate = useNavigate();

  const { token } = useSelector((s) => s.users);

  const { id } = jwtDecode(token);
  const api = useApi();

  const dispatch = useDispatch();

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [detailTrans, setDetailTrans] = useState(false);
  const [balance, setBalance] = useState([]);
  const [dailyBalance, setDailyBalance] = useState([]);
  const [phone_number, setPhoneNumber] = useState();
  const [hist, setHist] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  //   get profile user

  const getUser = async (e) => {
    await api
      .get('/user')
      .then(({ data }) => {
        dispatch(getProfile(data.data[0]));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //   end profile user

  // Window Screen
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth > 900) {
        setDetailTrans(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Balance
  useEffect(() => {
    setIsLoading(true);
    api({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      url: `/transaction/balance`,
      data: {},
    }).then(({ data }) => {
      setBalance(data.data);
      setPhoneNumber(data.data[0].phone_number);
      const dates = getLastSevenDays();
      api({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'POST',
        url: `/transaction/balance`,
        data: { dates },
      })
        .then(({ data }) => {
          const balances = data.data.map((item) => parseInt(item.balance));
          setDailyBalance(balances);
          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);
          console.log(err);
        });
    });
  }, []);

  // Transaction History
  useEffect(() => {
    api({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      url: `/transaction/history`,
      data: {},
    })
      .then(({ data }) => {
        setHist(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Get Seven Dates
  function getLastSevenDays() {
    const dates = [];
    const today = new Date();
    for (let i = 6; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      dates.push(date.toISOString().split('T')[0]);
    }
    return dates;
  }

  // Get Seven Days
  function getDayNames(dateStrings) {
    const dayNames = [];
    dateStrings.forEach((dateString) => {
      const date = new Date(dateString);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      dayNames.push(dayName);
    });
    return dayNames;
  }

  // Chart
  const [clickedBarIndex, setClickedBarIndex] = useState(null);

  const data = {
    labels: getDayNames(getLastSevenDays()),
    datasets: [
      {
        data: dailyBalance,
        backgroundColor: (context) => {
          return context.dataIndex === clickedBarIndex ? '#6379F4' : '#9DA6B5';
        },
        maxBarThickness: 14,
        borderRadius: 200,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    layout: {
      padding: {
        top: 35,
        left: 20,
        right: 20,
      },
    },
    maintainAspectRatio: false,
    scales: {
      y: {
        display: false,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Nunito Sans',
          },
        },
      },
      x: {
        border: {
          display: false,
        },
        grid: {
          display: false,
        },
        ticks: {
          font: {
            family: 'Nunito Sans',
            size: 14,
            lineHeight: 1.35,
          },
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
      datalabels: {
        display: (context) => context.dataIndex === clickedBarIndex,
        color: '#1EC15F',
        anchor: 'end',
        align: 'top',
        font: {
          family: 'Nunito Sans',
          weight: 700,
        },
        clamp: true,

        borderRadius: 4,
        padding: {
          top: 6,
          bottom: 4,
          left: 8,
          right: 8,
        },
        formatter: (value) => {
          return `Rp${value.toLocaleString('id-ID')}`;
        },
      },
    },

    onClick: (event, chartElements) => {
      if (chartElements.length > 0) {
        if (clickedBarIndex !== chartElements[0].index) {
          const clickedIndex = chartElements[0].index;
          setClickedBarIndex(clickedIndex);
        } else {
          setClickedBarIndex(null);
        }
      } else {
        setClickedBarIndex(null);
      }
    },
  };

  if (isLoading) {
    return (
      <div className="bg-[#fafcff] font-nunito">
        <Header />
        <section className="container flex justify-center my-10">
          {/* <Sidebar /> */}
          <NewSidebar />
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-[#fafcff] font-nunito">
      <Header />
      <section className="container flex justify-center my-10">
        <Sidebar />
        <main>
          <div className="w-[343px] min-[900px]:w-[700px] min-[1150px]:w-[850px] ml-4 lg:ml-5">
            <div
              className={`${detailTrans ? 'flex' : 'hidden'} mb-[52px]`}
              onClick={() => setDetailTrans(!detailTrans)}
            >
              <img src={backArrow} alt="back arrow" />
              <div className="text-xl leading-[30px] font-bold text-[#4D4B57] ml-5">
                Transaction
              </div>
            </div>

            {/* Top Section */}
            <div
              className="w-full h-[141px] min-[900px]:h-[190px] bg-[#6379F4] rounded-[20px] p-[25px] min-[900px]:p-[30px] mb-[5px]"
              onClick={
                windowWidth >= 900 ? null : () => setDetailTrans(!detailTrans)
              }
            >
              <div
                className={`${
                  detailTrans && windowWidth < 900 ? 'hidden' : 'flex'
                } flex-col min-[900px]:flex-row justify-between`}
              >
                <div>
                  <div className="text-sm min-[900px]:text-lg text-[#DFDCDC] leading-[19px] min-[900px]:leading-[31px]">
                    Balance
                  </div>
                  <div className="text-2xl min-[900px]:text-[40px] text-white leading-[33px] min-[900px]:leading-[55px] font-bold mt-[10px] mb-[15px]">
                    {balance.length >= 2 &&
                    typeof balance[0].total === 'string' &&
                    typeof balance[1].total === 'string'
                      ? `Rp${parseInt(
                          balance[0].total - balance[1].total
                        ).toLocaleString('id-ID')}`
                      : 'Balance data not available'}
                  </div>
                  <div className="text-sm text-[#DFDCDC] leading-[19px] font-semibold">
                    {phone_number}
                  </div>
                </div>

                {/* Button */}
                <div className="w-[343px] min-[900px]:w-[162px] flex flex-row justify-between min-[900px]:flex-col min-[900px]:block mt-[55px] min-[900px]:mt-0 ml-[-25px]">
                  <button
                    className={`flex justify-center items-center w-[162px] h-[57px] ${
                      windowWidth >= 900
                        ? 'bg-white bg-opacity-[20%] text-white'
                        : 'bg-[#EAEDFF] text-[#514F5B]'
                    } rounded-[10px] border-[1px] border-white border-solid mb-4`}
                  >
                    <img
                      src={
                        windowWidth >= 900 ? transferIcon : transferIconPurple
                      }
                      alt="transfer icon"
                    />
                    <div className="font-bold text-lg leading-[25px] ml-[10px]">
                      Transfer
                    </div>
                  </button>
                  <button
                    className={`flex justify-center items-center w-[162px] h-[57px] ${
                      windowWidth >= 900
                        ? 'bg-white bg-opacity-[20%] text-white'
                        : 'bg-[#EAEDFF] text-[#514F5B]'
                    } rounded-[10px] border-[1px] border-white border-solid mb-4`}
                    onClick={() => navigate('/topup')}
                  >
                    <img
                      src={windowWidth >= 900 ? topUpIcon : topUpIconPurple}
                      alt="top up icon"
                    />
                    <div className="font-bold text-lg leading-[25px] ml-[10px]">
                      Top Up
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div
              className={`relative flex flex-col min-[900px]:flex-row justify-between min-[900px]:mt-5 ${
                detailTrans ? '' : 'mt-[127px]'
              }`}
            >
              <div
                className={`${
                  detailTrans ? 'flex' : 'hidden'
                } min-[900px]:flex mr-2 lg:mr-5 mb-5 min-[900px]:mb-0`}
              >
                {/* Income/Expense */}
                <div
                  className={`w-[343px] min-[1150px]:w-[463px] h-[400px] min-[900px]:h-[468px] rounded-[20px] ${
                    detailTrans ? 'bg-transparent pt-10' : 'bg-white shadow-lg'
                  }`}
                >
                  <div
                    className={`${
                      detailTrans
                        ? 'absolute top-[-150px] w-[343px] text-white'
                        : 'flex text-[#6A6A6A]'
                    } flex justify-between p-[30px]`}
                  >
                    <div>
                      <img src={incomeIcon} alt="income icon" />
                      <div className=" text-sm leading-[19px] mt-[10px] mb-[8px]">
                        Income
                      </div>
                      <div className="text-lg leading-[25px] font-bold">
                        <div className="text-lg leading-[25px] font-bold">
                          {`Rp${parseInt(
                            balance[0] && balance[0].total
                          ).toLocaleString('id-ID')}`}
                        </div>
                      </div>
                    </div>
                    <div className="mr-[10px]">
                      <img src={expenseIcon} alt="expense icon" />
                      <div className="text-sm leading-[19px] mt-[10px] mb-[8px]">
                        Expense
                      </div>
                      <div>
                        <div className="text-lg leading-[25px] font-bold">
                          {`Rp${parseInt(
                            balance[1] && balance[1].total
                          ).toLocaleString('id-ID')}`}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="w-[343px] h-[293px] mx-auto">
                    <div className="min-[900px]:hidden w-full font-bold text-lg leading-[25px]">
                      In this Week
                    </div>

                    <Bar
                      data={data}
                      options={options}
                      plugins={[ChartDataLabels]}
                    />
                  </div>
                </div>
              </div>

              {/* Transaction History */}
              <div
                className={`w-[343px] min-[900px]:w-[367px] h-[469px] rounded-[20px] shadow-lg bg-white px-[30px] pt-[30px] pb-[20px]`}
              >
                <div className="w-full flex justify-between items-center mb-[20px]">
                  <div className="font-bold text-lg leading-[25px]">
                    Transaction History
                  </div>
                  <a
                    href="/history"
                    className="font-bold text-sm text-[#6379F4]"
                  >
                    See all
                  </a>
                </div>
                {hist &&
                  hist
                    .slice(0, 4)
                    .map((e, i) => (
                      <History
                        key={i}
                        user_id={id}
                        sender_id={e.sender_id}
                        sender_image={e.sender_image}
                        sender_username={e.sender_username}
                        receiver_image={e.receiver_image}
                        receiver_username={e.receiver_username}
                        notes={e.notes}
                        amount={e.amount}
                      />
                    ))}
              </div>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
