"use client";

import {useState} from "react";
import toast, {Toaster} from "react-hot-toast";

function LoginPage() {
  const [register, setRegister] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setRegister((register) => ({...register, [name]: value}));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!register.name) {
      toast.error("نام کاربری خود را وارد کنید");
      return;
    }
    if (!register.email) {
      toast.error("ایمیل خود را وارد کنید");
      return;
    }
    // if (!register.phone) {
    //   toast.error("تلفن تماس خود را وارد کنید");
    //   return;
    // }
    if (!register.password) {
      toast.error("رمز عبور خود را وارد کنید");
      return;
    }
    toast.success("ثبت نام شما با موفقیت انجام شد");
    console.log(register);
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="املاکیت"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          ثبت نام در املاکیت
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="http://127.0.0.1:8000/register" method="POST">
          <div>
            <label
              htmlFor="username"
              className="block text-sm font-medium leading-6 text-gray-900">
              نام کاربری
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="name"
                type="text"
                value={register.username}
                onChange={changeHandler}
                autoComplete="username"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900">
              ایمیل
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={register.email}
                onChange={changeHandler}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
              />
            </div>
          </div>
          {/* <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900">
              تلفن همراه
            </label>
            <div className="mt-2">
              <input
                id="phone"
                name="phone"
                type="phone"
                value={register.phone}
                onChange={changeHandler}
                autoComplete="phone"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
              />
            </div>
          </div> */}
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900">
                رمز عبور
              </label>
              {/* <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500">
                    فراموشی رمز عبور
                  </a>
                </div> */}
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={register.password}
                onChange={changeHandler}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2"
              />
            </div>
          </div>
          <div>
            <Toaster />
          </div>
          <div>
            <button
              type="submit"
              onClick={submitHandler}
              className="flex w-full justify-center rounded-md bg-primary px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              ثبت نام
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          اکانت دارید ؟
          <a
            href="#"
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            وارد شوید
          </a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
