export class HandleStorage {

    static getLocalItem(props: { name: string }): string | null {
        const { name } = props;
        return localStorage.getItem(name);
    }

    static setLocalItem(props: { name: string, value: string }): void {
        const { name, value } = props;
        localStorage.setItem(name, JSON.stringify(value));
    }

}
