import { Calendar } from 'lucide-react'

// interface TimelineItemProps {}

export function TimelineItem() {
  return (
    <li className="ml-8 mb-10">
      <span className="absolute flex items-center justify-center w-6 h-6  rounded-full -left-3 ring-8 ring-secondary-main/20 bg-secondary-dark">
        <Calendar className="h-3.5 w-3.5" />
      </span>

      <h3 className="flex items-center mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Title{' '}
        <span className=" bg-secondary-main text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">
          Latest
        </span>
      </h3>
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        Jan - Jun, 2023
      </time>
      <p className="text-base font-normal text-gray-500 dark:text-gray-400">
        description: Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Fuga enim praesentium suscipit minus quibusdam autem sapiente.
        Excepturi, aliquid obcaecati alias quisquam nemo distinctio inventore
        dolor! Obcaecati dolorem ab aspernatur mollitia.
      </p>
    </li>
  )
}
