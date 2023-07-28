import { TypedUseSelectorHook } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../store/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
