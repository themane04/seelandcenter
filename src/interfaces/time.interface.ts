export interface IGeneralHours {
    days: string;
    hours: string;
}

export interface IStoreHours {
    days: string;
    hours: string;
}

export interface IHolidayEvent {
    date: string;
    event: string;
    hours: string;
    store_hours?: string;
}

export interface IHolidayMonth {
    [month: string]: IHolidayEvent[];
}

export interface IWorkingHours {
    general: IGeneralHours[];
    additional_info: string;
    stores: {
        [storeName: string]: IStoreHours[];
    };
    holidays: {
        [year: string]: IHolidayMonth;
    };
}

export interface IWorkingHoursData {
    days?: string;
    hours?: string;
    date?: string;
    event?: string;
    store_hours?: string;
}

export interface AccordionBoxProps {
    title: string;
    data: Record<string, IWorkingHoursData[]>;
}
