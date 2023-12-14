'use client'
import React, { useState } from 'react'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { InlineErr } from "@/components/shared";
import { messageFormSchema } from '@/utils';
import { toast, ToastContainer } from "react-toastify";

const ContactForm = () => {
    const [loading, setLoading] = useState(false)

    const {
        control,
        reset,
        trigger,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(messageFormSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            message: "",

        },
    });

    const submitForm = async (formData: any) => {
        setLoading(true)
        try {
            const add = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const content = await add.json();
            if (content) {
                toast.success(content.message || "your message has been recieved");
                reset()
            }
        } catch (error) {
            console.log(error);
            toast.error('message not sent')


        } finally {
            setLoading(false)
        }
    }
    return (
        <section className=''>
            <ToastContainer />
            <div className=' py-6 px-1 md:px-8 bg-slate-50 rounded-md'>
                <form onSubmit={handleSubmit(submitForm)}>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-3 pb-3 mb-4">
                        <span>
                            <label className=" text-xs md:text-base" htmlFor="firstName">
                                Your First Name
                            </label>
                            <Controller
                                control={control}
                                name="firstName"
                                render={({ field: { onChange, value } }) => (
                                    <input
                                        type="text"
                                        id="firstName"
                                        value={value}
                                        onChange={onChange}
                                        className={` border-[1px] border-slate-300 placeholder:text-sm focus:border-slate-500 w-full h-11 outline-none rounded-md px-2 text-blue-900 my-2  `}
                                        placeholder="First Name"
                                    ></input>
                                )}
                            />
                            <InlineErr err={errors?.firstName?.message} />
                        </span>
                        <span>
                            <label className="text-xs md:text-base" htmlFor="lastName">
                                Your Last Name
                            </label>
                            <Controller
                                control={control}
                                name="lastName"
                                render={({ field: { onChange, value } }) => (
                                    <input
                                        type="text"
                                        id="lastName"
                                        value={value}
                                        onChange={onChange}
                                        className={` border-[1px] border-slate-300 focus:border-slate-500 w-full h-11 outline-none rounded-md px-2 text-blue-900 my-2  `}
                                        placeholder="Last Name"
                                    ></input>
                                )}
                            />
                            <InlineErr err={errors?.lastName?.message} />
                        </span>
                        <span>
                            <label className="text-xs md:text-base" htmlFor="email">
                                Your Email
                            </label>
                            <Controller
                                control={control}
                                name="email"
                                render={({ field: { onChange, value } }) => (
                                    <input
                                        type="email"
                                        id="email"
                                        value={value}
                                        onChange={onChange}
                                        className={` border-[1px] border-slate-300 focus:border-slate-500 w-full h-11 outline-none rounded-md px-2 text-blue-900 my-2  `}
                                        placeholder="ed@gmail.com"
                                    ></input>
                                )}
                            />
                            <InlineErr err={errors?.email?.message} />
                        </span>
                        <span>
                            <label className="text-xs md:text-base" htmlFor="phone">
                                Your Phone Number
                            </label>
                            <Controller
                                control={control}
                                name="phoneNumber"
                                render={({ field: { onChange, value } }) => (
                                    <input
                                        type="tel"
                                        id="phone"
                                        value={value}
                                        onChange={onChange}
                                        className={` border-[1px] border-slate-300 focus:border-slate-500 w-full h-11 outline-none rounded-md px-2 text-blue-900 my-2  `}
                                        placeholder="09089093647"
                                    ></input>
                                )}
                            />
                            <InlineErr err={errors?.phoneNumber?.message} />
                        </span>

                        <span className=' col-span-1 md:col-span-2'>
                            <label
                                className="text-xs md:text-base"
                                htmlFor=" message"
                            >
                                Message
                            </label>
                            <Controller
                                control={control}
                                name="message"
                                render={({ field: { onChange, value } }) => (
                                    <textarea
                                        id=" message"
                                        value={value}
                                        onChange={onChange}
                                        className={` border-[1px] border-slate-300 focus:border-slate-500 w-full min-h-[10rem] outline-none rounded-md px-2 text-blue-900 my-2  `}
                                        placeholder=""
                                    ></textarea>
                                )}
                            />
                            <InlineErr err={errors?.message?.message} />
                        </span>
                    </div>
                    <div className=' flex justify-center'>
                        <button disabled={loading} type='submit' className='button w-48 h-16'>{loading ? 'Sending...' : 'Send message'}</button>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default ContactForm