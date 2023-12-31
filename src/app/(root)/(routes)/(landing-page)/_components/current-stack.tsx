import { stack } from '@/data/stack'

export function CurrentStack() {
  return (
    <div className="mt-6 flex flex-col w-full lg:w-fit">
      <div className="flex flex-col w-fit text-center gap-2 mx-auto lg:text-start lg:mx-0">
        <span className="font-semibold text-xl sm:text-2xl text-gray-palette-0">
          Full Stack Developer
        </span>

        <div className="h-px w-full bg-gray-palette-500 rounded-full" />

        <div className="flex items-center gap-1.5 sm:gap-3 text-gray-palette-0">
          {stack.map((tech, idx) => (
            <div key={idx} className="flex items-center gap-1.5 sm:gap-3">
              <span className="font-semibold text-base sm:text-xl">{tech}</span>
              {idx !== stack.length - 1 && (
                <div className="w-1 h-1 rounded-full bg-gray-palette-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
