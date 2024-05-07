import React from "react";

export default function Footer() {
  return (
    <footer className="py-4 bg-primary text-[#EFEFEF]">
      <section className="container flex justify-between items-center mx-auto  px-2 sm:px-6 lg:px-8">
        <div className="opacity-90 text-sm xl:text-base">
          <p>2020 FazzPay. All right reserved.</p>
        </div>
        <div className="flex gap-x-8 text-sm xl:text-base">
          <p>+62 5637 8882 9901</p>
          <p>contact@fazzpay.com</p>
        </div>
      </section>
    </footer>
  );
}
