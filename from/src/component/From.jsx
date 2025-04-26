import React, { useState } from "react";
import { getDatabase, push, ref, set } from "firebase/database";
const From = () => {
  const db = getDatabase();
  const InputItem = [
    {
      id: 1,
      name: "firstName",
      place: "Enter your frist name",
    },
    {
      id: 2,
      name: "lastName",
      place: "Enter your last name",
    },
    {
      id: 3,
      name: "email",
      place: "Enter your email",
    },
    {
      id: 4,
      name: "addressOne",
      place: "Enter your address one",
    },
    {
      id: 5,
      name: "addressTwo",
      place: "Enter your address two",
    },
    {
      id: 6,
      name: "password",
      place: "Enter your password",
    },
    {
      id: 7,
      name: "confarmPassword",
      place: "Enter your conform password",
    },
    {
      id: 8,
      name: "posatlCode",
      place: "Enter your postal code",
    },
    {
      id: 9,
      name: "zipCode",
      place: "Enter your zip code",
    },
    {
      id: 10,
      name: "checkBox",
      Sapni: "I agree all terms & condition",
    },
  ];

  const [inputFild, setinputFild] = useState({
    firstName: "",
    lastName: "",
    email: "",
    addressOne: "",
    addressTwo: "",
    password: "",
    confarmPassword: "",
    posatlCode: "",
    zipCode: "",
    checkBox: "",
  });

  const [ERRinputFild, ERRsetinputFild] = useState({
    ERRfirstName: "",
    ERRlastName: "",
    ERRemail: "",
    ERRaddressOne: "",
    ERRaddressTwo: "",
    ERRpassword: "",
    ERRconfarmPassword: "",
    ERRposatlCode: "",
    ERRzipCode: "",
    ERRcheckBox: "",
  });

  const handleOnchange = (event) => {
    const { name, value } = event.target;
    setinputFild({
      ...inputFild,
      [name]: value,
    });
  };

  const handleOnclick = (e) => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      email,
      addressOne,
      addressTwo,
      password,
      confarmPassword,
      posatlCode,
      zipCode,
      checkBox,
    } = inputFild;

    if (!firstName) {
      ERRsetinputFild({
        ...ERRinputFild,
        ERRfirstName: "first name is missing",
      });
    } else if (!lastName) {
      ERRsetinputFild({
        ...ERRinputFild,
        ERRfirstName: "",
        ERRlastName: "last name is missing",
      });
    } else if (!email) {
      ERRsetinputFild({
        ...ERRinputFild,
        ERRlastName: "",
        ERRemail: "email is missing",
      });
    } else if (!addressOne) {
      ERRsetinputFild({
        ...ERRinputFild,
        ERRemail: "",
        ERRaddressOne: "address one is missing",
      });
    } else if (!addressTwo) {
      ERRsetinputFild({
        ...ERRinputFild,
        ERRaddressOne: "",
        ERRaddressTwo: "email is missing",
      });
    } else if (!password) {
      ERRsetinputFild({
        ...ERRinputFild,
        ERRaddressTwo: "",
        ERRpassword: "password is missing",
      });
    } else if (!confarmPassword) {
      ERRsetinputFild({
        ...ERRinputFild,
        ERRpassword: "",
        ERRconfarmPassword: "conform password is missing",
      });
    } else if (password !== confarmPassword) {
      ERRsetinputFild({
        ...ERRinputFild,
        ERRconfarmPassword: "try misilar password",
      });
    } else if (!posatlCode) {
      ERRsetinputFild({
        ...ERRinputFild,
        ERRconfarmPassword: "",
        ERRposatlCode: "postal code is missing",
      });
    } else if (posatlCode.length !== 5) {
      ERRsetinputFild({
        ...ERRinputFild,
        ERRposatlCode: "you should be used only 5 digit",
      });
    } else if (!zipCode) {
      ERRsetinputFild({
        ...ERRinputFild,
        ERRposatlCode: "",
        ERRzipCode: "zip code is missing",
      });
    } else if (zipCode.length !== 5) {
      ERRsetinputFild({
        ...ERRinputFild,
        ERRzipCode: "you should be used only 5 digit",
      });
    } else if (!checkBox) {
      ERRsetinputFild({
        ...ERRinputFild,
        ERRzipCode: "",
        ERRcheckBox: "agree our terms and contion",
      });
    } else {
      ERRsetinputFild({
        ...ERRinputFild,
        ERRfirstName: "",
        ERRlastName: "",
        ERRemail: "",
        ERRaddressOne: "",
        ERRaddressTwo: "",
        ERRpassword: "",
        ERRconfarmPassword: "",
        ERRposatlCode: "",
        ERRzipCode: "",
        ERRcheckBox: "",
      });
      const uploadref = push(ref(db, "users/"));
      set(uploadref, {
        firstName:inputFild.firstName,
      lastName:inputFild.lastName,
      email:inputFild.email,
      addressOne:inputFild.addressOne,
      addressTwo:inputFild.addressTwo,
      posatlCode:inputFild.posatlCode,
      zipCode:inputFild.zipCode,
      userUid:uploadref.key
      }).then(() => {
        // Reset input fields
        setinputFild({
          firstName: "",
          lastName: "",
          email: "",
          addressOne: "",
          addressTwo: "",
          password: "",
          confirmPassword: "",
          postalCode: "",
          zipCode: "",
          checkBox: false,
        });
      
        // Reset error fields
        ERRsetinputFild({
          ERRfirstName: "",
          ERRlastName: "",
          ERRemail: "",
          ERRaddressOne: "",
          ERRaddressTwo: "",
          ERRpassword: "",
          ERRconfirmPassword: "",
          ERRpostalCode: "",
          ERRzipCode: "",
          ERRcheckBox: "",
        });
      
        // Optional: Show success message
        alert("Form submitted successfully!");
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="p-10 bg-amber-100 rounded-2xl">
          <form action="#">
            {InputItem.map((item) => {
              return (
                <div key={item.id}>
                  <input
                    type={
                      item.name == "firstName"
                        ? "text"
                        : item.name == "lastName"
                        ? "text"
                        : item.name == "email"
                        ? "email"
                        : item.name == "addressOne"
                        ? "text"
                        : item.name == "addressTwo"
                        ? "text"
                        : item.name == "password"
                        ? "password"
                        : item.name == "confarmPassword"
                        ? "password"
                        : item.name == "posatlCode"
                        ? "number"
                        : item.name == "zipCode"
                        ? "number"
                        : "checkbox"
                    }
                    id={item.name}
                    name={item.name}
                    onChange={handleOnchange}
                    className={
                      item.name == "checkBox"
                        ? "w-[30px] py-3 px-5 my-2 border-2"
                        : "w-[300px] py-3 px-5 my-2 border-2"
                    }
                    placeholder={item.place}
                  />
                  <span>{item.Sapni}</span>

                  {ERRinputFild[`ERR${item.name}`] && (
                    <span className="block pl-[10px] text-red-600 text-start">
                      {ERRinputFild[`ERR${item.name}`]}
                    </span>
                  )}
                </div>
              );
            })}

            <button
              onClick={handleOnclick}
              className="py-3 px-7 mt-5 bg-cyan-400 rounded-2xl"
            >
              {" "}
              submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default From;
