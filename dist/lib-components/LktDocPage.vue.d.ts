declare const _default: __VLS_WithTemplateSlots<import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    skipPageNumber?: boolean | undefined;
    frontPage?: boolean | undefined;
    size?: "a0" | "a1" | "a2" | "a3" | "a4" | "a5" | "a6" | "a7" | "a8" | "a9" | undefined;
    title?: string | undefined;
    img?: string | undefined;
    icon?: string | undefined;
    id?: string | undefined;
    palette?: string | undefined;
}>, {
    skipPageNumber: boolean;
    frontPage: boolean;
    size: string;
    title: string;
    img: string;
    icon: string;
    id: string;
    palette: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<{
    skipPageNumber?: boolean | undefined;
    frontPage?: boolean | undefined;
    size?: "a0" | "a1" | "a2" | "a3" | "a4" | "a5" | "a6" | "a7" | "a8" | "a9" | undefined;
    title?: string | undefined;
    img?: string | undefined;
    icon?: string | undefined;
    id?: string | undefined;
    palette?: string | undefined;
}>, {
    skipPageNumber: boolean;
    frontPage: boolean;
    size: string;
    title: string;
    img: string;
    icon: string;
    id: string;
    palette: string;
}>>>, {
    id: string;
    img: string;
    title: string;
    size: "a0" | "a1" | "a2" | "a3" | "a4" | "a5" | "a6" | "a7" | "a8" | "a9";
    icon: string;
    skipPageNumber: boolean;
    frontPage: boolean;
    palette: string;
}, {}>, {
    "page-bottom"?(_: {}): any;
    default?(_: {}): any;
}>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
