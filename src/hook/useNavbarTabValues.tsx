import { useState } from "react";
export interface NavbarTabValuesI {
    handleValues: (number: number) => void;
    values: number | undefined;
}
export default ():NavbarTabValuesI => {
    const [values, setValues] = useState<number>();
    const handleValues =(number:number) => {
        setValues(number);
    }
    return {values, handleValues}
}