import Layout from '../components/layout/layut'
import '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  let list = [{
    img: '/2021.jpg',
    title: '2021',
    text: '2021新年快乐！'
  }, {
    img: '/2021.jpg',
    title: '2021',
    text: '2021新年快乐！'
  }, {
    img: '/2021.jpg',
    title: '2021',
    text: '2021新年快乐！'
  }, {
    img: '/2021.jpg',
    title: '2021',
    text: '2021新年快乐！'
  }, {
    img: '/2021.jpg',
    title: '2021',
    text: '2021新年快乐！'
  }, {
    img: '/cat.jpeg',
    title: 'cat',
    text: '猫mi'
  }, {
    img: '/cat2.jpeg',
    title: '2021',
    text: '2021新年快乐！'
  }, {
    img: '/sea.jpg',
    title: '2021',
    text: '2021新年快乐！'
  }, {
    img: '/2021.jpg',
    title: '2021',
    text: '2021新年快乐！'
  }, {
    img: '/cat.jpeg',
    title: 'cat',
    text: '猫mi'
  }, {
    img: '/cat2.jpeg',
    title: '2021',
    text: '2021新年快乐！'
  }, {
    img: '/sea.jpg',
    title: '2021',
    text: '2021新年快乐！'
  }, {
    img: '/2021.jpg',
    title: '2021',
    text: '2021新年快乐！'
  }, {
    img: '/cat.jpeg',
    title: 'cat',
    text: '猫mi'
  }, {
    img: '/cat2.jpeg',
    title: '2021',
    text: '2021新年快乐！'
  }, {
    img: '/sea.jpg',
    title: '2021',
    text: '2021新年快乐！'
  }]
  return (
    <Layout>
      <main className="home">
        <div className="container">
          <div className="row d-flex justify-content-center">
            {
              list.map((value, index) => {
                return (
                  <div key={index} className="card col-lg-3" style={{ width: '18rem' }}>
                    <Image
                      src={value.img}
                      alt="Picture of the author"
                      width={500}
                      height={500}
                    />
                    <div className="card-body">
                      <h5 className="card-title">{value.title}</h5>
                      <p className="card-text">{value.text}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
          
        </div>
        
      </main>
    </Layout>
  )
}
