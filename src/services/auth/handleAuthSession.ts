import { setSession } from "@/store/auth/authSlice";
import { store } from "@/store/store";
import { Unsubscribe } from "@reduxjs/toolkit";
import { AuthStorage } from "../storage/auth/authStorage";

export class HandleAuthSession {
    hydrateSession() {
        try {
            const user = typeof window !== 'undefined' ? AuthStorage.getAuth() : null;
            if (user) {
                if (user && typeof user === 'object') {
                    store.dispatch(setSession({ user }));
                }
            }
        } catch {
            console.error('it was not possible to hydrate the user session');
        }
    }

    setSessionToStorage(): Unsubscribe {
        return store.subscribe(() => {
            try {
                const state = store.getState() as any;
                const auth = state.auth?.user;
                AuthStorage.setAuth({ value: auth });
            } catch {
                console.error('it was not possible to set the user session to the storage');
            }
        });
    }

    isAuth(props: { isAuthStore: boolean }): boolean {
        const { isAuthStore } = props;
        return isAuthStore || !!AuthStorage.getAuth()?.token;
    }
}
