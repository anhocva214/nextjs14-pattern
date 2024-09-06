"use client";

import "@/styles/globals.css"
import "@/styles/font-awesome6pro/css/all.min.css"
import "animate.css/animate.compat.css"

// -----
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Provider } from "react-redux";
import store from "@/redux";
import dayjs from "dayjs";
dayjs.locale("vi");
import "dayjs/locale/vi";
import Script from "next/script";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Provider store={store}>
      <html lang="en">
        <body>
          <AntdRegistry>{children}</AntdRegistry>

          <Script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></Script>
          <Script src="/js/main.js" ></Script>
        </body>
      </html>
    </Provider>

  );
}
