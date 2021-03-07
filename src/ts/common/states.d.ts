type PENDING = 'pending';
type SUCCESS = 'success';
type ERROR = 'error';

type StatePending = {
  status: PENDING;
};

type StateSuccess = {
  status: SUCCESS;
  [data: string]: Array;
};

type StateError = {
  status: ERROR;
  error: string;
};
