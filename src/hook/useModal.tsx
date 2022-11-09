import {useCallback, useState} from "react";


export interface ModalHookInterface {
    visible: boolean,
    toggle: () => void,
    handleModalId:(id:string) => void,
    modalId:string | undefined
}
export default ():ModalHookInterface  => {

    const [visible, setVisible] = useState(false);

    const toggle = () => setVisible(!visible);
    const [modalId, setModalId] = useState<string>();

    const handleModalId = (id:string) => {
        toggle();
        setModalId(id);
    }


    return {toggle, visible,handleModalId,modalId};
}
