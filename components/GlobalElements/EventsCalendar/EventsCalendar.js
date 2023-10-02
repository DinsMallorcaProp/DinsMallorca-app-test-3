import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const EventsCalendar = () => {
    const eventsList = [
        {
            title: 'Recolectar Basura en la playa',
            start: new Date('2023-10-21 10:22:00'),
            end: new Date('2023-10-21 10:42:00')
        },
        {
            title: 'Recolectar Basura en la playa',
            start: new Date('2023-10-27 12:22:00'),
            end: new Date('2023-10-27 13:42:00')
        }
    ];

    return (
        <div
            style={{ height: `${400}px` }}
            className="flex justify-center mt-20"
        >
            <Calendar
                localizer={localizer}
                events={eventsList}
                startAccessor="start"
                endAccessor="end"
                messages={{
                    next: 'sig',
                    previous: 'ant',
                    today: 'Hoy',
                    month: 'Mes',
                    week: 'Semana',
                    day: 'Día',
                    date: 'Fecha',
                    time: 'Hora',
                    event: 'Evento'
                }}
            />
        </div>
    );
};

export default EventsCalendar;
