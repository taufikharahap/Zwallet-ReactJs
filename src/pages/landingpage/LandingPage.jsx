import bgFirstSection from '../../assets/bg-first-section.svg';
import zwalletLogo from '../../assets/zwallet-logo.svg';
import support from '../../assets/support.svg';
import dataPrivacy from '../../assets/data-privacy.svg';
import easyDownload from '../../assets/easy-download.svg';
import microsoft from '../../assets/microsoft.svg';
import dropbox from '../../assets/dropbox.svg';
import handm from '../../assets/h&m.svg';
import airbnb from '../../assets/airbnb.svg';
import canon from '../../assets/canon.svg';
import dell from '../../assets/dell.svg';
import doublePhone from '../../assets/double-phone.svg';
import Carousel from '../../component/Carousel';
import alex from '../../assets/alex.svg';
import sherina from '../../assets/sherina.svg';
import jessica from '../../assets/jessica.svg';
import robert from '../../assets/robert.svg';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();
  const advantages = [
    {
      image: support,
      title: '24/7 Support',
      desc: 'We have 24/7 contact support so you can contact us whenever you want and we will respond it.',
    },
    {
      image: dataPrivacy,
      title: 'Data Privacy',
      desc: 'We make sure your data is safe in our database and we will encrypt any data you submitted to us.',
    },
    {
      image: easyDownload,
      title: 'Easy Download',
      desc: 'Zwallet is 100% totally free to use it’s now available on Google Play Store and App Store.',
    },
  ];

  const sponsors = [
    {
      img: microsoft,
      name: 'microsoft',
    },
    {
      img: dropbox,
      name: 'dropbox',
    },
    {
      img: handm,
      name: 'h&m',
    },
    {
      img: airbnb,
      name: 'air bnb',
    },
    {
      img: canon,
      name: 'canon',
    },
    {
      img: dell,
      name: 'dell',
    },
  ];

  const benefits = [
    {
      no: '1.',
      title: 'Small Fee',
      desc: 'We only charge 5% of every success transaction done in Zwallet app.',
    },
    {
      no: '2.',
      title: 'Data Secured',
      desc: 'All your data is secured properly in our system and it’s encrypted.',
    },
    {
      no: '3.',
      title: 'User Friendly',
      desc: 'Zwallet come up with modern and sleek design and not complicated.',
    },
  ];

  const users = [
    {
      image: alex,
      name: 'Alex Hansinburg',
      job: 'Designer',
      comment:
        '“This is the most outstanding app that I’ve ever try in my live, this app is such an amazing masterpiece and it’s suitable for you who is bussy with their bussiness and must transfer money to another person aut there. Just try this app and see the power!”',
    },
    {
      image: sherina,
      name: 'Sherina Chaw',
      job: 'Psychologist',
      comment:
        '“I use this app since 2 years ago and this is the best app that I’ve ever use in my entire life“',
    },
    {
      image: jessica,
      name: 'Jessica Mera',
      job: 'Nurse',
      comment:
        '“I use Zwallet to manage all financial needs. It’s super easy to use and it’s 100% free app“',
    },
    {
      image: robert,
      name: 'Robert Chandler',
      job: 'Photographer',
      comment:
        '“Since I’m using this app, I’m not going to move to another similar app. Thank you Zwallet!“',
    },
  ];

  return (
    <div className="w-[1440px] font-nunito mx-auto">
      {/* First Section */}
      <section
        className="w-full h-[900px] bg-no-repeat bg-cover bg-center px-[150px] py-[63px]"
        style={{ backgroundImage: `url(${bgFirstSection})` }}
      >
        <main>
          <div className="flex justify-between">
            <img src={zwalletLogo} alt="zwallet logo" />
            <div>
              <button
                className="w-[120px] h-[48px] rounded-[12px] bg-transparent border-2 border-white text-lg text-white font-bold leading-[25px] mr-[30px] transform active:scale-90 active:opacity-75 hover:bg-opacity-90 transition duration-300"
                onClick={() => navigate('/login')}
              >
                Login
              </button>
              <button
                className="w-[120px] h-[48px] rounded-[12px] bg-white text-lg text-[#6379F4] font-bold leading-[25px] transform active:scale-90 active:opacity-75 hover:bg-opacity-90 transition duration-300"
                onClick={() => navigate('/signup')}
              >
                Sign up
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center py-[177px]">
            <div className="w-[539px] h-[420px] flex flex-col justify-between items-center">
              <div className="w-full h-[204px] text-[68px] text-white text-center font-[800] leading-[102px]">
                Awesome App For Saving Time.
              </div>
              <div className="w-[428px] h-[69px] text-lg text-white text-center leading-[31px]">
                We bring you a mobile app for banking problems that oftenly
                wasting much of your times.
              </div>
              <button className="w-[173px] h-[57px] rounded-[12px] bg-white text-lg text-[#6379F4] font-bold leading-[25px] transform active:scale-90 active:opacity-75 hover:bg-opacity-90 transition duration-300">
                Try It Free
              </button>
            </div>
          </div>
        </main>
      </section>

      {/* Second Section */}
      <section className="w-full h-[839px] bg-[#fafcff] px-[150px] py-[120px]">
        <main className="flex flex-col items-center">
          <div className="text-[60px] font-[800] leading-[93px]">
            <span className="text-[#6379F4]">Why&nbsp;</span>Choose Zwallet?
          </div>
          <div className="w-[570px] text-lg leading-[31px] text-center mt-[30px] mb-[70px]">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </div>
          <div className="w-full flex justify-between">
            {advantages.map((e, i) => (
              <div
                key={i}
                className="flex flex-col items-center w-[366px] h-[344px] rounded-[25px] bg-transparent px-[30px] py-[40px] hover:bg-white"
              >
                <img src={e.image} alt={e.title} className="size-[80px]" />
                <div className="text-2xl text-[#3A3D42] font-bold leading-[31px] mt-[15px] mb-[35px]">
                  {e.title}
                </div>
                <div className="text-lg text-[#3A3D42] leading-[31px] text-center">
                  {e.desc}
                </div>
              </div>
            ))}
          </div>
        </main>
      </section>

      {/* Third Section */}
      <section className="w-full h-[300px] bg-[#eff0fc] px-[150px] py-[90px]">
        <main className="flex justify-between items-center">
          {sponsors.map((e, i) => (
            <img key={i} src={e.img} alt={e.name} />
          ))}
        </main>
      </section>

      {/* Fourth Section */}
      <section className="w-full h-[645px] bg-white px-[315px] py-[120px]">
        <main className="flex flex-col items-center ">
          <div className="flex justify-center items-center w-[720px] h-[170px] font-[800] rounded-full bg-[#eff0fc] text-[#6379F4] text-[68px] leading-[102px]">
            Rp. 390.736.500
          </div>
          <div className="text-[60px] font-[800] leading-[93px] mt-[50px] mb-[30px]">
            <span className="text-[#6379F4]">Money</span> has Been Transfered.
          </div>
          <div className="w-[567px] text-lg leading-[31px] text-center">
            That amount of money has been transfered from all users. We still
            counting and going strong!
          </div>
        </main>
      </section>

      {/* Fifth Section */}
      <section className="flex w-full h-[1015px] bg-[#eff0fd] py-[80px]">
        <div>
          <img src={doublePhone} alt="double phone" />
        </div>
        <div>
          <div className="bg-[#eff0fd] w-[500px] font-[800] text-[60px] leading-[93px] ml-[-10px] mt-[95px] mb-10">
            All The <span className="text-[#6379F4]">Great</span> Zwallet
            Features.
          </div>
          {benefits.map((e, i) => (
            <div
              key={i}
              className="w-[620px] h-[127px] rounded-[25px] shadow-md bg-white p-[25px] mb-[30px]"
            >
              <div className="font-bold text-xl leading-[31px]">
                <span className="text-[#6379F4] mr-[15px]">{e.no}</span>
                {e.title}
              </div>
              <div className="text-lg leading-[31px] mt-[15px]">
                We only charge 5% of every success transaction done in Zwallet
                app.
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sixth Section */}
      <section className="w-full h-[1015px] bg-[#fafcff] p-[120px]">
        <main className="flex flex-col items-center">
          <div className="font-[800] text-[60px] leading-[93px] mb-[30px]">
            What Users are <span className="text-[#6379F4]">Saying.</span>
          </div>

          <div className="w-[567px] text-lg leading-[31px] text-center">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </div>

          <div className="relative bg-[#fafcff] min-h-screen flex justify-center items-center">
            <div className="w-[988px] h-[496px] bg-white rounded-[30px] shadow-md">
              <Carousel>
                {users.map((s, i) => (
                  <div
                    key="{i}"
                    className="w-[988px] h-[496px] flex flex-col justify-start items-center mx-[60px] text-center mt-[60px] "
                  >
                    <img src={s.image} className="size-[120px]" />
                    <div className="font-bold text-[#373C46] text-[28px] leading-10 mt-[30px] mb-[9px]">
                      {s.name}
                    </div>
                    <div className="text-[#56585B] text-[20px] leading-[33px] mb-[45px]">
                      {s.job}
                    </div>
                    <div className="text-[#56585B] text-[18px] leading-[33px] mb-[45px]">
                      {s.comment}
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </main>
      </section>

      {/* Seventh Section */}
      <section className="w-full h-[438px] bg-[#6379F4] px-[150px] py-[80px]">
        <main className=" text-white text-lg leading-[31px]">
          <img src={zwalletLogo} alt="zwallet logo" />
          <div className="w-[285px] mt-[30px] mb-[50px]">
            Simplify financial needs and saving much time in banking needs with
            one single app.
          </div>
          <hr />
          <div className="flex justify-between">
            <div>2020 Zwallet. All right reserved.</div>
            <div className="flex">
              <div className="mr-10">+62 5637 8882 9901</div>
              <div>contact@zwallet.com</div>
            </div>
          </div>
        </main>
      </section>
    </div>
  );
}

export default LandingPage;
