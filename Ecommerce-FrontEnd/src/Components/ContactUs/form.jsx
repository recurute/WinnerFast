import React from 'react';

const Form = () => {
  return (
    <div className="min-h-screen !p-32 py-6 flex flex-col justify-center sm:py-12" style={{ background: "#fcf3e4" }}>
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div
          className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-300 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"
        ></div>
        <div className="relative text-gray-800 px-4 py-10  shadow-lg sm:rounded-3xl sm:p-20" style={{ background: "#f9e9d2" }}>
          <div className="text-center pb-6">
            <h1 className="text-3xl font-bold text-orange-600 recusive-style">Contact Us!</h1>
            <p className="text-gray-700 recusive-style">Fill up the form below to send us a message.</p>
          </div>
          <form>
            <input
              className="shadow mb-4 appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-300"
              type="text" placeholder="Name" name="name"
            />
            <input
              className="shadow mb-4 appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-300"
              type="email" placeholder="Email" name="email"
            />
            <input
              className="shadow mb-4 appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-300"
              type="text" placeholder="Subject" name="_subject"
            />
            <textarea
              className="shadow mb-4 appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-orange-300"
              placeholder="Type your message here..." name="message" style={{ height: '121px' }}
            ></textarea>
            <div className="flex justify-between">
                <button className="shadow bg-orange-600 hover:shadow-xl font-semibold text-lime-50  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit" value="">
                    Send ➤
                </button>

            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Form;
