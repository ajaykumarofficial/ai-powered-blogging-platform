import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Card = ({ data }) => {
    // Truncate description to 10 words
    const truncateDescription = (text, wordCharLimit, totalWordsLimit) => {
        if (!text) return "";

        // Split into words
        const words = text.trim().split(/\s+/);

        // Truncate each word if it exceeds char limit
        const truncatedWords = words.map(word =>
            word.length > wordCharLimit ? word.slice(0, wordCharLimit) + "…" : word
        );

        // Apply overall word limit if needed
        if (totalWordsLimit && truncatedWords.length > totalWordsLimit) {
            return truncatedWords.slice(0, totalWordsLimit).join(" ") + " …";
        }

        return truncatedWords.join(" ");
    };



    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 hover:shadow-lg transition">
            <Link href="#">
                <Image
                    className="rounded-t-lg"
                    src="/slider.jpg"
                    alt={data.title}
                    width={400}
                    height={250}
                />
            </Link>
            <div className="p-5">
                <Link href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {data.title}
                    </h5>
                </Link>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {truncateDescription(data.description, 40,6)}
                </p>
                <Link
                    href={`/view/${data.id}`}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white 
            bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Read more
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    )
}

export default Card
