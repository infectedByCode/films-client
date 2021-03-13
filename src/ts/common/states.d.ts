type PENDING = 'pending';
type SUCCESS = 'success';
type ERROR = 'error';

type StatePending = {
  status: PENDING;
};

type StateSuccess = {
  status: SUCCESS;
  [data: string]: Array | null;
};

type StateError = {
  status: ERROR;
  error: string;
};

export type States = StatePending | StateError | StateSuccess;
