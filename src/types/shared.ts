import { CSSProperties } from "react";

export interface IExpertProject {
    img: string;
    name: string;
    description: string;
}

export type SVGIconName = 'research' | 'design' | 'production' | 'closure' | 'check' | 'quote' | 'faq'

export interface IconProps {
    name?: SVGIconName & string;
    className?: string;
    size?: 'tiny' | 'small' | 'medium' | 'large' | 'inherit';
    crop?: boolean;
    style?: CSSProperties;
    fontSize?: string;
    children?: React.ReactNode;
}

export interface IService {
    icon: SVGIconName;
    name: string;
    description: string;
}

export interface InlineErrProps {
    err?: any;
}

export interface IProduct {
    img: string,
    name: string,
    type: string,
    origin: string,
    specification: string,
    shiping_time: string,
    quantity: string,
    port: string
};