import React from 'react'

const Pagination = () => {
  return (
    <div> <nav aria-label="Page navigation example">
    <ul className="flex -space-x-p m-20 pl-32">
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight text-orange-500 bg-white hover:bg-orange-300 hover:text-white dark:hover:text-white rounded-xl"
        >
          &lt; Previous
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight text-orange-500 bg-white hover:bg-orange-300 hover:text-white dark:hover:text-white rounded-xl"
        >
          1
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 text-white bg-orange-500 hover:bg-orange-300 rounded-xl"
        >
          2
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight text-orange-500 bg-white hover:bg-orange-300 hover:text-white dark:hover:text-white rounded-xl"
        >
          3
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight text-orange-500 bg-white hover:bg-orange-300 hover:text-white dark:hover:text-white rounded-xl"
        >
          4
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight text-orange-500 bg-white hover:bg-orange-300 hover:text-white dark:hover:text-white rounded-xl"
        >
          5
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight text-orange-500 bg-white hover:bg-orange-300 hover:text-white dark:hover:text-white rounded-xl"
        >
          Next &gt;
        </a>
      </li>
    </ul>
  </nav></div>
  )
}

export default Pagination