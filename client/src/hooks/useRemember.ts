import { useCallback, useState } from "react";

const useRemember = (field: string) => {
  const [remember, setRemember] = useState(() => {
    return !!sessionStorage.getItem(`remember/${field}`);
  });
  const [rememberedValue, setRememberedValue] = useState(() =>
    remember ? sessionStorage.getItem(`${field}`) || "" : ""
  );
  const toggleRemembrance = useCallback(() => {
    setRemember((old) => {
      sessionStorage.setItem(`remember/${field}`, !old ? "1" : "");
      if (!!old) {
        sessionStorage.removeItem(`${field}`);
      }
      return !old;
    });
  }, [field]);

  const handleSetRememberedValue = useCallback(
    (value: string) => {
      setRememberedValue(value);
      sessionStorage.setItem(`${field}`, value);
    },
    [field]
  );
  return {
    rememberedValue,
    remember,
    toggleRemembrance,
    handleSetRememberedValue,
  };
};

export default useRemember;
