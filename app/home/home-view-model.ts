import {Observable} from 'data/observable';

export class HomeViewModel extends Observable {
    private _hours: number;
    private _minutes: number;
    private _seconds: number;

    constructor() {
        super();

        // Initialize default values.
        this._hours = 0;
        this._minutes = 10;
        this._seconds = 0;
    }

    get hours(): string {
        return String(this._hours);
    }

    set hours(value: string) {
        this._hours = Number(value);
        this.notifyPropertyChange('hours', value);
    }
    
    get minutes(): string {
        return String(this._minutes);
    }

    set minutes(value: string) {
        this._minutes = Number(value);
        this.notifyPropertyChange('minutes', value);
    }

    get seconds(): string {
        return String(this._seconds)
    }

    set seconds(value: string) {
        this._seconds = Number(value);
        this.notifyPropertyChange('seconds', value);
    }
}