import React from 'react';
import dynamic from 'next/dynamic';
import { Button } from 'antd';
import { useAppDispatch } from '@/redux';
import { userActions } from '@/redux/user.redux';

const DynamicExampleTable = dynamic(() => import('@/components/table'), { ssr: false });
const DynamicExampleForm = dynamic(() => import('@/components/form'), { ssr: false });

export default function ExamplePage() {
  const dispatch = useAppDispatch();

  return (
    <main>
      <h1 className="text-5xl text-center my-24">Hello world!  <i className="fa-regular fa-face-smile-relaxed"></i></h1>



      <div className='flex justify-center gap-10'>
        <Button onClick={() => {
          dispatch(userActions.getProfile())
        }}>
          Get profile
        </Button>

        <DynamicExampleForm />
        <DynamicExampleTable />
      </div>
    </main>
  );
}
