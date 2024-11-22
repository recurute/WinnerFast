import React, { useState } from 'react';

export default function Advantages() {
    const [expandedAnswer, setExpandedAnswer] = useState(null);

    const toggleAnswer = (answerId) => {
        if (expandedAnswer === answerId) {
            setExpandedAnswer(null); 
        } else {
            setExpandedAnswer(answerId); 
        }
    };
    return (
        <>
            <section className="h-full w-full flex justify-center items-center" >
                <div className="helpYou section mt-14">
                    <div className="flex justify-center items-center flex-col gap-16">
                        <p className="!hover:border-orange-600 recursive-mainTitle max-sm:text-4xl text-5xl text-center lg:mt-10 ">Winners Fast <span className="bg-orange-600 text-lime-50 mx-2 px-2 whitespace-nowrap leading-relaxed"> Empowers you </span>to:</p>
                        <p className="w-8/12 text-md max-sm:text-md max-sm:w-11/12 max-sm:px-1 text-center leading-relaxed recusive-style sm:max-xl:w-full sm:max-xl:text-lg sm:max-xl:px-3" >Take charge of your finances with WinnersFast an all-in-one platform that streamlines profit tracking, expense management, and generating invoices freeing you to focus on business growth</p>
                    </div>
                    <div className="flex flex-row max-sm:flex-col sm:max-xl:flex-col">
                        <div className="dropdown-benefits w-8/12  max-sm:w-full sm:max-xl:w-full">
                            <div className="max-w-5xl mx-auto py-10 sm:py-20 ">
                                <div className="w-full px-7 md:px-10 xl:px-2 py-4 ">
                                    <div className="mx-auto w-full max-w-5xl  rounded-lg" style={{ background: "#fcf3e4" }}>
                                        {[
                                            {
                                                id: 'answer-1',
                                                question: '🚀 Save Time & Boost Profits',
                                                answer: 'Winners Fast automates your bookkeeping, giving you instant insights into your profits, tracking expenses, and generating invoices-all without the hassle. Focus on what matters: growing your business!',
                                            },
                                            {
                                                id: 'answer-2',
                                                question: '📈 Smart Analytics for Growth',
                                                answer: 'Gain powerful, simple analytics to understand your spending patterns. Track expenses, calculate profit margins, and uncover new opportunities for growth. Get a clear financial picture to guide your decisions.',
                                            },
                                            {
                                                id: 'answer-3',
                                                question: '📦 Manage Clients, Suppliers & Products',
                                                answer: 'Keep your clients, suppliers, and products organized in one place. Track supplier info, evaluate your most profitable products, and use SWOT analysis to maximize growth potential. Be in full control!',
                                            },
                                            {
                                                id: 'answer-4',
                                                question: '⏳ Automated Reminders & Invoices',
                                                answer: 'Never miss a payment with automated reminders and easily create professional invoices. Stay on top of bills and ensure a smooth cash flow for your business—effortlessly!',
                                            },
                                            {
                                                id: 'answer-5',
                                                question: '🔐 Top-Notch Security & 24/7 Support',
                                                answer: 'Your data is safe with our robust security measures. With end-to-end encryption, we protect your sensitive information. Plus, our friendly support team is available 24/7, ready to help whenever you need us!',
                                            },
                                        ].map(({ id, question, answer }) => (
                                            <div key={id} className="">
                                                <button
                                                    onClick={() => toggleAnswer(id)}
                                                    className="question-btn flex w-full items-start gap-x-5 justify-between rounded-lg text-left text-lg font-bold text-slate-800 focus:outline-none p-5"
                                                >
                                                    <span className='recusive-style text-orange-600'>{question}</span>
                                                    <svg
                                                        className={`mt-1.5 md:mt-0 flex-shrink-0 h-5 w-5 text-orange-600 transition-transform duration-200 ${expandedAnswer === id ? 'rotate-180' : ''}`}
                                                        stroke="currentColor"
                                                        fill="currentColor"
                                                        strokeWidth="0"
                                                        viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path d="M16.293 9.293 12 13.586 7.707 9.293l-1.414 1.414L12 16.414l5.707-5.707z" />
                                                    </svg>
                                                </button>
                                                {expandedAnswer === id && (
                                                    <div className="recusive-style answer pt-2 pb-5 px-5 text-sm lg:text-base text-[#343E3A] font-medium ">
                                                        {answer}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className="dashboardscreenShot  w-11/12 flex justify-center items-center max-sm:w-full max-sm:px-3 sm:max-xl:w-full sm:max-xl:px-3">
                            <p><span className='text-lg font-bold max-sm:!text-center'>APP Screenshot</span>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis quasi atque ipsam ab eaque impedit quisquam quas consectetur similique repudiandae! Obcaecati amet quae ratione soluta quia in ducimus modi mollitia.</p>
                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}