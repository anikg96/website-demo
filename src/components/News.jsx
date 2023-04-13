import React from 'react'
import PageSection from './PageSection'
export const News = () => {

    const news = [
        {
            id: 1,
            title: 'Nature 2022',
            content: 'Spatial multi-omic map of human myocardial infarction. In this study we have utilized snRNA-seq, snATAC-seq and spatial transcriptomics to map human myocardial infarction at unprecedented resolution.',
            link: 'https://www.nature.com/articles/s41586-022-05060-x'
        },
        {
            id: 2,
            title: 'Nature 2022',
            content: 'Spatial multi-omic map of human myocardial infarction. In this study we have utilized snRNA-seq, snATAC-seq and spatial transcriptomics to map human myocardial infarction at unprecedented resolution.',
            link: 'https://www.nature.com/articles/s41586-022-05060-x'
        },
        {
            id: 3,
            title: 'Nature 2022',
            content: 'Spatial multi-omic map of human myocardial infarction. In this study we have utilized snRNA-seq, snATAC-seq and spatial transcriptomics to map human myocardial infarction at unprecedented resolution.',
            link: 'https://www.nature.com/articles/s41586-022-05060-x'
        },
        {
            id: 4,
            title: 'Nature 2022',
            content: 'Spatial multi-omic map of human myocardial infarction. In this study we have utilized snRNA-seq, snATAC-seq and spatial transcriptomics to map human myocardial infarction at unprecedented resolution.',
            link: 'https://www.nature.com/articles/s41586-022-05060-x'
        },
        {
            id: 5,
            title: 'Nature 2022',
            content: 'Spatial multi-omic map of human myocardial infarction. In this study we have utilized snRNA-seq, snATAC-seq and spatial transcriptomics to map human myocardial infarction at unprecedented resolution.',
            link: 'https://www.nature.com/articles/s41586-022-05060-x'
        },
        {
            id: 6,
            title: 'Nature 2022',
            content: 'Spatial multi-omic map of human myocardial infarction. In this study we have utilized snRNA-seq, snATAC-seq and spatial transcriptomics to map human myocardial infarction at unprecedented resolution.',
            link: 'https://www.nature.com/articles/s41586-022-05060-x'
        },
    ]
  return (
    <PageSection 
    name="news"
    title="News"
    subtitle={``}
    >
        <div className="grid lg:grid-cols-3 gap-12">
       {
            news.map(({id, title, content, link}) => (
                <div key={id} class="flex justify-center">
                    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
                        <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">{title}</h5>
                        <p class="text-gray-700 text-base mb-4">
                            {content}
                        </p>
                        <a href={link}>                            
                            <button type="button" class="inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded-full hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Read Full Article</button>
                        </a>
                    </div>
                </div>
            ))
        }
        </div>
    </PageSection>
  )
}
