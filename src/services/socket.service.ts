import { useUserStore } from "@/stores";
import { io, Socket } from "socket.io-client";

const socketUrl = import.meta.env.DEV
    ? import.meta.env.VITE_DEV_SOCKET_URL
    : import.meta.env.VITE_SOCKET_URL;

export interface SocketOptions {
    from: number;
    to: number | "*" | "authenticated";
    permissions?: string | string[];
    roles?: string | string[];
    
}

export default class SocketService {
    private static instance: SocketService;
    private socketIo: Socket;
    private static connected: Set<string> = new Set();

    private constructor() {
        const auth = useUserStore().getUser;
        const token = useUserStore().getToken;
        this.socketIo = io(socketUrl, {
            path: `/${import.meta.env.VITE_API_VESION||"v1"}/socket`,
            upgrade: true,
            auth: {
                ...auth,
                token
            }
        });
        this.socketIo.connect();
        this.socketIo.on("connect", () => {
        })
        SocketService.instance = this;
        SocketService.connected.add(auth._id);
    }

    static getInstance() {
        if (!SocketService.instance) {
            const auth = useUserStore().getUser;
            if (SocketService.connected.has(auth._id)) return SocketService.instance
            new SocketService();
        }
        return SocketService.instance;
    }

    disconnectSocket() {
        if (SocketService.instance) {
            SocketService.instance.socketIo.disconnect();
        }
    }

    sendToChannel(
        channel: string,
        data: any,
        options?: SocketOptions,
        cb?: Function
    ) {
        const content = {
            auth: useUserStore().getUser,
            options: options,
            data: data,
        };
        this.socketIo.emit(channel, content, cb);
    }

    getFromChannel(channel: string, cb?: Function) {
        this.socketIo.on(channel, (msg: any) => {
            if (!cb) {
                return () => {
                };
            }
            return cb(msg)
        });
    }

    getFromTenantChannel(channel: string, cb?: Function) {
        this.socketIo.on(channel , (msg: any) => {
            if (!cb) {
                return () => {
                };
            }
            return cb(msg)
        });
    }

    listenTableHooks(channel: string, table: string | string[], cb?: Function) {
        const handler = (data: any) => {
            if (cb) {
                if (!Array.isArray(table)) {
                    table = [table];
                }
                if (table.includes(data.table)) {
                    cb(data);
                }
            }
        };
        this.socketIo.on(channel, handler);
    }

    listenUser(channel: string, cb?: Function) {
        this.socketIo.on(channel + "_" + useUserStore().getUser?._id, (msg: any) => {
            if (!cb) {
                return () => {
                };
            }
            return cb(msg)
        });
    }

    stopListen(channel: string) {
        this.socketIo.off(channel);
    }

    stopListenUser(channel: string) {
        this.socketIo.off(channel + "-" + useUserStore().getUser?.id);
    }

    stopListenAll() {
        this.socketIo.removeAllListeners();
    }
}