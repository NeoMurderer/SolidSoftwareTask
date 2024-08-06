import { STORAGE_PREFIX } from "@/constants/storage";
import { Platform } from "react-native";

export default class StorageService {
    _prefix: string = STORAGE_PREFIX;
    _key: string = "";
    constructor(key: string) {
        this._key = key;
        if (!key || key.length === 0) {
            console.error(`StorageService. Key is required and can't be empty`);
        }
    }
    get _getKey() {
        return `@${this._prefix}:${this._key}`;
    }
    setItem(value: string): void {
        // TODO: Add support for other platforms(optional)
        switch (Platform.OS) {
            case "web":
                localStorage.setItem(this._getKey, value);
                break;

            default:
                console.log(`StorageService. Function setItem can only run on web`);
                break;
        }
    }
    async getItem(): Promise<string | null> {
        // TODO: Add support for other platforms(optional)
        switch (Platform.OS) {
            case "web":
                return localStorage.getItem(this._getKey);
            default:
                console.log(`StorageService. Function getItem can only run on web`);
                break;
        }
        return '';
    }
}
