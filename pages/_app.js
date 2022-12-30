import '../styles/globals.css'
import { Context } from '../hooks/context';
import { useApi } from '../hooks/useApi';

function MyApp({ Component, pageProps }) {
  const { isLoading, api } = useApi();

  return (
    <div>
      {!isLoading ?
        <Context.Provider value={api}>
          <Component {...pageProps} />
        </Context.Provider>
        : null}
    </div >
  )
}

export default MyApp
