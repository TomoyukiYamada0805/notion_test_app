import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useRouter } from 'next/router'
import { getPages } from '../../reducers/pages';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DetailPost = () => {
    const router = useRouter()
    const pages = useSelector(getPages);
    const [id, setId] = useState('');

    useEffect(() => {
        const length = pages.length

        if (!length) {
            router.push('/')
        }
    }, [])

    const onChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const body = JSON.stringify({
            id: id,
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

    const onslide = (index: number) => {
        setId(pages[index].id)
    }

    return (
        <div className="container mx-auto mt-20 mb-10 bg-slate-800 rounded border border-slate-600 relative">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                allowTouchMove={false}
                pagination={{ clickable: true }}
                onSlideChange={(swiper) => onslide(swiper.activeIndex)}
            >
                {pages.map(page => (
                    <SwiperSlide key={page.id}>
                        <div className='m-16'>
                            <div className="text-gray-300">
                                <h2 className="text-5xl mb-10">{page.title}</h2>
                                <p className="text-2xl mb-10">{page.body}</p>
                            </div>
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
                ))}
            </Swiper>
        </div>

    )
}



export default DetailPost