import Image from 'next/image'
import React from 'react'

const CategoryList = () => {
  return (
    <div>
        <div class="flex h-screen flex-col justify-between border-e bg-white">
  <div>
    <div class="border-t border-gray-100">
      <div class="px-2">
        <div class="py-4">
          <a
            href="#"
            class="t group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-blue-700 hover:bg-gray-50"
          >
            <Image 
            src = '/vixen.png'
            width={30}
            height={10}
            alt = 'vixen'    
        />
            <span
              class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 text-xs font-medium text-white group-hover:visible"
            >
              Vixens
            </span>
          </a>
        </div>

        <ul class="space-y-4 border-gray-100">
          <li>
            <a
              href="#"
              class="group relative flex justify-center rounded px-2 py-1.5 bg-blue-50 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
        <Image 
            src = '/model.png'
            width={30}
            height={20}
            alt = 'model'    
        />

              <span
                class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                Model
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="group relative flex justify-center rounded px-2 py-1.5 bg-blue-50 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
               <Image 
            src = '/videographer.png'
            width={30}
            height={20}
            alt = 'Videographer'    
        />
              <span
                class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                Videographer
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
               <Image 
            src = '/photographer.png'
            width={30}
            height={20}
            alt = 'vixen'    
        />

              <span
                class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                Photographer
              </span>
            </a>
          </li>

          <li>
            <a
              href="#"
              class="group relative flex justify-center rounded bg-blue-50 px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
               <Image 
            src = '/stylist.png'
            width={30}
            height={20}
            alt = 'vixen'    
        />

              <span
                class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                Stylist
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="group relative flex justify-center bg-blue-50 rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
               <Image 
            src = '/personaltrainer.png'
            width={30}
            height={20}
            alt = 'vixen'    
        />

              <span
                class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                personaltrainer
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="group relative flex bg-blue-50 justify-center rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
               <Image 
            src = '/droneflyer.png'
            width={30}
            height={20}
            alt = 'vixen'    
        />

              <span
                class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                droneflyer
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="group relative flex justify-center bg-blue-50 rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
               <Image 
            src = '/tutor.png'
            width={30}
            height={20}
            alt = 'vixen'    
        />

              <span
                class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                tutor
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="group relative flex justify-center bg-blue-50 rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
               <Image 
            src = '/makeupartist.png'
            width={30}
            height={20}
            alt = 'vixen'    
        />

              <span
                class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                makeupartist
              </span>
            </a>
          </li>
          <li>
            <a
              href="#"
              class="group relative flex justify-center bg-sky-50 rounded px-2 py-1.5 text-gray-500 hover:bg-gray-50 hover:text-gray-700"
            >
               <Image 
            src = '/hairdresser.png'
            width={30}
            height={20}
            alt = 'vixen'    
        />

              <span
                class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
              >
                hairdresser
              </span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>

  <div class="sticky inset-x-0 bottom-0 border-t border-gray-100 bg-white p-2">
    <form action="#">
      <button
        type="submit"
        class="group relative flex w-full justify-center rounded-lg px-2 py-1.5 text-sm text-gray-500 hover:bg-gray-50 hover:text-gray-700"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="size-5 opacity-75"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
          />
        </svg>

        <span
          class="invisible absolute start-full top-1/2 ms-4 -translate-y-1/2 rounded bg-gray-900 px-2 py-1.5 text-xs font-medium text-white group-hover:visible"
        >
          Logout
        </span>
      </button>
    </form>
  </div>
</div>



    </div>
  )
}

export default CategoryList