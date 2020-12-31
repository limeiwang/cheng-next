import Head from 'next/head'
import Header from '../header/header'
import Footer from '../footer/footer'

function Layout({children}) {
	return (
		<div>
			<Head>
				<title>cheng-next</title>
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
			</Head>
			<Header />
			{children}
			layout
			<Footer />
		</div>
	)
}


export default Layout;