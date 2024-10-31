export interface IBurgerMenu {
    isOpen: boolean;
    onClose: () => void;
}

export interface INavbarLinks {
    onClose?: () => void;
    logo?: boolean;
}
