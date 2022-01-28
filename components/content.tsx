import { SwiperSlide } from 'swiper/react';
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/solid'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Value {
    id: string,
    title: string,
    body: string,
    done: boolean,
}

export default function Content({ page }: { page: Value }) {

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const body = JSON.stringify({
            id: page.id,
            done: e.target.checked,
        })

        await fetch('/api/notion/update_page', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: body
        })
    }

    return (
        <SwiperSlide key={page.id}>
            <div className='m-16'>
                <div className="text-gray-300">
                    <h2 className="text-5xl mb-10">{page.title}</h2>
                </div>
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-left text-gray-300 border-b border-slate-600 rounded  mb-10">
                                <span>Answer</span>
                                <ChevronUpIcon
                                    className={`${open ? 'transform rotate-180' : ''
                                        } w-5 h-5 text-gray-300`}
                                />
                            </Disclosure.Button>
                            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-300">
                                <p className="text-2xl mb-10">{page.body}</p>
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <div className="form-check">
                    <label className="inline-flex items-center">
                        <input
                            className="form-checkbox cursor-pointer h-6 w-6"
                            type="checkbox"
                            defaultChecked={page.done}
                            onChange={onChange}
                        />
                        <span className="ml-4 text-3xl text-gray-300">Done!</span>
                    </label>
                </div>
            </div>
        </SwiperSlide>
    )
}