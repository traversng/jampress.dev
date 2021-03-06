export default function (props: {color?: string}) {
  return (
    <svg
      className="h-8 fill-current inline text-white"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4867 0.947346C14.8832 -0.623699 17.4473 0.746989 16.9167 2.78092L15.1903 9.3991L18.0495 10.5428C19.3361 11.0574 19.7222 12.6928 18.8016 13.7285L10.5134 23.0527C9.11688 24.6238 6.55273 23.2531 7.08332 21.2192L8.8098 14.601L5.95052 13.4573C4.66393 12.9426 4.27787 11.3073 5.19848 10.2716L13.4867 0.947346ZM14.9815 2.27607L6.6933 11.6003L11.1903 13.3991L9.01855 21.724L17.3068 12.3998L12.8098 10.601L14.9815 2.27607Z"
        fill={props.color}
      />
    </svg>
  )
}
