import {NextPage} from 'next'
import Image from 'next/image'
import ImageFile from '../public/images/cat-323262_640.jpg'

const ImageSample = () => {
  return(
    <div>
      <h1>画像表示の比較</h1>
      <p>imgタグで表示した場合</p>
      <img src="/images/cat-323262_640.jpg" />
      <p>Imageコンポーネントで表示した場合</p>
      <Image src={ImageFile} alt='画像ファイル'/>
      <p>Imageで表示した場合事前に描写エリアが確保されます</p>
    </div>
  )
}

export default ImageSample
