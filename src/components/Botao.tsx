
interface BotaoProps {
    children: any
    className?: string
    onClick?: () => void
}

export default function Botao(props: BotaoProps) {
    return (
        <button onClick={props.onClick} className={`
            bg-gradient-to-r from-gray-600 to-green-300 
            px-4 py-2 rounded-md
            ${props.className}
            `}>
                {props.children}
        </button>
    )
}