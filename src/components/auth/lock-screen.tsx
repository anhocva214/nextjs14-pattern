"use client";

import moment from "moment";
import { useEffect, useState } from "react";

export default function LockScreen() {
  const [isVisibleBtnLogin, setIsVisibleBtnLogin] = useState(false);
  const [isVisibleTextHello, setIsVisibleTextHello] = useState(false);

  setTimeout(() => {
    setIsVisibleBtnLogin(true);
  }, 2000);

  setTimeout(() => {
    setIsVisibleTextHello(true);
  }, 700);

  return (
    <div
      style={{ backgroundImage: "url(/img/lock-bg.jpg)" }}
      className="w-screen h-screen object-cover bg-center bg-cover"
    >
      <div className="w-full flex justify-center flex-col items-center py-8">
        <h2 className="text-white text-lg sm:text-2xl font-semibold">
          {moment().format("DD [tháng] MM, YYYY")}
        </h2>
        <h2 className="text-white text-6xl sm:text-8xl font-semibold">
          {moment().format("HH:mm")}
        </h2>
      </div>

      <div
        style={{ opacity: isVisibleTextHello ? 1 : 0 }}
        className="w-full flex items-center justify-center absolute top-1/3 left-1/2 -translate-x-1/2 transition-all duration-300"
      >
        <h1 className="font-playwrite text-4xl sm:text-5xl text-white ml3">HBC chào bạn</h1>
      </div>

      <div className=" absolute bottom-0 left-0 w-full flex justify-center pb-8">
        <button
          style={{
            opacity: isVisibleBtnLogin ? 1 : 0,
          }}
          className="flex items-center gap-2 justify-center bg-white/10 py-2.5 px-3 rounded-full hover:bg-white/20 hover:-translate-y-1.5 transition-all duration-300"
        >
          <span>
            <img
              className="w-[35px] h-[35px]"
              src="/img/icons8-google.svg"
              alt="img"
            />
          </span>
          <span className="text-lg text-white">Đăng nhập bằng Google</span>
        </button>
      </div>
    </div>
  );
}
