import { Pen } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import CurrencyInput from 'react-currency-input-field';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import UserLists from '../../component/elements/UserLists';
import { Button } from '../../component/parts/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../component/parts/card';
import { Input } from '../../component/parts/input';
import Layout from '../../component/templates/layout';
import { setTransferDetails } from '../../store/reducer/transfer';
import useApi from '../../utils/useApi';

function SendMoney(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { profile } = useSelector((state) => state.profile);

  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState('');
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [className, setClassName] = useState('');
  const [amount, setAmount] = useState('');
  const [notes, setNotes] = useState('');

  const api = useApi();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`/user/${id}`);
        setUser(response.data.user);
      } catch (error) {
        console.error('Error fetching user:', error);
      }
    };

    fetchUser();
  }, []);

  const validateValue = (value) => {
    if (!value) {
      setClassName('');
    } else if (Number.isNaN(Number(value))) {
      setErrorMessage('Please enter a valid number');
      setClassName('is-invalid');
    } else {
      setClassName('is-valid');
    }
    setAmount(value);
  };

  const handleInputChange = (e) => {
    setNotes(e.target.value);
  };

  const handleClickSubmit = async (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount)) {
      setErrorMessage('Please enter a valid amount');
      return;
    }
    try {
      await dispatch(setTransferDetails({ id, amount, notes }));
      navigate(`/transfers/${id}/confirm`);
    } catch (error) {
      console.error('Error transferring money:', error);
    }
  };

  const handleInputFocus = () => {
    setIsInputFocused(true);
  };

  const handleInputBlur = () => {
    setIsInputFocused(false);
  };

  return (
    <>
      <Layout>
        <Card className="bg-white border-none drop-shadow-md rounded-3xl">
          <CardHeader className="gap-6 p-[30px]">
            <CardTitle className="text-lg font-bold">Transfer Money</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-10 px-[30px pb-5">
            <UserLists data={user} />
            <div className="w-full h-max flex flex-col gap-11 justify-between">
              <div className="w-full">
                <p className="text-base text-listSecondary text-left w-1/2">
                  Type the amount you want to transfer and then press continue
                  to the next steps.
                </p>
              </div>
              <div className="w-full ">
                <div className="inline-flex flex-col gap-3 items-center justify-center w-full">
                  <CurrencyInput
                    id="validation-example-2-field"
                    placeholder="0.00"
                    allowDecimals={false}
                    className={`flex  mx-auto w-full text-center rounded-md border-none bg-transparent py-5 px-8 text-[42px] text-primary font-bold placeholder:text-secondary disabled:cursor-not-allowed focus:outline-none focus:ring-0 disabled:opacity-50 ${className}`}
                    onValueChange={validateValue}
                    prefix={'Rp'}
                    intlConfig={{
                      locale: 'id-ID',
                      currency: 'IDR',
                    }}
                    step={10}
                    value={amount}
                  />
                  <div className="invalid-feedback">{errorMessage}</div>

                  <p className="text-base text-dark text-center font-bold">
                    Rp{profile.balance} Available
                  </p>

                  <div className="relative mt-8 mx-auto w-[40%] *:text-[#A9A9A9] focus:*:text-primary">
                    <Pen
                      className={`absolute left-2.5 top-3 h-6 w-6 pencil-icon ${
                        isInputFocused ? '!text-primary' : ''
                      }`}
                    />
                    <Input
                      type="text"
                      name={props.name}
                      placeholder="Add some notes"
                      className="pl-10 pr-4 py-3 h-full w-full items-center rounded-none text-base !text-dark font-semibold placeholder:text-dark/40 placeholder:font-normal border-0 border-b-[1.5px] border-b-dark/25 bg-transparent focus:border-b-primary focus:outline-none focus:ring-0"
                      onChange={handleInputChange}
                      onFocus={handleInputFocus}
                      onBlur={handleInputBlur}
                    />
                  </div>

                  <div className="w-full inline-flex justify-end mt-12">
                    <Button
                      className="rounded-xl"
                      size="lg"
                      onClick={handleClickSubmit}
                    >
                      Continue
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </Layout>
    </>
  );
}

export default SendMoney;
