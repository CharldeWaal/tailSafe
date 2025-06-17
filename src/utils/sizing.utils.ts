import { ObjectFit } from "../types/sizing.types";

export const getObjectFitClass = (objectFit: ObjectFit) => {
    const objectFitClass = {
        'fill': 'object-fill',
        'contain': 'object-contain',
        'cover': 'object-cover',
        'none': 'object-none',
        'scale-down': 'object-scale-down'
    }[objectFit];

    return objectFitClass;
};