// @ts-nocheck
export const serializeNonPOJOs = (value) => {
    return structuredClone(value)
};
