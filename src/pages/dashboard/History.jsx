import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from '../../component/Header';
import Sidebar from '../../component/Sidebar';
import Footer from '../../component/Footer';
import History from '../../component/History';

import backArrow from '../../assets/back-arrow-transaction.svg';
import incomeIcon from '../../assets/income-icon.svg';
import expenseIcon from '../../assets/expense-icon.svg';
import arrowClicked from '../../assets/white-arrow.svg';

import { DateRangePicker } from 'rsuite';
import { jwtDecode } from 'jwt-decode';
import useApi from '../../utils/useApi.js';
import 'rsuite/dist/rsuite.min.css';

const HistoryPage = () => {
  const navigate = useNavigate();
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNzExNTAyODk5LCJleHAiOjE3MTE1ODkyOTl9.OFOnVYxaZp2idya1-1hC7BxsO7BS0pBMI-FipJUUJGA';
  const { id } = jwtDecode(token);
  const api = useApi();

  const [weekRange, setWeekRange] = useState([]);
  const [weekHist, setWeekHist] = useState([]);

  const [monthRange, setMonthRange] = useState([]);
  const [monthHist, setMonthHist] = useState([]);

  const [dateRange, setDateRange] = useState([]);
  const [filterDateRange, setFilterDateRange] = useState(false);

  const [buttonClicked, setButtonClicked] = useState(false);

  // Get Week Range
  function getWeek() {
    const currentDate = new Date();
    const startOfWeek = new Date();
    const endOfWeek = new Date();

    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 1);
    endOfWeek.setDate(startOfWeek.getDate() + 6);

    const formattedStartDate = startOfWeek.toISOString().split('T')[0];
    const formattedEndDate = endOfWeek.toISOString().split('T')[0];

    setWeekRange([formattedStartDate, formattedEndDate]);
  }

  useEffect(() => {
    getWeek();
  }, []);

  // Transaction History Weekly
  useEffect(() => {
    api({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      url: `/transaction/history`,
      data: { weekRange },
    })
      .then(({ data }) => {
        setWeekHist(data.data);
        getMonth();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [weekRange]);

  // Get Month Range
  function getMonth() {
    const currentDate = new Date();
    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      2
    );
    const endOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1,
      1
    );

    const formattedStartDate = startOfMonth.toISOString().split('T')[0];
    const formattedEndDate = endOfMonth.toISOString().split('T')[0];

    setMonthRange([formattedStartDate, formattedEndDate]);
  }

  // Transaction History Monthly
  useEffect(() => {
    api({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      url: `/transaction/history`,
      data: { monthRange },
    })
      .then(({ data }) => {
        setMonthHist(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [monthRange]);

  // Handle Button Click
  const handleButtonClick = (button) => {
    if (buttonClicked === button) {
      setButtonClicked(false);
      api({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'POST',
        url: `/transaction/history`,
        data: { weekRange },
      })
        .then(({ data }) => {
          setWeekHist(data.data);
        })
        .catch((err) => {
          console.log(err);
        });

      api({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'POST',
        url: `/transaction/history`,
        data: { monthRange },
      })
        .then(({ data }) => {
          setMonthHist(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setButtonClicked(button);
    }
  };

  // Get Expense History
  const getExpenseHistory = (period) => {
    if (period === 'weekly') {
      api({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'POST',
        url: `/transaction/history`,
        data: { weekRange, type: 'expense' },
      })
        .then(({ data }) => {
          setWeekHist(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (period === 'monthly') {
      api({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'POST',
        url: `/transaction/history`,
        data: { monthRange, type: 'expense' },
      })
        .then(({ data }) => {
          setMonthHist(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // Get Income History
  const getIncomeHistory = (period) => {
    if (period === 'weekly') {
      api({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'POST',
        url: `/transaction/history`,
        data: { weekRange, type: 'income' },
      })
        .then(({ data }) => {
          setWeekHist(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (period === 'monthly') {
      api({
        headers: {
          Authorization: `Bearer ${token}`,
        },
        method: 'POST',
        url: `/transaction/history`,
        data: { monthRange, type: 'income' },
      })
        .then(({ data }) => {
          setMonthHist(data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  // Date Range
  const handleDateRange = (date) => {
    const startDate = new Date(date[0]);
    const endDate = new Date(date[1]);

    startDate.setDate(startDate.getDate());
    endDate.setDate(endDate.getDate());

    const startDateString = startDate.toISOString().split('T')[0];
    const endDateString = endDate.toISOString().split('T')[0];

    const dateRange = [startDateString, endDateString];
    setDateRange(dateRange);
    setFilterDateRange(true);
  };

  // Get History by Date Range
  useEffect(() => {
    const weekRange = dateRange;
    api({
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'POST',
      url: `/transaction/history`,
      data: { weekRange },
    })
      .then(({ data }) => {
        setWeekHist(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [dateRange]);

  // Format Date Range
  function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { day: 'numeric', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('id-ID', options);
  }

  return (
    <div className="bg-[#fafcff] font-nunito">
      <Header />
      <section className="container flex justify-center my-10">
        <Sidebar />
        <main>
          <button
            className="flex lg:hidden items-center ml-5"
            onClick={() => navigate('/home')}
          >
            <img src={backArrow} alt="back arrow" />
            <div className="text-lg leading-[30px] font-bold text-[#4D4B57] ml-5">
              History
            </div>
          </button>

          <div className="bg-white w-[343px] lg:w-[750px] min-[1150px]:w-[850px] ml-4 lg:ml-5 rounded-[20px] shadow-lg px-4 py-[30px] lg:p-[30px] mt-[18px] lg:mt-0">
            <div
              className="lg:flex hidden
            font-bold text-lg leading-[25px]"
            >
              Transaction History
            </div>

            <div
              className={`${
                filterDateRange ? 'hidden' : 'flex'
              } text-[#7A7886] leading-[27px] lg:mt-[30px] mb-[25px] `}
            >
              This Week
            </div>
            <div
              className={`${
                filterDateRange ? 'flex' : 'hidden'
              } text-[#7A7886] leading-[27px] lg:mt-[30px] mb-[25px]`}
            >
              {formatDate(`${dateRange[0]}`) +
                ' - ' +
                formatDate(`${dateRange[1]}`)}
            </div>

            {weekHist &&
              weekHist
                .slice(0, filterDateRange ? 5 : 2)
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
            <div
              className={`${
                filterDateRange ? 'hidden' : 'flex'
              } text-[#7A7886] leading-[27px] mt-[30px] mb-[25px]`}
            >
              This Month
            </div>
            <div className={`${filterDateRange ? 'hidden' : 'flex flex-col'}`}>
              {monthHist &&
                monthHist
                  .slice(0, 2)
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

            <div className="flex w-full justify-between mt-10">
              {/* Expense/Income */}
              <div className="flex">
                <button
                  className={`${
                    buttonClicked === 'expense' ? 'bg-primary' : 'bg-white'
                  } flex justify-center items-center size-[57px] rounded-[12px] shadow-md mr-1 lg:mr-4`}
                  onClick={() => {
                    setFilterDateRange(false);
                    getExpenseHistory('weekly');
                    getExpenseHistory('monthly');
                    handleButtonClick('expense');
                  }}
                >
                  <img
                    src={
                      buttonClicked === 'expense' ? arrowClicked : expenseIcon
                    }
                    alt="expense icon"
                    className={
                      buttonClicked === 'expense' ? 'transform rotate-180' : ''
                    }
                  />
                </button>

                <button
                  className={`${
                    buttonClicked === 'income' ? 'bg-primary' : 'bg-white'
                  } flex justify-center items-center size-[57px] rounded-[12px] shadow-md`}
                  onClick={() => {
                    setFilterDateRange(false);
                    getIncomeHistory('weekly');
                    getIncomeHistory('monthly');
                    handleButtonClick('income');
                  }}
                >
                  <img
                    src={buttonClicked === 'income' ? arrowClicked : incomeIcon}
                    alt="income icon"
                  />
                </button>
              </div>

              {/* Filter by Date */}
              <button className="relative w-[189px] h-[57px] rounded-[12px] shadow-md text-lg text-[#6379F4] leading-[25px] font-bold">
                <div className="absolute top-4 left-10">Filter by Date</div>
                <div className="opacity-0">
                  <DateRangePicker
                    showOneCalendar
                    format="dd/MM/yyyy"
                    onChange={(date) => {
                      handleDateRange(date);
                      setButtonClicked(false);
                    }}
                    placement="topEnd"
                    showHeader={false}
                    size="lg"
                  />
                </div>
              </button>
            </div>
          </div>
        </main>
      </section>
      <Footer />
    </div>
  );
};

export default HistoryPage;
