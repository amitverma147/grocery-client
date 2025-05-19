import BestSeller from "../components/BestSeller"
import Categories from "../components/Categories"
import MainBanner from "../components/MainBanner"

import BottomBanner from "../components/BottomBanner"


const Home = () => {
  return (
    <div className="mt-10">
        <MainBanner/>
        <Categories/>
        <BestSeller/>
        <BottomBanner/>
    </div>
  )
}

export default Home