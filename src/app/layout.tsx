"use client";

import "@/styles/globals.css"
import "@/styles/font-awesome6pro/css/all.min.css"
// -----
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { Provider } from "react-redux";
import store from "@/redux";
import dayjs from "dayjs";
dayjs.locale("vi");
import "dayjs/locale/vi";



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
        </body>
      </html>
    </Provider>

  );
}
