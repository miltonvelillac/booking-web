import { AuthUserModel } from "@/utils/models/authUserModel";

export class LoginMapper {
    static response(apiResponse: any): AuthUserModel {
        return {
            id: 'abcdef9876544',
            token: 'abc123',
            name: 'Milton',
            email: 'milton@gmail.com'
        }
    }
}
