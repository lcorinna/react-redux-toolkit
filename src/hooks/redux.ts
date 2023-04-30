import { useSelector, TypedUseSelectorHook, useDispatch } from "react-redux";
import { AppDispath, RootState } from "../store/store";

export const useAppDispatch = () => useDispatch<AppDispath>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;