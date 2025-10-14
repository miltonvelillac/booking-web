'use client';

import React from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { addBy, decrement, increment, reset } from './counterSlice';

export default function Counter() {
  const value = useAppSelector((s) => s.counter?.value ?? 0);
  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center gap-2">
      <button className="px-3 py-1 rounded bg-gray-200" onClick={() => dispatch(decrement())}>-</button>
      <span className="min-w-8 text-center font-mono">{value}</span>
      <button className="px-3 py-1 rounded bg-gray-200" onClick={() => dispatch(increment())}>+</button>
      <button className="px-3 py-1 rounded bg-gray-200" onClick={() => dispatch(addBy(5))}>+5</button>
      <button className="px-3 py-1 rounded bg-gray-200" onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}

