import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import defaultProfile from '../../assets/profile-default.png';
import Header from '../../component/Header';
import ListProfile from '../../component/ListProfile';
import Sidebar from '../../component/Sidebar';
import useApi from '../../utils/useApi';

function Home() {
  const api = useApi();
  const { profile } = useSelector((s) => s.profile);

  // start update image

  const [userDataImage, setUserDataImage] = useState(null);

  const changeInputImgHandler = async (e) => {
    setUserDataImage(e.target.files[0]);
  };
  const submitImg = () => {
    const formData = new FormData();
    formData.append('image', userDataImage);
    api({
      method: 'PATCH',
      url: 'user/image',
      headers: { 'Content-Type': 'multipart/form-data' },
      data: formData,
    })
      .then((res) => {
        alert(res.data.message);

        window.location.reload();
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
      });
  };
  console.log(userDataImage);
  // end update image

  return (
    <div className="">
      <Header />
      <section className=" bg-primary bg-opacity-20 p-12 flex gap-8">
        <Sidebar />
        <main className="container bg-white w-full rounded-3xl shadow-lg px-7 pt-12 pb-16">
          <div className="flex flex-col items-center  text-center ">
            <div className="rounded-lg mx-auto mb-3 overflow-hidden">
              <img
                src={
                  profile.image && profile.image
                    ? profile.image
                    : defaultProfile
                }
                className="w-[80px] h-[80px] object-cover object-center"
              />
            </div>

            <div className="flex gap-x-2 items-center text-[#7A7886]">
              {!userDataImage ? (
                <label
                  htmlFor="formFile"
                  className="block px-4 py-2  cursor-pointer text-sm text-gray-700"
                >
                  <div className="flex gap-x-2">
                    <Icon icon={'prime:pencil'} className={'text-lg'} />
                    <span>Edit</span>
                  </div>
                </label>
              ) : (
                ''
              )}
              {userDataImage ? (
                <p className="cursor-pointer" onClick={submitImg}>
                  Save
                </p>
              ) : (
                ''
              )}
              <input
                className="sr-only "
                type="file"
                id="formFile"
                onChange={changeInputImgHandler}
              />
            </div>
            <h3 className="text-[#4D4B57] font-semibold text-2xl mb-3">
              {profile.username ? profile.username : 'Your Name'}
            </h3>

            {profile.phone ? (
              <p>{profile.phone.split(', ')[0]}</p>
            ) : (
              <Link to={'/profile/add-phone'} className="text-[#7A7886] mb-12">
                Add Phone
              </Link>
            )}

            <div className="flex flex-col p-2 items-center gap-y-4 w-full">
              <ListProfile content={'Personal Information'} />
              <ListProfile content={'Change Password'} />
              <ListProfile content={'Change PIN'} />
              <ListProfile content={'Logout'} />
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default Home;
