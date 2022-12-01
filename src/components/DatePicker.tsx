import { DatePickerProps } from 'antd';
import generatePicker from 'antd/es/date-picker/generatePicker';
import type { Moment } from 'moment';
import momentGenerateConfig from 'rc-picker/lib/generate/moment';

const ADatePicker = generatePicker<Moment>(momentGenerateConfig);

const DatePicker = (props: DatePickerProps & any) => {
  return <ADatePicker {...props} />;
};

export default DatePicker;
