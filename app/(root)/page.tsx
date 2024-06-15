import React from 'react'
import { podcastData } from "@/constants";
import PodcastCard from "@/components/PodcastCard";

const Page = () => {
    return (
        <div className='mt-9 flex-col ga-9'>
            <section className='flex flex-col gap-5'>
                <h1 className='text-20 font-bold text-white-1'>Trending Podcasts</h1>

                <div className='podcast_grid'>
                    {podcastData.map((podcast, key) => (
                        <PodcastCard key={podcast.id} imgUrl={podcast.imgURL} title={podcast.title} description={podcast.description}
                        podcastId={podcast.id} />
                    ))}
                </div>

            </section>
        </div>
    );
}


export default Page;