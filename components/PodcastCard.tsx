import React from 'react'
import { IPodcastCardProps } from "@/app/types";
import Image from "next/image";

const PodcastCard = ({ title, imgUrl, description, podcastId }: IPodcastCardProps) => {
    return (
        <div className='cursor-pointer'>
            <figure className='flex flex-col gap-2'>
                <Image src={imgUrl} alt='image' width={174} height={174} className='aspect-square h-fit w-full rounded-xl
                2xl:size-[200px]' />
                <div className='flex flex-col'>
                    <h1 className='text-16 truncate font-bold text-white-1'>{title}</h1>
                    <h2 className='text-12 truncate font-normal capitalize text-white-4'>{description}</h2>
                </div>
            </figure>
        </div>
    );
}

export default PodcastCard;