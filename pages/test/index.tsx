import { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { useRouter } from 'next/router'
import { getPages } from '../../reducers/pages';
import Content from '../../components/content';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

const DetailPost = () => {
    const router = useRouter()
    const pages = useSelector(getPages);

    useEffect(() => {
        const length = pages.length

        if (!length) {
            router.push('/')
        }
    }, [])

    return (
        <div className="container mx-auto mt-5 mb-10 bg-slate-800 rounded border border-slate-600 relative">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                allowTouchMove={false}
                pagination={{ clickable: true }}
            >
                {pages.map(page => (
                    <Content page={page} />
                ))}
            </Swiper>
        </div>

    )
}



export default DetailPost