import React from 'react';
import { Link } from 'react-router-dom';
import notFound from '../assets/404 (2).jpg'

export default function Error() {
  return (
    <>
      <img src={notFound} alt="Not Found" className=" h-[50svh] w-full object-cover" />

      <div className=" w-3/4 mx-auto py-10 text-center">
        <h1 className=" text-3xl font-openSans text-center py-5">
          Oops! Page not found ):
        </h1>
        <p className=" text-xl py-5 font-DMSans">
          We tried but couldn’t find the page you are trying to open. It may be
          broken, deleted or doesn’t exist. you may find what you’re looking for
          on the homepage.
        </p>
        <Link to="/">
          <button className="bg-blue px-10 py-2 text-white rounded my-5">
            Dismiss
          </button>
        </Link>
      </div>
    </>
  );
}
