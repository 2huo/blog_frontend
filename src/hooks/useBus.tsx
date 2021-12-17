import mitt from 'mitt';
import React, { useState, useContext, useEffect } from 'react';

// 使用注意：
// 先on，再emit

export const BusContext = React.createContext(Object.create(null));

// eslint-disable-next-line
export default function useBus() {
  return useContext(BusContext);
}

export function useListener<T>(type: string, handler: (e: T) => void): void {
  const bus = useBus();
  // 实际使用中，由于副效应函数默认是每次渲染都会执行，所以清理函数不仅会在组件卸载时执行一次
  // 每次副效应函数重新执行之前，也会执行一次，用来清理上一次渲染的副效应。
  useEffect(() => {
    console.log(type, 'useListener on');
    bus.on(type, handler);
    return () => {
      bus.off(type, handler);
    };
  }, [bus, type, handler]);
}

export const Provider = (props: { children: React.ReactNode }): JSX.Element => {
  const [bus] = useState(() => mitt());
  return <BusContext.Provider value={bus}>{props.children}</BusContext.Provider>;
};
