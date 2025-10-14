import moment from 'moment-timezone';
import { InputText } from 'primereact/inputtext';
import { OverlayPanel } from 'primereact/overlaypanel';
import { useEffect, useRef, useState } from 'react';
import { DAYS, type IDay } from './DayPicker.constant';

interface IDayPickerOptions {
  className?: string;
  value?: number;
  onChange: (value: number) => void;
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  error?: boolean;
}

export default function DayPicker(options: IDayPickerOptions) {
  const op = useRef<OverlayPanel>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [daysList, setDaysList] = useState<number[]>([]);
  const [days, setDays] = useState<IDay[]>([]);
  const [day, setDay] = useState<string>('');

  const setActiveDays = (value: number) => {
    const selected = Number(value);
    const currentDay = moment().day();
    const dayList: number[] = [];
    const daysList: IDay[] = [];

    for (const item of DAYS) {
      dayList.push(item.day);
      daysList.push({
        ...item,
        active: item.day === selected,
        currentDay: item.day === currentDay ? 'true' : 'false',
      });
    }

    setDaysList(dayList);
    setDays(daysList);
    setDay(selected.toString());
  };

  const handleDayChange = (value: string) => {
    if (value !== '') {
      const numeric = Number(value);
      const selected = numeric > 23 ? 23 : numeric;
      setDay(selected.toString());
      if (daysList.includes(selected)) {
        handleSubmit(selected);
      }
    } else {
      setDay('');
    }
  };

  const handleSubmit = (value: number) => {
    if (daysList.includes(value)) {
      setDay(value.toString());
      options.onChange(value);
      op.current?.hide();
    }
  };

  useEffect(() => {
    const defaultDay = options?.value ?? moment().date();
    setActiveDays(defaultDay);
  }, [options?.value]);

  return (
    <div className={options.className}>
      <InputText
        ref={inputRef}
        keyfilter="int"
        name={options.name}
        disabled={options.disabled}
        onClick={(e: any) => op.current?.toggle(e)}
        placeholder={options.placeholder || 'Enter Day'}
        maxLength={2}
        value={day}
        onChange={(e: any) => handleDayChange(e.target.value)}
        className={options.error ? 'p-invalid' : ''}
      />
      <OverlayPanel className="p-datepicker-daypicker" ref={op}>
        <div className="p-datepicker-daypicker-header">
          <div className="p-datepicker-daypicker-header-title">Days</div>
        </div>
        <div className="p-datepicker-daypicker-items">
          {days.map((dayItem) => (
            <div
              key={dayItem.day}
              className="p-datepicker-daypicker-item"
              onClick={() => handleSubmit(dayItem.day)}
              aria-selected={dayItem.active}
              p-datepicker-dayhighlight={dayItem.currentDay}
            >
              <div className="p-datepicker-daypicker-item-title">{dayItem.dayAlias}</div>
            </div>
          ))}
        </div>
      </OverlayPanel>
    </div>
  );
}
