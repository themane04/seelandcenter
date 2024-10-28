export interface IBurgerMenu {
    isOpen: boolean;
    onClose: () => void;
}

export interface INavbarLinks {
    onClick?: () => void;
}
