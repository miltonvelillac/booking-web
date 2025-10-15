import type { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

// Singleton NavigateService with DI-style initialization
class NavigateService {
  private static _instance: NavigateService | null = null;
  private _router?: AppRouterInstance;

  static get instance(): NavigateService {
    if (!this._instance) this._instance = new NavigateService();
    return this._instance;
  }

  // Inject Next.js app router once from a client component
  init(router: AppRouterInstance) {
    if (!this._router) {
      this._router = router;
    }
  }

  push(href: string) {
    this.router.push(href);
  }

  replace(href: string) {
    this.router.replace(href);
  }

  back() {
    this.router.back();
  }

  refresh() {
    this.router.refresh();
  }

  prefetch(href: string) {
    // App Router exposes prefetch on router
    this.router.prefetch?.(href);
  }

  goToHome() {
    this.push('/');
  }

  goToLogin(): void {
    this.push('/auth/login');
  }

  goToSignIn(): void {
    this.push('/auth/sign');
  }

  private get router(): AppRouterInstance {
    if (!this._router) throw new Error('NavigateService not initialized');
    return this._router;
  }
}

export const navigateService = NavigateService.instance;
export default NavigateService;
