interface FieldErrorMessageProps {
  msg?: string
}

export function FieldErrorMessage({ msg }: FieldErrorMessageProps) {
  return <div className="text-red-500 text-sm font-medium mt-1">{msg}</div>
}
