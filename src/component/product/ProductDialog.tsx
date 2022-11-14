import {Dialog} from "@mui/material";
import {ModalHookInterface} from "../../hook/useModal";
import {useEffect} from "react";
interface LazyQueryDialogProps {
    modalValues: ModalHookInterface,
    children: JSX.Element
}
export default (props: LazyQueryDialogProps) => {
    const {modalValues, children} = props;

    return <Dialog
        open={modalValues.visible}
        onClose={modalValues.toggle}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{ minHeight:850, minWidth:700}}
    >
        {children}
    </Dialog>
}