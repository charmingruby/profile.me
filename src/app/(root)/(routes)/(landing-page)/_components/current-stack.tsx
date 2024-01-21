import { stack } from '@/data/stack'

export function CurrentStack() {
  return (
    <div className="mt-6 flex flex-col w-full lg:w-fit">
      <div className="flex flex-col w-fit text-center gap-2 mx-auto lg:text-start lg:mx-0">
        <div className="flex items-center gap-2">
          {stack.map((tec, idx) => (
            <div
              key={idx}
              className="flex items-center bg-primary-400 border border-secondary-main shadow-md shadow-primary-400 py-1.5 px-3"
            >
              <span className="text-gray-100 font-medium">{tec}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
