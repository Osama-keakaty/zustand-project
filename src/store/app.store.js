import { create } from 'zustand'

export const useAppStore= create((set)=>({
    num : 0,
    setNum:()=>set((state)=>({num:state.num + 1})),
    text : 'this is a placeholder',
    setText : (value)=> set({text:value})
}));