
interface ButtonProps {
    label: string;
    onClick: () => void;
    filled: boolean
    border: boolean
}


function Button({ label, onClick, filled, border }: ButtonProps){

    return(
        <button
            onClick={onClick}
            style={{
                padding: '10px 15px',
                borderRadius: '8px', // camelCase
                backgroundColor: filled ? 'var(--primary-color)' : 'transparent',
                border: border? '2px solid var(--primary-color)' : 'none',
                color: border? filled? 'var(--white-color)' : 'var(--primary-color)' : 'var(--neutral-color)',
                fontSize: '0.875rem',
                fontWeight: '700',
                cursor: 'pointer'
            }}
        >
            {label}
        </button>
    );

}

export default Button;