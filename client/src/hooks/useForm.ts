import React, { useCallback, useState } from "react";

const useForm = (defaultValue: Record<string, string> = {}) => {
  const [payload, setPayload] = useState(defaultValue);
  const changeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setPayload((oldValue) => ({
        ...oldValue,
        [e.target.name]: e.target.value,
      }));
    },
    []
  );
  const setError = useCallback(
    (error: string) => setPayload((payload) => ({ ...payload, error })),
    []
  );
  return {
    payload,
    changeHandler,
    setError,
  };
};

export default useForm;
