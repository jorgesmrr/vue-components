const defaultFieldData = {
    label: "My field",
    placeholder: "Type something here...",
    error: null,
    hint: null
};

export const defaultAttrs = `:label="label" :placeholder="placeholder" :hint="hint" :error="error"`;

export const getDefaultFieldData = () => defaultFieldData;
export const getDefaultFieldDataWithError = () => ({
    ...defaultFieldData,
    error: true
});
export const getDefaultFieldDataWithErrorText = () => ({
    ...defaultFieldData,
    error: "Invalid value"
});
export const getDefaultFieldDataWithHint = () => ({
    ...defaultFieldData,
    hint: "Be creative!"
});
