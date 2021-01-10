import Head from 'next/head'
import Header from '../header/header'
import Footer from '../footer/footer'
import './layut.module.less'

function Layout({children}) {
	return (
		<div className="layout">
			<Head>
				<title>ChengHui - 官方网站</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
			</Head>
			<Header />
			<main className="global_main">
				{children}
			</main>
			<Footer />
		</div>
	)
}


export default Layout;