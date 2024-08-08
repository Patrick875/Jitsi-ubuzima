import Consultation from "./views/Consultation";
import { FrappeProvider } from "frappe-react-sdk";
function App() {

  return (
    <>
      <FrappeProvider socketPort={import.meta.env.VITE_SOCKET_PORT ? import.meta.env.VITE_SOCKET_PORT : undefined} url='https://ubuzima.org'>
        <Consultation />
      </FrappeProvider>

    </>
  )
}

export default App
