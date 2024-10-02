
import {Link} from 'react-router-dom'

const navigation = [
   /*  { name: 'PERN Stack', href: '/', current: true }, */
    { name: 'Nueva Tarea', href: '/tasks/new'},
    /* { name: 'Projects', href: '#', current: false },
    { name: 'Calendar', href: '#', current: false }, */
]


//'text-gray-300 hover:bg-gray-700 hover:text-white','rounded-md px-3 py-2 text-sm font-medium',)

export default function Navbar() {
  return (
    <div className="bg-gray-800">
        <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
            <div className="relative flex h-16 items-center justify-between">
                <div className="flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="items-center w-auto pe-8">
                        <Link to='/' style={{ textDecoration:"none"}} >PERN Stack</Link>
                    </div>
                    <div className="px-2">
                        {navigation.map((item) => (
                            <Link to={item.href} key={item.name} className='bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-700 hover:text-white'>{item.name}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
