import Head from 'next/head'
import Header from '../header/header'
import Footer from '../footer/footer'

function Layout({children}) {
	return (
		<div className="layout">
			<Head>
				<title>cheng-next</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
			</Head>
			<Header />
			{children}
			<Footer />
		</div>
	)
}


export default Layout;