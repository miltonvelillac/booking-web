import { AuthStorage } from "../storage/auth/authStorage";

class SignUpService {
  private static _instance: SignUpService | null = null;

  static get instance(): SignUpService {
    if (!this._instance) this._instance = new SignUpService();
    return this._instance;
  }

  showSignUpBtn(pathname: string | null | undefined): boolean {
    return !!pathname && pathname.startsWith("/auth") && !pathname.startsWith("/auth/sign");
  }

  showLogoutBtn(pathname: string | null | undefined, isAuthenticated: boolean): boolean {
    return !!pathname && !pathname.startsWith("/auth") && isAuthenticated;
  }

  showLogIntBtn(pathname: string | null | undefined, isAuthenticated: boolean): boolean {
    return !!pathname && pathname.startsWith("/auth/sign") && !isAuthenticated;
  }

  logout(): void {
    AuthStorage.clearAuth();
  }

  getSessionBtnLabel(
    pathname: string | null | undefined,
    isAuthenticated: boolean,
    t: (key: string) => string
  ): string {
    if (this.showSignUpBtn(pathname)) return t('login.signup');
    if (this.showLogoutBtn(pathname, isAuthenticated)) return t('login.logout');
    if (this.showLogIntBtn(pathname, isAuthenticated)) return t('login.submit');
    return '';
  }
}

export const signUpService = SignUpService.instance;
export default SignUpService;

