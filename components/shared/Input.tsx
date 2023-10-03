interface InputProps{
    placeholder: string,
    value?:string,
    type?:string,
    disabled?:boolean,
    onchange:(event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input: React.FC<InputProps> = ({
    placeholder,
    value,
    type,
    disabled,
    onchange
}) => {
    return <input type={type} value={value} disabled={disabled} onChange={onchange}  placeholder={`${placeholder}`} />
}
export default Input