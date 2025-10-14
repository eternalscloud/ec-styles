import moment from 'moment-timezone';
import { InputText } from 'primereact/inputtext';
import { OverlayPanel } from 'primereact/overlaypanel';
import { useEffect, useRef, useState } from 'react';
import { HOURS, type IHour } from './HourPicker.constant';
import './HourPicker.scss';

interface IHourPickerOptions {
  className?: string;
  value?: number;
  onChange: (value: number) => void;
  name?: string;
  disabled?: boolean;
  placeholder?: string;
  error?: boolean;
}

export default function HourPicker(options: IHourPickerOptions) {
  const op = useRef<OverlayPanel>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [hoursList, setHoursList] = useState<number[]>([]);
  const [hours, setHours] = useState<IHour[]>([]);
  const [hour, setHour] = useState<string>('');

  const setActiveHours = (value: number) => {
    const selected = Number(value);
    const currentHour = moment().hour();
    const hourList: number[] = [];
    const hoursList: IHour[] = [];

    for (const item of HOURS) {
      hourList.push(item.hour24);
      hoursList.push({
        ...item,
        active: item.hour24 === selected,
        currentHour: item.hour24 === currentHour ? 'true' : 'false',
      });
    }

    setHoursList(hourList);
    setHours(hoursList);
    setHour(selected.toString());
  };

  const handleHourChange = (value: string) => {
    if (value !== '') {
      const numeric = Number(value);
      const selected = numeric > 23 ? 23 : numeric;
      setHour(selected.toString());
      if (hoursList.includes(selected)) {
        handleSubmit(selected);
      }
    } else {
      setHour('');
    }
  };

  const handleSubmit = (value: number) => {
    if (hoursList.includes(value)) {
      setHour(value.toString());
      options.onChange(value);
      op.current?.hide();
    }
  };

  useEffect(() => {
    const defaultHour = options?.value ?? moment().hour();
    setActiveHours(defaultHour);
  }, [options?.value]);

  return (
    <div className={options.className}>
      <InputText
        ref={inputRef}
        keyfilter="int"
        name={options.name}
        disabled={options.disabled}
        onClick={(e: any) => op.current?.toggle(e)}
        placeholder={options.placeholder || 'Enter Hour'}
        maxLength={2}
        value={hour}
        onChange={(e: any) => handleHourChange(e.target.value)}
        className={options.error ? 'p-invalid' : ''}
      />
      <OverlayPanel className="p-hourpicker" ref={op}>
        <div className="p-hourpicker-header">
          <div className="p-hourpicker-header-title">Hours</div>
        </div>

        <div className="p-hourpicker-items">
          {hours.map((hourItem) => (
            <div
              key={hourItem.hour24}
              className="p-hourpicker-item"
              onClick={() => handleSubmit(hourItem.hour24)}
              aria-selected={hourItem.active}
              p-datepicker-hour-highlight={hourItem.currentHour}
            >
              <div className="p-hourpicker-item-title">{hourItem.hour24Alias}</div>
              <div className="p-hourpicker-item-text">{hourItem.hour12Alias}</div>
            </div>
          ))}
        </div>
      </OverlayPanel>
    </div>
  );
}
