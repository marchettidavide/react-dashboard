export interface ResponseObject {
    lat: number;
    lon: number;
    timezone: string;
    timezone_offset: number;
    current: Current;
    minutely: Minutely[];
    alerts: Alert[];
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Current {
    dt: number;
    sunrise: number;
    sunset: number;
    temp: number;
    feels_like: number;
    pressure: number;
    humidity: number;
    dew_point: number;
    uvi: number;
    clouds: number;
    visibility: number;
    wind_speed: number;
    wind_deg: number;
    weather: Weather[];
}

export interface Minutely {
    dt: number;
    precipitation: number;
}

export interface Alert {
    sender_name: string;
    event: string;
    start: number;
    end: number;
    description: string;
}

