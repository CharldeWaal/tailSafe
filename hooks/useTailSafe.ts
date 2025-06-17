import { useMemo } from "react";
import { TailSafe, UseTailSafeReturn } from "../types";
import { construct } from "../utils/underline.utils";

export const useTailSafe = (props: TailSafe): UseTailSafeReturn => {
    const className = useMemo(() => {
        return construct(props);
    }, [props]);

    return { className };
};