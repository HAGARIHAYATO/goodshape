import { Provider } from 'react-redux'
import { useStore } from '../store'
import '../styles/common.scss'

export default function App({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState)

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}
