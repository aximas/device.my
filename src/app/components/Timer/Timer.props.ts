import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface TimerProps
	extends DetailedHTMLProps<HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {
	sec: number;
}
