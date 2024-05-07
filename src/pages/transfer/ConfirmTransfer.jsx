import { REGEXP_ONLY_DIGITS } from 'input-otp';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import DescriptionLists from '../../component/elements/DescriptionList';
import UserLists from '../../component/elements/UserLists';
import { Button } from '../../component/parts/button';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '../../component/parts/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../component/parts/dialog';
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '../../component/parts/input-otp';
import Layout from '../../component/templates/layout';
import useApi from '../../utils/useApi';

function ConfirmTransfer() {
  const { id } = useParams();
  const { profile } = useSelector((state) => state.profile);
  const transfer = useSelector((state) => state.transfer);
  const navigate = useNavigate();

  const [value, setValue] = useState('');
  const [user, setUser] = useState('');
  const [isPinValid, setIsPinValid] = useState(true);

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

  const handleSubmitPin = async (e) => {
    e.preventDefault();

    try {
      const checkpin = await api.post(`/user/checkpin`, {
        pin: value,
      });

      if (checkpin.data.description !== 'OK') {
        throw new Error(checkpin.data.message);
      }
      setIsPinValid(true);

      const response = await api.post(`/transaction/send/${id}`, {
        amount: transfer.amount,
        notes: transfer.notes,
      });

      console.log('Transfer successful:', response.data);
      setValue('');
      navigate(`/transfers/${id}/status`);
    } catch (error) {
      setIsPinValid(false);
      console.error('Error while sending transfer:', error);
    }
  };
  return (
    <>
      <Layout>
        <Card className="bg-white border-none drop-shadow-md rounded-3xl">
          <CardHeader className="gap-6 p-[30px]">
            <CardTitle className="text-lg font-bold">Transfer To</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-5 px-[30px pb-5">
            <UserLists data={user} />
            <CardTitle className="text-lg font-bold">Details</CardTitle>
            <DescriptionLists title="Amount" description={transfer.amount} />
            <DescriptionLists
              title="Balance Left"
              description={profile.balance - transfer.amount}
            />
            <DescriptionLists
              title="Date & Time"
              description="May 11, 2020 - 12.20"
            />
            <DescriptionLists title="Notes" description={transfer.notes} />
            <div className="w-full inline-flex justify-end ">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="rounded-xl" size="lg">
                    Continue
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[503px] !rounded-2xl inline-flex flex-col gap-10">
                  <DialogHeader>
                    <DialogTitle className="font-bold mb-3">
                      Enter PIN to Transfer
                    </DialogTitle>
                    <DialogDescription className="mt-2 text-base text-[#3A3D42]/60 w-3/4">
                      Enter your 6 digits PIN for confirmation to continue
                      transferring money.
                    </DialogDescription>
                  </DialogHeader>
                  <InputOTP
                    className="text-center text-[30px] font-bold"
                    maxLength={6}
                    pattern={REGEXP_ONLY_DIGITS}
                    value={value}
                    onChange={(value) => setValue(value)}
                  >
                    <InputOTPGroup className="gap-6 justify-center w-full rounded-md">
                      <InputOTPSlot
                        className={`${
                          isPinValid ? 'border-list ' : 'border-error '
                        }!rounded-md w-14 h-16 text-center text-[30px] font-bold !border`}
                        index={0}
                      />
                      <InputOTPSlot
                        className={`${
                          isPinValid ? 'border-list ' : 'border-error '
                        }!rounded-md w-14 h-16 text-center text-[30px] font-bold !border`}
                      />
                      <InputOTPSlot
                        className={`${
                          isPinValid ? 'border-list ' : 'border-error '
                        }!rounded-md w-14 h-16 text-center text-[30px] font-bold !border`}
                        index={2}
                      />
                      <InputOTPSlot
                        className={`${
                          isPinValid ? 'border-list ' : 'border-error '
                        }!rounded-md w-14 h-16 text-center text-[30px] font-bold !border`}
                        index={3}
                      />
                    </InputOTPGroup>
                  </InputOTP>
                  <DialogFooter>
                    <Button
                      type="submit"
                      size="lg"
                      className="rounded-xl mt-12"
                      onClick={handleSubmitPin}
                    >
                      Continue
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
      </Layout>
    </>
  );
}

export default ConfirmTransfer;
