import { ID } from "@/types";

export interface AuthUserModel {
    id: ID;
    name?: string;
    email?: string;
    token?: string;
}
