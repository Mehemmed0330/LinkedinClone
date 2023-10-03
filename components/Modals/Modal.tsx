import { useCallback } from "react"
import Button from "../shared/Button";

interface ModalProps {
    isOpen?: Boolean,
    onClose: () => void,
    onSubmit: () => void,
    title?: String,
    body?: React.ReactElement,
    footer?: React.ReactElement,
    actionLabel: String,
    disabled?: Boolean
}

const Modal: React.FC<ModalProps> = ({
    isOpen,
    onClose,
    onSubmit,
    title,
    body,
    footer,
    actionLabel,
    disabled
}) => {

    const handleClose = useCallback(() => {
        if (disabled) {
            return;
        }
        onClose()
    }, [disabled, onClose])

    const handleSubmit = useCallback(() => {
        if (disabled) {
            return
        }
        onSubmit()
    }, [disabled, onSubmit])

    if (!isOpen) {
        return null
    }

    return (
        <>
            <div className="
            justify-center
            items-center
            flex
            overflow-x-hidden
            overflow-y-auto
            fixed
            inset-0
            z-50
            outline-none
            focus:outline-800
            bg-gray-900
            bg-opacity-70
            ">
                <div className="
                relative
                w-full
                lg:3/6
                my-6
                mx-auto
                lg:max-w-3xl
                h-full
                lg:h-auto
                ">
                    {/* Content */}
                    <div className="
                    h-full
                    lg:h-auto
                    border-0
                    rounded-lg
                    shadow-lg
                    relative
                    flex
                    flex-col
                    w-full
                    bg-white
                    outline-none
                    focus:outline-none">
                        {/* Header */}
                        <div className="
                        flex
                        items-center
                        justify-between
                        p-10
                        rounded-t">
                            <h3 className="test-3xl font-semibold text-black">{title}</h3>
                            <button className="text-black" onClick={handleClose}>
                                x
                            </button>
                        </div>
                        <div className="relative p-10 flex-auto">
                            {body}
                        </div>
                        {/* footer */}
                        <div className="flex flex-col gap-2 p-10">
                            <Button disabled={false} onClick={() => console.log("Hii")} fullWidth secondary label={actionLabel} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Modal