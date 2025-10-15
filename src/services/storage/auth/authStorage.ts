import { AuthUserModel } from "@/utils/models/authUserModel";
import { HandleStorage } from "../handleStorage";

export class AuthStorage {
    static readonly authName = 'auth';

    static getAuth(): AuthUserModel | null {
        const auth = HandleStorage.getLocalItem({ name: AuthStorage.authName });
        return auth ? JSON.parse(auth) : null;
    }

    static setAuth(props: { value: AuthUserModel }): void {
        const { value } = props;
        HandleStorage.setLocalItem({ name: AuthStorage.authName, value: JSON.stringify(value) })
    }
}