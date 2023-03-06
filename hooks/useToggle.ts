import {useCallback, useState} from 'react';

export default function useToggle(defaultValue: boolean = true) {
  const [state, setState] = useState(defaultValue);

  const toggleState = useCallback(() => {
    setState(prevState => !prevState);
  }, []);

  return [state, toggleState] as const;
}
