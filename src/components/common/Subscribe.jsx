import React, { useState } from "react";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      setMessage("Thank you for subscribing!");
      setIsSuccess(true);
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
      setIsSuccess(false);
    }
  };

  return (
    <section className="container" style={{ paddingTop: "0" }}>
      <div className="card flex flex-col gap-3 items-center md:flex-row md:gap-6 lg:justify-around bg-[#CDEAE1] rounded-xl">
        <div className="flex flex-col gap-3">
          <h1 className="text-3xl font-semibold">Subscribe Newsletter</h1>
          <h2 className="text-xl font-semibold">The Travel</h2>
          <p className="text-slate-600">
            Get inspired! Recieve travel discounts, tips, and behind the scenes
            stories.
          </p>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Your email address"
              name="email"
              style={{ borderRadius: "8px" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="bg-green-800 text-white"
              onClick={handleSubscribe}
            >
              Subscribe
            </button>
            {message && (
              <p
                className={`text-sm text-center ${
                  isSuccess ? "text-green-600" : "text-red-500"
                }`}
                style={{ marginTop: "12px" }}
              >
                {message}
              </p>
            )}
          </form>
        </div>
        <img
          src="/assets/images/mailbox.png"
          alt="Mailbox"
          className="w-full md:w-[40%] md:h-[40%]"
        />
      </div>
    </section>
  );
};

export default Subscribe;
