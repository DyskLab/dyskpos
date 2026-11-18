/** Logo DyskPOS (sama dengan public/favicon.svg). Ukuran diatur lewat className, mis. "w-12 h-12". */
export default function ApplicationLogo({ className = "", ...props }) {
    return (
        <svg
            {...props}
            className={className}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="DyskPOS"
        >
            <rect width="100" height="100" rx="24" fill="#10B981" />
            <g fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round">
                <path strokeWidth="7" d="M44 22.6A30 30 0 1 0 73 32.7" />
                <path strokeWidth="5" d="M38 38h24v28l-4-3-4 3-4-3-4 3-4-3-4 3z" />
                <path strokeWidth="5" d="M44 47h12M44 55h8" />
            </g>
        </svg>
    );
}
