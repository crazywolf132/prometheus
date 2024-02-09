import { EventEmitter } from 'tseep';

export class Chatter {
    private static emitter = new EventEmitter<any>();

    public static on = this.emitter.on;
    public static off = this.emitter.off;
    public static emit = this.emitter.emit;
}