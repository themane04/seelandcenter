import {UseToastOptions, useToast} from "@chakra-ui/react";

export const toastOptions: UseToastOptions = {
    duration: 4000,
    isClosable: true,
    position: "top-right",
};

export const showErrorToast = (
    toast: ReturnType<typeof useToast>,
    title: string,
) => {
    toast({
        title: title,
        status: "error",
        ...toastOptions,
    });
};

export const showSuccessToast = (
    toast: ReturnType<typeof useToast>,
    title: string,
) => {
    toast({
        title: title,
        status: "success",
        ...toastOptions,
    });
};

export const showInfoToast = (
    toast: ReturnType<typeof useToast>,
    title: string,
) => {
    toast({
        title: title,
        status: "info",
        ...toastOptions,
    });
};