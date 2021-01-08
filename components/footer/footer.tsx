import './footer.module.less'
function Footer() {
	let list = [{
		label: '中国大陆',
		value: ''
	}, {
		label: '订阅电子报',
		value: ''
	}, {
		label: '联系我们',
		value: ''
	}, {
		label: '应用程序',
		value: ''
	}, {
		label: '关注我们',
		value: ''
	}, {
		label: '法律声明和隐私条款',
		value: ''
	}, {
		label: '沪ICP备09069024号',
		value: ''
	}, {
		label: '沪ICP备09069024号',
		value: ''
	}, {
		label: '电子营业执照',
		value: ''
	}, {
		label: '出版物经营许可证',
		value: ''
	}, {
		label: '沪公网安备',
		value: ''
	}, {
		label: '招聘',
		value: ''
	}, {
		label: '网站地图',
		value: ''
	}]
	return (
		<footer className="global-footer">
			<div className="container">
				<div className="navigation">
					<ul>
						{
							list.map(item => {
								return <li><a href={item.value}>{item.label}</a></li>
							})
						}
					</ul>
				</div>
			</div>
		</footer>
	)
}

export default Footer
