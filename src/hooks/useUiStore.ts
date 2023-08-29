import { closeMenu, openMenu } from "../redux/states/uiSlice";
import { useAppDispatch, useAppSelector } from "./useStore";

export const useUiStore = () => {
  const { isOpenMenu } = useAppSelector((state) => state.ui);
  const dispatch = useAppDispatch();

  const handleOpenMenu = (): void => {
    dispatch(openMenu());
  };

  const handleCloseMenu = (): void => {
    dispatch(closeMenu());
  };

  return {
    isOpenMenu,
    handleOpenMenu,
    handleCloseMenu,
  };
};
