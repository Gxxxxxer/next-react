import Layout from '../components/MyLayout.js'
import 'isomorphic-fetch'
import Link from 'next/link'
const post = (props) => (
    <Layout>
        {props.shows.map(({show}) => (
            <li key={show.id}>
                <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                    <a>{show.name}</a>
                </Link>
            </li>
        ))}
    </Layout>
)


post.getInitialProps = async function() {
    const res = await fetch('http://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)
    return {
        shows: data
    }
}

export default post