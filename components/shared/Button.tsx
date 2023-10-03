interface ButtonProps {
    label: String,
    secondary?: Boolean,
    fullWidth?: Boolean,
    large?: Boolean,
    onClick: () => void,
    disabled?: boolean,
    outline?: Boolean

}

const Button: React.FC<ButtonProps> = ({
    label,
    secondary,
    fullWidth,
    large,
    onClick,
    disabled,
    outline
}) => {
    return <button disabled={disabled} onClick={onClick} className={`
    ${fullWidth ? "w-full" : "w-fit"}
    ${secondary ? "text-white" : "text-gray"}
    ${secondary ? "bg-[gray]" : ""}


    `}>
        {label}
    </button>
}
export default Button