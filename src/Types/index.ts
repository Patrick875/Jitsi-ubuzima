import { ReactNode } from "react";

export interface user {
	id?: number;
	name: string;
	email: string;
	password: string;
	phone: string;
	nationalId: string;
	role: string;
}

export enum sidedimension {
	large = "large",
	small = "small",
}

export interface sidebarsize {
	size: sidedimension;
}
export interface navitem {
	page: string;
	link: string;
	location: string;
	children?: ReactNode;
	icon?: ReactNode;
}
