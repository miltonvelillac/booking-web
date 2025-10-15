import { LoginMapper } from "@/services/mappers/login/loginMapper";
import { api } from "../apiClient";
import { LoginApiOptionsModel } from "@/utils/models/loginApiOptionsModel";
import { AuthUserModel } from "@/utils/models/authUserModel";

export class AuthApi {
    async loginApi({ email, password }: LoginApiOptionsModel): Promise<AuthUserModel> {
        const apiResp = await api('/auth/login', { method: 'POST', body: { email, password } });
        const response = LoginMapper.response(apiResp);
        return response;
    }
}


