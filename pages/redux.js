import React from 'react'
import { increment, loadData, FETCH } from '../redux/actions'
import { configureStore } from '../redux/store'
import withRedux from 'next-redux-wrapper'
import Page from '../components/page'
class Counter extends React.Component {
    // getInitialProps can not be used in children components. Only in pages.
    static async getInitialProps({ store,isServer }) {
        store.dispatch(increment())
        await store.dispatch(FETCH())
        return {
            isServer
        };
    }

    componentDidMount() {
        // this.props.dispatch(startClock())
        // this.props.dispatch(loadData())
    }

    render() {
        return <Page title='Index Page' linkTo='/' />
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        //addCount: bindActionCreators(addCount, dispatch),
        //startClock: bindActionCreators(startClock, dispatch)
    }
}
export default withRedux(configureStore, null, mapDispatchToProps)(Counter)