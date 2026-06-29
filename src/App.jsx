import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import HomePage from './Pages/HomePage'
import Header from './Components/Header'
import CreateBikes from './Pages/createBikes'
import EditBikes from './Pages/EditBikes'
import { Route, Routes } from 'react-router-dom'
import DetailsPage from './Pages/DetailsPage'
import axios from 'axios'

function App() {

  const [companyName, setCompanyName] = useState('');
  const [bikeName, setBikeName] = useState('');
  const [model, setModel] = useState('');
  const [engineCapacity, setEngineCapacity] = useState(0);
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [bikes, setBikes] = useState([]);
  const [bike, setBike] = useState({});


  const fetchAllApiData = async () => {
    setLoading(true)
    const response = await axios("https://6a34c8948248ee962fa5a2a1.mockapi.io/api/v1/bikes");
    console.log(response.data)
    const data = response.data
    setBikes(data)
    setLoading(false)
  }
  const fetchEditApiData = async (id) => {
    setLoading(true)
    const response = await axios(`https://6a34c8948248ee962fa5a2a1.mockapi.io/api/v1/bikes/${id}`);
    console.log(response.data)
    const data = response.data
    setCompanyName(data.companyname)
    setBikeName(data.name)
    setModel(data.model)
    setEngineCapacity(data.cc)
    setPrice(data.price)
    setImage(data.image)
    setLoading(false)
  }


  const fetchDetailsApiData = async (id) => {
    setLoading(true)
    const response = await axios(`https://6a34c8948248ee962fa5a2a1.mockapi.io/api/v1/bikes/${id}`);
    console.log(response.data)
    const data = response.data
    console.log(data)
    setBike(data)
    setLoading(false)
  }

  const PostData = (e, id) => {
    e.preventDefault();

    const data = {
      companyname: companyName,
      name: bikeName,
      model: model,
      cc: engineCapacity,
      price: price,
      image: image
    }
    if (id) {
      try {
        const response = axios.put(`https://6a34c8948248ee962fa5a2a1.mockapi.io/api/v1/bikes/${id}`, data)
        console.log("Data Sent Successfully")
      } catch (error) {
        console.log(error.message);
      }
    } else {
      try {
        const response = axios.post("https://6a34c8948248ee962fa5a2a1.mockapi.io/api/v1/bikes", data)
        console.log("Data Sent Successfully")
      } catch (error) {
        console.log(error.message);
      }
    }
  }


  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={
          <HomePage
            bikes={bikes}
            loading={loading}
            setBikes={setBikes}
            setLoading={setLoading}
            fetchApiData={fetchAllApiData}
          />}>
        </Route>
        <Route path='/create' element={
          <CreateBikes
            bikeName={bikeName}
            companyName={companyName}
            engineCapacity={engineCapacity}
            image={image}
            model={model}
            price={price}
            setBikeName={setBikeName}
            setCompanyName={setCompanyName}
            setEngineCapacity={setEngineCapacity}
            setImage={setImage}
            setModel={setModel}
            setPrice={setPrice}
            PostData={PostData}
          />}>

        </Route>
        <Route path='/edit/:id' element={
          <EditBikes
            bikeName={bikeName}
            companyName={companyName}
            engineCapacity={engineCapacity}
            image={image}
            model={model}
            price={price}
            setBikeName={setBikeName}
            setCompanyName={setCompanyName}
            setEngineCapacity={setEngineCapacity}
            setImage={setImage}
            setModel={setModel}
            setPrice={setPrice}
            loading={loading}
            setLoading={setLoading}
            fetchApiData={fetchEditApiData}
            PostData={PostData}
          />}>

        </Route>
        <Route path='/detail/:id' element={
          <DetailsPage
            bike={bike}
            setBike={setBike}
            loading={loading}
            setLoading={setLoading}
            fetchApiData={fetchDetailsApiData}
          />
        }></Route>
      </Routes>
    </>
  )
}

export default App
