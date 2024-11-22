import { useState } from 'react';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div className={`rounded-xl  overflow-hidden  transition-all ${isOpen ? '' : ''}`}>
            <button
                className={`w-full recusive-style text-left p-6 flex items-center justify-between rounded-xl transition-colors duration-300 ${isOpen ? 'bg-orange-600 text-white' : 'bg-white hover:bg-gray-50'}`}
                onClick={onClick}
            >
                {question}
                <span className="text-xl">{isOpen ? '−' : '+'}</span>
            </button>
            <div className={`overflow-hidden transition-max-height duration-300 ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="p-6 bg-white text-gray-700">
                    <p className="text-gray-600 ">{answer}</p>
                </div>
            </div>
        </div>
    );
};

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(1);

    const faqData = [
        { 
            question: "Which plan is right for my business?", 
            answer: "All of our plans include the same comprehensive features, like invoicing, client management, and inventory tracking. You can choose between a monthly or yearly subscription based on your preference. The yearly plan offers a discount, making it a great choice for businesses looking for a long-term solution. Contact us if you need help deciding!"
        },
        { 
            question: "What is the difference between monthly and yearly plans?", 
            answer: "You can choose between a monthly or yearly subscription. The yearly plan offers a discount and is ideal if you're looking for a long-term solution to manage and scale your business." 
        },
        { 
            question: "What if my business grows beyond my current plan?", 
            answer: "Congrats on the growth! We’ll notify you when you’re close to plan limits, and you’ll have 7 days to upgrade before some features are restricted." 
        },
        { 
            question: "Is there a free trial available?", 
            answer: "Yes, we offer a 7-day free trial with access to all features, so you can fully explore the platform before committing." 
        },
        { 
            question: "Is the platform GDPR compliant?", 
            answer: "Absolutely. We prioritize data privacy and ensure full compliance with GDPR regulations." 
        },
        { 
            question: "Do I need to be making sales to use the platform?", 
            answer: "No, our platform supports businesses at every stage, from startups to established companies. You can use it to manage operations even if you’re not generating revenue yet." 
        },
        { 
            question: "Do I need coding skills to use the platform?", 
            answer: "No coding required. Our platform is designed to be intuitive and user-friendly, so you can manage your business effortlessly." 
        }
    ];
    

    return (
        <>
        <section id="faqs"  style={{ background: "#fcf3e4" }}>
            <div className="max-w-3xl mx-auto p-8 ">
                <h1   className="text-4xl mb-8 font-semibold text-center text-orange-600">FAQs</h1>
                <div className="flex flex-col gap-4">
                    {faqData.map((item, index) => (
                        <FAQItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openIndex === index}
                            onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        />
                    ))}
                </div>
            </div>
            </section>
        </>

    );
};

export default FAQ;
