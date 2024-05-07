import React from "react";
import {useState, useEffect} from 'react'
import imageGroup from '../../assets/images/Group 57.png'
import imageMaskGroup from '../../assets/images/Mask Group.png'

function CreatePin (){
    const [otp, setOtp] = useState(new Array(6).fill(''));

    useEffect(() => {
        document.querySelectorAll('form input')[0].focus()
    }, [])

    const handleInputPin = (element, index) => {
        if (isNaN(element.value)) return false;

        setOtp([...otp.map((d, idx) => (idx === index) ? element.value : d )])

        //fokus otomatis input pin selanjutnya
        if (element.nextSibling) {
            element.nextElementSibling.focus();
        }

    }

    const handleSubmitPin = (e) => {
        e.preventDefault()

        alert(`Pin yang di input : ${otp.join('')}`)
    }

    return (
        <main className="flex flex-row w-screen overflow-y-hidden font-nunito overflow-x-hidden">
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
        <section className="absolute top-[25%] md:static md:w-1/2 h-screen flex flex-col rounded-[20px] md:rounded-none px-5 md:px-12 py-12 bg-white overflow-hidden">
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
                        otp.map((data, index) => {
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
                <button className="bg-[#6457570D] text-[#DADADA] rounded-[10px] p-5" type="submit">Confirm</button>
            </form>
            <div>

            </div>
        </section>
        <section className="absolute top-[25%] md:static md:w-1/2 h-screen flex hidden flex-col rounded-[20px] md:rounded-none gap-y-7 px-5 md:px-12 md:py-20 bg-white overflow-hidden">   
            <div className="md:w-[65%] flex flex-col text-center md:text-left gap-y-7 py-8 md:py-0">
                <span className="w-fit self-center md:self-start text-white text-2xl font-bold bg-[#1EC15F] px-6 py-4 rounded-full rotate-12">&#10003;</span>
                <h2 className="hidden md:block text-[#3A3D42] font-bold text-2xl mt-3">Your PIN Was Successfully Created</h2>
                <h2 className="md:hidden text-[#3A3D42] font-bold text-2xl mt-3">PIN Successfully Created</h2>
                <p className="text-[#3A3D4299] font-normal text-base">Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!</p>
                <a className="bg-primary text-white text-center font-bold text-[18px] rounded-[12px] p-3 mt-10" href="/login">Login Now</a>
            </div>
        </section>
    </main>
    )
}

export default CreatePin;