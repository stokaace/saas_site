import Navigation from '../components/navigation'
import { ChevronRightIcon } from '@heroicons/react/20/solid'

import Head from 'next/head'

import Link from 'next/link'

export default function Org() {
  

  return (
    <>
      <Head>
        <title>Enkrypt AI - Home</title>
      </Head>
      <Navigation>
        <div className='pb-8'>Models</div>

        <Models/>

      </Navigation>
    </>
  )
}


const people = [
  {
    name: 'TPG4',
    title: 'Albert',
    role: 'Live',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://sid-public-web.s3.amazonaws.com/img/peeps/ACwAAAAR4-YBgUvZfD9AF2TdgrYlcbETZfdUmWk.jpeg',
  },
  {
    name: 'DrugDisc3',
    title: 'Jane',
    role: 'Live',
    email: 'janecooper@example.com',
    telephone: '+1-202-555-0170',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  
]
export function Models() {
  return (
    <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {people.map((person) => (
        <li key={person.email} className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
          <div className="flex w-full items-center justify-between space-x-6 p-6">
            <div className="flex-1 truncate">
              <div className="flex items-center space-x-3">
                <h3 className="truncate text-sm font-medium text-gray-900">{person.name}</h3>
                <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {person.role}
                </span>
              </div>
              {/* <p className="mt-1 truncate text-sm text-gray-500">{person.title}</p> */}
            </div>
            <img className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300" src={person.imageUrl} alt="" />
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`/model`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  View Model
                </a>
              </div>
             
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}