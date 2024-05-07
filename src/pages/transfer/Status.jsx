import { Download, Share2 } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import DescriptionLists from '../../component/elements/DescriptionList';
import UserLists from '../../component/elements/UserLists';
import { Button, buttonVariants } from '../../component/parts/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../../component/parts/card';
import Layout from '../../component/templates/layout';
import useApi from '../../utils/useApi';

const userDumy = {
  id: 1,
  frist_name: 'John',
  last_name: 'Doe',
  phone_number: '+62 813-8492-9994',
  picture_url:
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
};

function Status(props) {
  const { id } = useParams();
  const api = useApi();

  const { profile } = useSelector((state) => state.profile);
  const transfer = useSelector((state) => state.transfer);

  const [user, setUser] = useState('');

  const { success = true } = props;

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
  return (
    <>
      <Layout>
        <Card className="bg-white border-none drop-shadow-md rounded-3xl">
          <CardHeader className="gap-6 p-[30px]">
            <div className="flex flex-col items-center gap-5">
              {success ? (
                <>
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="35" cy="35" r="35" fill="#1EC15F" />
                    <path
                      d="M49 24.5L29.75 43.75L21 35"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <CardTitle className="text-lg text-center font-bold">
                    Transfer Success
                  </CardTitle>
                </>
              ) : (
                <>
                  <svg
                    width="70"
                    height="70"
                    viewBox="0 0 70 70"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="35" cy="35" r="35" fill="#FF5B37" />
                    <path
                      d="M45.5 24.5L24.5 45.5"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M24.5 24.5L45.5 45.5"
                      stroke="white"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  <CardTitle className="text-lg text-center font-bold">
                    Transfer Success
                  </CardTitle>
                  <CardDescription className="text-center text-listSecondary w-[58%]">
                    We can’t transfer your money at the moment, we recommend you
                    to check your internet connection and try again.
                  </CardDescription>
                </>
              )}
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-5 px-[30px pb-5">
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
            <CardTitle className="text-lg font-bold">Transfer To</CardTitle>
            <UserLists data={user} />

            <div className="w-full inline-flex justify-end gap-4">
              <Button className="rounded-xl font-semibold bg-primary/35 hover:bg-primary/50 text-primary gap-3 w-14 h-auto p-0">
                <Share2 className="text-dark" />
              </Button>
              <Button
                className="rounded-xl font-semibold bg-primary/35 hover:bg-primary/50 text-primary gap-3"
                size="lg"
              >
                <Download className=" text-primary" />
                Download PDF
              </Button>

              <Link
                to="/home"
                className={buttonVariants({
                  size: 'lg',
                  className: 'rounded-xl',
                })}
                size="lg"
              >
                Back to Home
              </Link>
            </div>
          </CardContent>
        </Card>
      </Layout>
    </>
  );
}

export default Status;
