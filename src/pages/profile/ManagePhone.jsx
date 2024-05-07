import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import useApi from '../../utils/useApi';
import { Link } from 'react-router-dom';
import Header from '../../component/Header';
import Sidebar from '../../component/Sidebar';
import MainHeader from '../../component/ProfileHead';

function Manage() {
  const api = useApi();

  // get phone
  const [phone, setPhone] = useState(null);

  const getPhone = (e) => {
    api
      .get('/phone')
      .then(({ data }) => {
        setPhone(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // end get phone

  // start delete phone
  // digunakan untuk useeffect didupdate, dirubah saat proses delete, untuk menandai ada data yang di update
  const [reload, setReload] = useState(false);

  const handleDelete = async (phoneId) => {
    console.log(phoneId);
    const confirmed = window.confirm(
      'Apakah Anda yakin ingin menghapus nomor ini?'
    );

    if (confirmed) {
      api
        .delete(`phone/${phoneId}`)
        .then((res) => {
          console.log(res);
          alert(res.data.message);
          setReload(!reload);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  // end delete phone
  useEffect(() => {
    getPhone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    getPhone();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  console.log(phone);
  return (
    <div className="">
      <Header />
      <section className=" bg-primary bg-opacity-20 p-12 flex gap-8">
        <Sidebar />
        <main className="bg-white w-full rounded-3xl shadow-lg px-7 pt-7 pb-12">
          <MainHeader
            title={'Manage Phone'}
            content={
              'You can only delete the phone number and then you must add another phone number.'
            }
          />
          {phone ? (
            phone.map((e, i) => {
              return (
                <section
                  key={e.id}
                  className="mt-10 shadow-md rounded-lg p-4 mb-3 flex justify-between items-center"
                >
                  <div className=" space-y-2 ">
                    <h3 className="text-[#7A7886] ">
                      {i == 0 ? 'Primary' : 'Secondary'}
                    </h3>
                    <p className="text-[#514F5B] font-semibold text-xl">
                      {e.phone_number}
                    </p>
                  </div>
                  <Icon
                    icon={'iconamoon:trash-simple-thin'}
                    className={'text-lg'}
                    onClick={() => handleDelete(e.id)}
                  />
                </section>
              );
            })
          ) : (
            <section className="mt-10 shadow-md rounded-lg p-4 flex justify-between items-center">
              <div className=" space-y-2 ">
                <p className="text-[#514F5B] font-semibold text-xl">
                  Phone Not Set
                </p>
              </div>
              <Link to={'/profile/add-phone'}>Add Phone</Link>
            </section>
          )}
          <Link
            to={'/profile/add-phone'}
            className="text-primary cursor-pointer "
          >
            Add Phone
          </Link>
        </main>
      </section>
    </div>
  );
}

export default Manage;
