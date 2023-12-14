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
                <h4 className=" text-black font-semibold text-xl mb-3">{data?.name}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className=" relative h-[10rem] md:h-full w-full">
                        <Image
                            src={data?.img}
                            alt={data?.name}
                            layout='fill'
                            objectFit='cover'
                            className="rounded-md"

                        />
                    </div>
                    <div className=" flex flex-col gap-4">
                        <span className=" flex flex-col gap-1">
                            <h5>Origin</h5>
                            <h4 className=" text-black font-medium text-lg">{data?.origin}</h4>
                        </span>
                        <span className=" flex flex-col gap-1">
                            <h5>Mineral Type</h5>
                            <h4 className=" text-black font-medium text-lg">{data?.type}</h4>
                        </span>
                        <span className=" flex flex-col gap-1">
                            <h5>Physical specification</h5>
                            <h4 className=" text-black font-medium text-lg">{data?.specification}</h4>
                        </span>
                        <span className=" flex flex-col gap-1">
                            <h5>Quantity</h5>
                            <h4 className=" text-black font-medium text-lg">{data?.quantity}</h4>
                        </span>
                        <span className=" flex flex-col gap-1">
                            <h5>Shipping Time</h5>
                            <h4 className=" text-black font-medium text-lg">{data?.shiping_time}</h4>
                        </span>
                        <span className=" flex flex-col gap-1">
                            <h5>Loading Port</h5>
                            <h4 className=" text-black font-medium text-lg">{data?.port}</h4>
                        </span>
                    </div>
                </div>
            </div>
        </Modal>
    );
};
