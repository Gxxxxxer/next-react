import Header from '../components/Header'
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(import('../components/hello.js'),
    {
        loading: () => <p>...</p>
    })
export default () => (
    <div>
        <Header/>
        <DynamicComponent/>
        <p>This is the about page</p>
    </div>
)