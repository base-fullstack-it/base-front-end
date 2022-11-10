import React from "react";
import useNavbarTabValues from "../hook/useNavbarTabValues";


export const NavbarTabValuesContext = React.createContext<any | null>(null);

export default ({children}:{children: JSX.Element}) => {
    const navbarValues = useNavbarTabValues();

    return (
        <NavbarTabValuesContext.Provider
            value={navbarValues}
        >

                    {children}

        </NavbarTabValuesContext.Provider>
    )

}