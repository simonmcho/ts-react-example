import React, { useEffect, useRef, useState } from 'react';

interface Person { 
  firstName: string;
  lastName: string;
}

interface Props {
  text: string;
  ok: boolean;
  i?: number;
  fn?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  obj?: {
    fieldOne: string;
  }
  person?: Person;
};

type StateProps = string | number | null;

export const TextField: React.FC<Props> = ({
  text,
  person,
  fn,
}) => {
  const [count, setCount] = useState<StateProps>(5);
  const inputRef = useRef<HTMLInputElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCount(null);
  }, []);

  return (
    <div ref={divRef}>
      {count}
      <input ref={inputRef} onChange={fn} />
    </div>
  )
};
