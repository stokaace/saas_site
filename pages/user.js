import Navigation from '../components/navigation'
import Head from 'next/head'

export default function User() {
  

  return (
    <>
      <Head>
        <title>User</title>
      </Head>
      <Navigation>
        <div className='pb-8'>Model &gt; TPG4 &gt; Michael Landon</div>
      
        <div className='border rounded-lg p-2 mb-8'>
        <Stats/>
        </div>
        <Button/>
        <LogTable/>
      </Navigation>

    </>
  )
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const stats = [
  { name: 'Total Calls', value: '141', change: '', changeType: 'positive' },
  { name: 'Last day', value: '12', change: '+14.02%', changeType: 'negative' },
  { name: 'Unique IPs', value: '4', change: '', changeType: 'positive' },
  { name: 'Anomalies', value: '0', change: '', changeType: 'negative' },
]


const plans = [
  {
    id: 1,
    name: 'Wed, 30 Aug 2023 04:36:59 GMT',
    memory: '174.4.13.1',
    cpu: 'A323',
    storage: 'true',
    price: false,
    isCurrent: false,
  },
  {
    id: 2,
    name: 'Wed, 30 Aug 2023 04:38:40 GMT',
    memory: '174.4.13.1',
    cpu: 'A323',
    storage: 'false',
    price: true,
    isCurrent: false,
  },
  ,
  {
    id: 2,
    name: 'Wed, 30 Aug 2023 04:38:40 GMT',
    memory: '174.4.13.1',
    cpu: 'A323',
    storage: 'false',
    price: true,
    isCurrent: false,
  },
  ,
  {
    id: 2,
    name: 'Wed, 30 Aug 2023 04:38:40 GMT',
    memory: '174.4.13.1',
    cpu: 'A323',
    storage: 'false',
    price: true,
    isCurrent: false,
  },
  ,
  {
    id: 2,
    name: 'Wed, 30 Aug 2023 04:38:40 GMT',
    memory: '174.4.13.1',
    cpu: 'A323',
    storage: 'false',
    price: false,
    isCurrent: false,
  },
  // More plans...
]

function Button(){
  return(
    <>
    <button
      type="button"
      className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
    >
      Revoke
    </button>
    </>
    )
}


export function Stats() {
  return (
    <dl className="mx-auto grid grid-cols-1 gap-px bg-gray-900/5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2 bg-white px-4 py-4 sm:px-6 xl:px-8"
        >
          <dt className="text-sm font-medium leading-6 text-gray-500">{stat.name}</dt>
          <dd
            className={classNames(
              stat.changeType === 'negative' ? 'text-rose-600' : 'text-gray-700',
              'text-xs font-medium'
            )}
          >
            {stat.change}
          </dd>
          <dd className="w-full flex-none text-3xl font-medium leading-10 tracking-tight text-gray-900">
            {stat.value}
          </dd>
        </div>
      ))}
    </dl>
  )
}


export function LogTable() {
  return (
    <div className="">
      
      <div className="-mx-4 mt-10 ring-1 ring-gray-300 sm:mx-0 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr>
              <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                Timestamp
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                IP
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                User ID
              </th>
              <th
                scope="col"
                className="hidden px-3 py-3.5 text-left text-sm font-semibold text-gray-900 lg:table-cell"
              >
                Output
              </th>
              
              <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                <span className="font-semibold text-gray-900 text-sm text-left ">Anomaly</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan, planIdx) => (
              <tr key={plan.id}>
                <td
                  className={classNames(
                    planIdx === 0 ? '' : 'border-t border-transparent',
                    'relative py-4 pl-4 pr-3 text-sm sm:pl-6'
                  )}
                >
                  <div className="font-medium text-gray-900">
                    {plan.name}
                    {plan.isCurrent ? <span className="ml-1 text-indigo-600">(Current Plan)</span> : null}
                  </div>
                  <div className="mt-1 flex flex-col text-gray-500 sm:block lg:hidden">
                    <span>
                      {plan.memory} / {plan.cpu}
                    </span>
                    <span className="hidden sm:inline">·</span>
                    <span>{plan.storage}</span>
                  </div>
                  {planIdx !== 0 ? <div className="absolute -top-px left-6 right-0 h-px bg-gray-200" /> : null}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? '' : 'border-t border-gray-200',
                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                  )}
                >
                  {plan.memory}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? '' : 'border-t border-gray-200',
                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                  )}
                >
                  {plan.cpu}
                </td>
                <td
                  className={classNames(
                    planIdx === 0 ? '' : 'border-t border-gray-200',
                    'hidden px-3 py-3.5 text-sm text-gray-500 lg:table-cell'
                  )}
                >
                  {plan.storage}
                </td>
               
                <td
                  className={classNames(
                    planIdx === 0 ? '' : 'border-t border-transparent',
                    'relative py-3.5 pl-3 pr-4 text-right text-sm font-medium sm:pr-6'
                  )}
                >
                  <span className="inline-flex flex-shrink-0 items-center rounded-full bg-green-50 px-1.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  No
                </span>
                  {planIdx !== 0 ? <div className="absolute -top-px left-0 right-6 h-px bg-gray-200" /> : null}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}