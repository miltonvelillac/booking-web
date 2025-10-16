export class HandleStorage {

    static getLocalItem(props: { name: string }): string | null {
        if (typeof window === "undefined") return null;
        const { name } = props;
        return localStorage.getItem(name);
    }

    static setLocalItem<T>(props: { name: string, value: T }): void {
        if (typeof window === "undefined") return;
        const { name, value } = props;
        localStorage.setItem(name, JSON.stringify(value));
    }

    static removeLocalItem(props: { name: string }): void {
        if (typeof window === "undefined") return;
        const { name } = props;
        localStorage.removeItem(name);
    }

}
