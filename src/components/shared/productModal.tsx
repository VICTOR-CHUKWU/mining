"use client";
import React, { FC } from "react";
import Image from "next/image";
import { Modal } from ".";
import { IProduct } from "@/types";

interface IProp {
    show: boolean;
    onHide: () => void;
    data: IProduct;
}

export const ProductModal: FC<IProp> = ({ show, onHide, data }) => {
    return (
        <Modal show={show} onHide={onHide}>
            <div>
                <h4 className=" text-slate-800 font-semibold text-3xl mb-3">{data?.name}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className=" relative h-[10rem] md:h-full w-full overflow-hidden rounded-lg p-3">
                        <div className="p-3 relative h-full w-full rounded-lg">
                            <Image
                                src={data?.img}
                                alt={data?.name}
                                layout='fill'
                                objectFit='cover'
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                    <div className=" flex flex-col gap-4">
                        <span className=" flex flex-col gap-1">
                            <h5 className=" text-slate-500 font-medium text-xl">Origin</h5>
                            <h4 className=" text-black font-medium text-base">{data?.origin}</h4>
                        </span>
                        <span className=" flex flex-col gap-1">
                            <h5 className=" text-slate-500 font-medium text-xl">Mineral Type</h5>
                            <h4 className=" text-black font-medium text-base">{data?.type}</h4>
                        </span>
                        <span className=" flex flex-col gap-1">
                            <h5 className=" text-slate-500 font-medium text-xl">Physical specification</h5>
                            <h4 className=" text-black font-medium text-base">{data?.specification}</h4>
                        </span>
                        <span className=" flex flex-col gap-1">
                            <h5 className=" text-slate-500 font-medium text-xl">Quantity</h5>
                            <h4 className=" text-black font-medium text-base">{data?.quantity}</h4>
                        </span>
                        <span className=" flex flex-col gap-1">
                            <h5 className=" text-slate-500 font-medium text-xl">Shipping Time</h5>
                            <h4 className=" text-black font-medium text-base">{data?.shiping_time}</h4>
                        </span>
                        <span className=" flex flex-col gap-1">
                            <h5 className=" text-slate-500 font-medium text-xl">Loading Port</h5>
                            <h4 className=" text-black font-medium text-base">{data?.port}</h4>
                        </span>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
