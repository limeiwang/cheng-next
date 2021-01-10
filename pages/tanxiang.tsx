import Head from 'next/head'
import Layout from '../components/layout/layut'
import '../styles/tanxiang.module.css'

function tanxiang() {
    return (
        <Layout>
            <Head>
                <title>ChengHui-精妙檀香</title>
            </Head>
            <div className="tanxiang">
                <div className="container">
                    <h2>精妙檀香</h2>
                    <div>qqqqq</div>
                </div>
            </div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">Library</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
            </nav>
        </Layout>
    )
}

export default tanxiang;