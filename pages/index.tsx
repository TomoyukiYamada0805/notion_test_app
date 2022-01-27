import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Link from 'next/link'
import { retrieve } from '../reducers/pages';
export default function Home({ pages }: { pages: any }) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(retrieve(pages));
  }, [])

  return (
    <main>
      <div className="text-center container mx-auto my-20 p-16 bg-slate-800 rounded shadow border border-slate-600">
        <h1 className="font-extrabold text-gray-900 text-6xl">
          <span className="text-white">Notion Test App</span>
        </h1>
        <div className="mt-5 flex justify-center">
          <div className="rounded-md">
            <Link href={`/test`}>
              <a className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-sky-500 hover:bg-sky-700 md:py-4 md:text-lg md:px-10">
                START
              </a>
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

interface pageValue {
  id: string,
  properties: {
    name: {
      title: {
        plain_text: string;
      }[],
    },
    body: {
      rich_text: {
        plain_text: string;
      }[],
    },
    done: {
      checkbox: boolean
    }
  }
}

export const getStaticProps = async () => {
  const response = await fetch(`${process.env.NEXT_API_URL}/api/notion/retrieve_database`, {
    method: 'GET'
  })
  const pages = await response.json();

  const page_values = pages.map((page: pageValue) => {
    return {
      id: page.id,
      title: page.properties.name.title[0].plain_text,
      body: page.properties.body.rich_text[0].plain_text,
      done: page.properties.done.checkbox
    }
  })

  return {
    props: {
      pages: page_values,
    },
    revalidate: 1,
  };
};