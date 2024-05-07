import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import useApi from '../../utils/useApi'
import { login } from '../../store/reducer/user'
import imageGroup from '../../assets/images/Group 57.png'
import iconEmail from '../../assets/icons/mail.svg'
import iconLock from '../../assets/icons/lock.svg'
import iconEyeCrossed from '../../assets/icons/eye-crossed.png'
import iconEye from '../../assets/icons/icon-eye.svg'
import '../../custom-css/login.css'

function Login(){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const api = useApi();
    const alertElm = document.querySelector("#alert-error");

    const [userData, setUserData] = useState({});
    const [message, setMessage] = useState(null);

    const {isAuth} = useSelector((state) => state.users)
    // const isAuth = true

    useEffect(() => {
        if (isAuth) {
            navigate('/');
        }
    }, [isAuth]);

    const changeHanlder = (e) => {
        const data = { ...userData }
        data[e.target.name] = e.target.value
        setUserData(data)
    }

    const submitHandler = (e) => {
        e.preventDefault();

        api({
            method: 'POST',
            url: '/auth',
            data: userData
        })
            .then(({ data }) => {
                setMessage('Login Berhasil')
                alertElm.classList.add('opacity-100')
                setTimeout(() => {
                    dispatch(login(data.token))
                }, 1500)
            })
            .catch((err) => {
                setMessage(err.response.data.message)
                alertElm.classList.add('opacity-100')

            })
    }

    const closeAllert = () => {
        alertElm.classList.remove('opacity-100')
    }

    //Menghilangkan alert secara otomatis
    useEffect(() => {
        if (message) {
            setTimeout(() => {
                alertElm.classList.remove('opacity-100');
            }, 7000)
        }
    },[message])

    return (
        <main className="flex flex-row w-screen overflow-y-hidden font-nunito">
            <section className='jumbotron w-full md:w-1/2 h-screen flex flex-col px-20 py-12 bg-primary/[0.2] md:bg-hero-side bg-cover bg-no-repeat overflow-y-hidden'>
                <a className="self-center md:self-start text-primary md:text-white text-[29px] font-bold" href="/">Zwallet</a>
                <div className="hidden md:block md:pl-16">
                    <img className="w-[100%] max-w-[385px] h-auto " src={imageGroup} alt="image hero" />
                </div>
                <h2 className="hidden md:inline-block text-2xl text-white font-bold mb-5">App that Covering Banking Needs.</h2>
                <p className="hidden md:inline-block w-[85%] text-[#FFFFFFCC] text-base">Zwallet is an application that focussing in banking needs for all users
                    in the world. Always updated and always following world trends.
                    5000+ users registered in Zwallet everyday with worldwide
                    users coverage.
                </p>
            </section>
            <section className="absolute top-[25%] md:static md:w-1/2 h-screen flex flex-col rounded-[20px] md:rounded-none gap-y-7 px-5 md:px-12 py-12 bg-white">
                <h2 className="md:hidden self-center text-2xl font-bold text-[#3A3D42]">Login</h2>
                <h2 className="hidden md:flex w-[60%] text-2xl font-bold text-[#3A3D42] leading-normal">Start Accessing Banking Needs
                    With All Devices and All Platforms
                    With 30.000+ Users
                </h2>
                <p className="hidden md:flex w-[60%] text-[#3A3D4299] text-base leading-loose">
                    Transfering money is eassier than ever, you can access Zwallet wherever 
                    you are. Desktop, laptop, mobile phone? we cover all of that for you!
                </p>
                <p className="md:hidden w-[100%] text-center text-[#3A3D4299] text-base leading-loose">Login to your existing account to access all the features in Zwallet.</p>
                <form className="md:w-[75%] flex flex-col gap-y-5" onSubmit={(event) => {submitHandler(event)}}>
                    <div className="flex flex-row border-b-[1.5px] border-[#A9A9A999] py-2 mt-5">
                        <div className="w-[12%] md:w-[8%]">
                            <img src={iconEmail} alt="" />
                        </div>
                        <input className="w-[100%] outline-none"  type="mail" name="email" required placeholder="Enter your e-mail" autoComplete="email" onChange={(event) => {changeHanlder(event)}} />
                    </div>
                    <div className="flex flex-row border-b-[1.5px] border-[#A9A9A999] py-2 mt-5" >
                        <div className="w-[12%] md:w-[8%]">
                            <img src={iconLock} alt="" />
                        </div>
                        <input className="w-[100%] outline-none" type="password" name="password" id="" placeholder="Enter your password" onChange={(event) => {changeHanlder(event)}} />
                        <button type="button">
                            <img src={iconEyeCrossed} alt="" />
                        </button>
                    </div>
                    <a className="self-end" href="/reset-password">Forgot password?</a>
                    <button className="bg-[#88888f3f] hover:bg-primary hover:text-white text-[#88888F] rounded-[8px] p-4 mt-10" type="submit">Login</button>
                    <span className="self-center mt-4">Don’t have an account? Let’s <a className="text-primary" href="/signup">Sign Up</a></span>
                </form>
            </section>
            <div id='alert-error' className='opacity-0  fixed top-0 left-0 w-screen h-screen flex flex-row justify-center items-center bg-[#000000CC] transition-all ease-in-out duration-1000 pointer-events-none'>
                <div className='bg-white h-fit flex flex-col items-center justify-center gap-y-7 rounded-[2px] px-12 py-5'>
                    <p className='font-bold text-blue-700 text-xl'>{message && message ? message : "Maaf terjadi kesalahan"}</p>
                    <button id='btn-alert' className='bg-blue-700 text-white rounded-[2px] px-7 py-2 hover:bg-blue-900 pointer-events-auto' type='button' onClick={() => {closeAllert()}}>OK</button>
                </div>
            </div>
        </main>
    )
}

export default Login;