export declare type TSelectedValue = string | number;
export declare type TSelectOption = {
    value: TSelectedValue;
    label: TSelectedValue;
};
export declare type TSelectOptions = TSelectOption[];
export declare type TSelectPropTypes = {
    options: TSelectOptions;
    selectedValue: TSelectOption;
    onSelect: (value: TSelectOption) => void;
};
