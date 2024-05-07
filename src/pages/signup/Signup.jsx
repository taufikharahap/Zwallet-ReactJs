import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import useApi from '../../utils/useApi'
import imageGroup from '../../assets/images/Group 57.png'
import iconEmail from '../../assets/icons/mail.svg'
import iconLock from '../../assets/icons/lock.svg'
import iconEyeCrossed from '../../assets/icons/eye-crossed.png'
import iconEye from '../../assets/icons/icon-eye.svg'
import iconPerson from '../../assets/icons/person.png'
import '../../custom-css/login.css'

function SignUp () {
    const [dataUser, setDataUser] = useState({})
    const [pin, setPin] = useState(new Array(6).fill(''));
    const [isRegister, setIsRegister] = useState(false)
    const [isCreatePin, setIsCreatePin] = useState(false)
    const [message, setMessage] = useState(null)

    const api = useApi()
    const alertElm = document.querySelector("#alert-error");

    const {isAuth} = useSelector((state) => state.users)
    const navigate = useNavigate()

    useEffect(() => {
        if (isAuth) {
            navigate('/')
        }
    }, [isAuth])

    const changeHanlder = (e) => {
        const data = { ...dataUser }
        data[e.target.name] = e.target.value
        setDataUser(data)
    }

    const createNewUser = (e) => {
        e.preventDefault();

        api({
            method: 'POST',
            url: '/user/create',
            data: dataUser
        })
        .then((_) => {
            setTimeout(() => {
                setIsRegister(true)
            }, 1500);
            setMessage('Pendaftaran Berhasil')
            alertElm.classList.add('opacity-100')
        })
        .catch((err) => {
            setMessage(err.response.data.error)
            alertElm.classList.add('opacity-100')
        })
    }

    const handleInputPin = (element, index) => {
        if (isNaN(element.value)) return false;

        setPin([...pin.map((d, idx) => (idx === index) ? element.value : d )])

        //fokus otomatis input pin selanjutnya
        if (element.nextSibling) {
            element.nextElementSibling.focus();
        }

        const checkInputPin = pin.filter((p) => Boolean(p));
        if ((checkInputPin.length + 1)  === 6){
            document.querySelector('.btn-submit-pin').toggleAttribute('disabled')
            document.querySelector('.btn-submit-pin').classList.replace('bg-[#6457570D]', 'bg-primary')
            document.querySelector('.btn-submit-pin').classList.replace('text-[#DADADA]', 'text-white')
        }else{
            document.querySelector('.btn-submit-pin').setAttribute('disabled', true)
            document.querySelector('.btn-submit-pin').classList.replace('bg-primary', 'bg-[#6457570D]')
            document.querySelector('.btn-submit-pin').classList.replace('text-white', 'text-[#DADADA]')
        }
    }

    const handleSubmitPin = (e) => {
        e.preventDefault()

        console.log(pin.join(''))

        api({
            method: 'PATCH',
            url: '/user/pin/add',
            data: {pin : pin.join(''), email: dataUser.email}
        })
        .then((_) => {
            setTimeout(() => {
                navigate('/login')
            }, 1500);
            setMessage('Pin berhasil dibuat')
            alertElm.classList.add('opacity-100')
        })
        .catch((err) => {
            setMessage(err.response.data.error)
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
        <main className="flex flex-row w-screen overflow-x-hidden font-nunito">
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
            {
                !isRegister ?
                    <section className="absolute top-[25%] md:static md:w-1/2 h-screen flex flex-col rounded-[20px] md:rounded-none gap-y-7 px-5 md:px-12 py-12 bg-white">
                        <h2 className="md:hidden self-center text-2xl font-bold text-[#3A3D42]">Sign Up</h2>
                        <h2 className="hidden md:flex w-[60%] text-2xl font-bold text-[#3A3D42] leading-normal">Start Accessing Banking Needs
                            With All Devices and All Platforms
                            With 30.000+ Users
                        </h2>
                        <p className="hidden md:flex w-[60%] text-[#3A3D4299] text-base leading-loose">
                            Transfering money is eassier than ever, you can access Zwallet wherever 
                            you are. Desktop, laptop, mobile phone? we cover all of that for you!
                        </p>
                        <p className="md:hidden w-[100%] text-center text-[#3A3D4299] text-base leading-loose">Create your account to access Zwallet.</p>
                        <form className="md:w-[75%] flex flex-col gap-y-5" onSubmit={(event) => createNewUser(event)}>
                            <div className="flex flex-row border-b-[1.5px] border-[#A9A9A999] py-2 mt-5">
                                <div className="w-[12%] md:w-[8%]">
                                    <img src={iconPerson} alt="" />
                                </div>
                                <input className="w-[100%] outline-none"  type="text" name="username" required placeholder="Enter your username" onChange={(event) => changeHanlder(event)}/>
                            </div>
                            <div className="flex flex-row border-b-[1.5px] border-[#A9A9A999] py-2 mt-5">
                                <div className="w-[12%] md:w-[8%]">
                                    <img src={iconEmail} alt="" />
                                </div>
                                <input className="w-[100%] outline-none"  type="mail" name="email" required placeholder="Enter your e-mail" autoComplete="email" onChange={(event) => changeHanlder(event)} />
                            </div>
                            <div className="flex flex-row border-b-[1.5px] border-[#A9A9A999] py-2 mt-5" >
                                <div className="w-[12%] md:w-[8%]">
                                    <img src={iconLock} alt="" />
                                </div>
                                <input className="w-[100%] outline-none" type="password" name="password" id="" placeholder="Enter your password" onChange={(event) => changeHanlder(event)}/>
                                <button type="button">
                                    <img src={iconEyeCrossed} alt="" />
                                </button>
                            </div>
                            <button className="bg-[#88888f3f] hover:bg-primary hover:text-white text-[#88888F] rounded-[8px] p-4 mt-10" type="submit">Sign Up</button>
                            <span className="self-center mt-4">Already have an account? Let’s <a className="text-primary" href="/login">Login</a></span>
                        </form>
                    </section>
                :
                    <div className="create-pin absolute top-[25%] md:static md:w-1/2">
                        {
                            !isCreatePin ?  
                                <section className=" h-screen flex flex-col rounded-[20px] md:rounded-none px-5 md:px-12 py-12 bg-white overflow-hidden">
                                <h2 className="md:hidden self-center text-2xl font-bold text-[#3A3D42]">Create Security PIN</h2>
                                <h2 className="hidden md:flex w-[60%] text-2xl font-bold text-[#3A3D42] leading-normal">
                                    Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That You Created Yourself.
                                </h2>
                                <p className="hidden md:flex w-[60%] text-[#3A3D4299] text-base leading-loose">
                                    Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don’t tell 
                                    anyone about your Zwallet account password and the PIN.
                                </p>
                                <p className="md:hidden w-[100%] text-center text-[#3A3D4299] text-base leading-loose">Create a PIN that’s contain 6 digits number for security purpose in Zwallet.</p>
                                <form className="w-[100%] md:w-[75%] flex flex-col gap-y-16 overflow-x-hidden" onSubmit={e => handleSubmitPin(e)}>
                                    <div className="flex flex-row justify-between gap-x-2 overflow-x-hidden">
                                        {
                                            pin.map((data, index) => {
                                                return <input 
                                                            className="md:w-[53px] md:h-[65px] w-[47px] h-[58px] text-center text-[#3A3D42] text-[30px] font-bold p-2 border border-[#A9A9A999] rounded-[10px] outline-none" 
                                                            type="text" 
                                                            maxLength={1} 
                                                            inputMode="numeric" 
                                                            autoComplete="off"
                                                            key={index} 
                                                            value={data}
                                                            placeholder="_" 
                                                            onChange={e => handleInputPin(e.target, index)}
                                                            onFocus={e => e.target.select()}
                                                            required
                                                        />
                                            })
                                        }
                                    </div>
                                    <button className="btn-submit-pin bg-[#6457570D] text-[#DADADA] rounded-[10px] p-5 cursor-pointer hover:bg-blue-700" disabled type="submit">Confirm</button>
                                </form>
                                </section>
                            :
                                <section className=" h-screen flex flex-col rounded-[20px] md:rounded-none gap-y-7 px-5 md:px-12 md:py-20 bg-white overflow-hidden">   
                                    <div className="md:w-[65%] flex flex-col text-center md:text-left gap-y-7 py-8 md:py-0">
                                        <span className="w-fit self-center md:self-start text-white text-2xl font-bold bg-[#1EC15F] px-6 py-4 rounded-full rotate-12">&#10003;</span>
                                        <h2 className="hidden md:block text-[#3A3D42] font-bold text-2xl mt-3">Your PIN Was Successfully Created</h2>
                                        <h2 className="md:hidden text-[#3A3D42] font-bold text-2xl mt-3">PIN Successfully Created</h2>
                                        <p className="text-[#3A3D4299] font-normal text-base">Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</p>
                                        <a className="bg-primary text-white text-center font-bold text-[18px] rounded-[12px] p-3 mt-10" href="/login">Login Now</a>
                                    </div>
                                </section>
                        }
                    </div>
            }
            <div id='alert-error' className='opacity-0  fixed top-0 left-0 w-screen h-screen flex flex-row justify-center items-center bg-[#000000CC] transition-all ease-in-out duration-1000 pointer-events-none'>
                <div className='bg-white h-fit flex flex-col items-center justify-center gap-y-7 rounded-[2px] px-12 py-5'>
                    <p className='font-bold text-blue-700 text-xl'>{message && message ? message : "Maaf terjadi kesalahan"}</p>
                    <button id='btn-allert' className='bg-blue-700 text-white rounded-[2px] px-7 py-2 hover:bg-blue-900 pointer-events-auto' type='button' onClick={() => {closeAllert()}}>OK</button>
                </div>
            </div>
        </main>
    )
}

export default SignUp;