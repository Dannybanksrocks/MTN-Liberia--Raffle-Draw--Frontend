import React, { useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { VscEyeClosed } from "react-icons/vsc";
import { Images } from "../../Assets";
import { MtnButton } from "../../components/button/MtnButton";

export const Login = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [showPasswordType, setPasswordType] = React.useState<boolean>(false);

  const passwordToggle = () => {
    setPasswordType(!showPasswordType);
  };

  return (
    <>
      <div className="flex">
        <div
          className="flex items-center w-1/2 h-screen bg-yellow-500 bg-repeat bg-cover"
          style={{
            backgroundImage: "url(" + Images.bannerImg2 + ")",
            backgroundSize: "70%",
          }}
        >
          <div className="w-full px-32 text-white"></div>
        </div>

        <div className="w-1/2 px-16 mt-10">
          <div className="flex items-center justify-between">
            <h4 className="text-2xl font-bold">MTN Raffle Draw</h4>
            <img src={Images.mtnLogo} className="w-80" />
            <img src={Images.momoImg} className="w-40" />
          </div>
          <div className="flex items-center h-screen">
            <div className="w-full px-24">
              <div className="mb-10">
                <h3 className="text-3xl font-extralight">
                  It's good to have you back!
                </h3>
              </div>

              <form className="w-full">
                <label>Phone number</label>
                <div
                  className="relative mb-3 border"
                  data-twe-input-wrapper-init
                >
                  <input
                    autoFocus
                    required
                    className="w-full p-2 duration-700 rounded-md bg-inputs fade-in tablet:w-80 spin-button-none outline-0"
                    name="email"
                    type="number"
                    autoComplete="off"
                    placeholder="Please enter your phone number"
                  />
                </div>
                <label className="mb-4 label">Password</label>

                <div className="mb-3">
                  <div className="relative">
                    <input
                      required
                      className="w-full p-2 duration-700 border border-gray-300 rounded-md bg-inputs fade-in tablet:w-80 spin-button-none outline-0"
                      name="email"
                      type={showPasswordType ? "text" : "password"}
                      autoComplete="off"
                      placeholder="Please enter your password"
                    />
                    <div className="absolute mt-1 top-1 right-3">
                      <span onClick={passwordToggle} className="cursor-pointer">
                        {showPasswordType ? (
                          <VscEyeClosed size={24} />
                        ) : (
                          <FaRegEye size={24} />
                        )}
                      </span>
                    </div>
                  </div>

                  <span className="error-label username-error-label"></span>
                </div>
                <MtnButton
                  className="w-full py-2 text-white bg-black form-wizard-submit disabled:bg-gray-200 disabled:shadow-none lg:px-20"
                  disabled={isLoading}
                  loading={isLoading}
                  type={"submit"}
                  label={"Login"}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
