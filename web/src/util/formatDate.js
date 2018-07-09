import moment from 'moment';

const formatDate = date => moment(date).format('ddd, DD MMM YY, hh:mm a');
export default formatDate;
