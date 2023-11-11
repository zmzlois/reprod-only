"use client"
import { createContext } from 'react';
import type { Dispatch} from "react";

export const TasksContext = createContext([])
export const TaskDispatchContext = createContext<Dispatch<any>>(() => null)