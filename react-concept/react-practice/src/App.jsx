import React, { Suspense, useContext, useEffect, useRef, useState } from 'react'
import './App.css'
import { createPortal } from 'react-dom'
import Icon from './components/Icon';

function Modal() {
  return (
    <div className='fixed inset-0 bg-gray-300'>
      <div className='w-[500px] h-[200px] border-2 border-red-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
        Rashindra Yadav
      </div>
    </div>
  );
}

function PortalModal({ children }) {
  const portalRoot = document.getElementById("portal");

  if (!portalRoot) return null;

  return createPortal(children, portalRoot);
}

function X(){
  return <svg width="50" height="50" viewBox="0 0 24 24">
      <defs>
        <linearGradient id="grad">
          <stop offset="0%" stopColor="#ff7e5f" />
          <stop offset="100%" stopColor="#feb47b" />
        </linearGradient>
      </defs>

      <circle cx="12" cy="12" r="10" fill="url(#grad)" />
    </svg>
}


function Y({size=16,className}){
  return <svg
      width={size}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      // className={clsx('text-neutral-400 shrink-0', className)}
    >
      <path
        d="M7.5 15L12.5 10L7.5 5"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
}

function App() {
  return (
    <>
      {/* <Modal />
      <PortalModal><Modal /></PortalModal> */}
      <Icon name="home" size={60}/>
      {/* <Icon name="icon-gradient"/> */}
      <X/>
      <Y size={20}/>
    </>
  )
}

export default App
