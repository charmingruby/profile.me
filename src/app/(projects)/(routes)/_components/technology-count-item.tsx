interface TechnologyCountItemProps {
  name: string
  count: number
}

export function TechnologyCountItem({ count, name }: TechnologyCountItemProps) {
  return (
    <div className="py-1 h-9 px-3 flex items-center rounded-sm bg-primary-400 border border-primary-300 w-fit gap-2">
      <span className="font-medium">{name}</span>

      <div className="bg-secondary-main border border-secondary-light shadow-sm h-4 w-4 flex items-center justify-center rounded-full">
        <small className="text-xs text-white font-medium block">{count}</small>
      </div>
    </div>
  )
}
