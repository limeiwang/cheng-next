import './footer.module.less'
function Footer() {
	return (
		<footer className="global-footer">
			{/* <div className="container">
				<div className="navigation">
					<ul>
						{
							list.map((item, index) => {
								return <li key={index}><a href={item.value}>{item.label}</a></li>
							})
						}
					</ul>
				</div>
			</div> */}
			<div className="container d-none d-sm-block">
				<div className="row">
					<div className="global-footer__section closed col-sm-3">
						<div className="global-footer__section-title">产品<i className="icon-chevron-down"></i></div>
						<ul className="global-footer__section-list">
							<li><a href="/about/">静秒檀香</a></li>
							<li><a href="/blog/cn/">博客</a></li>
							<li><a href="/terms/">服务条款</a></li>
							<li><a href="/privacy/">隐私政策</a></li>
							<li><a href="/joinus/">加入我们</a></li>
						</ul>
					</div>
					<div className="global-footer__section closed col-sm-3">
						<div className="global-footer__section-title">支持<i className="icon-chevron-down"></i></div>
						<ul className="global-footer__section-list">
							<li><a href="/xmind2020/">XMind 2020</a></li>
							<li><a href="/xmind8-pro/">XMind 8</a></li>
							<li><a href="/mobile/">XMind 移动版</a></li>
							<li><a href="/pricing/">购买</a></li>
							<li><a href="/download/">下载</a></li>
						</ul>
					</div>
					<div className="global-footer__section closed col-sm-3">
						<div className="global-footer__section-title">了解更多<i className="icon-chevron-down"></i></div>
						<ul className="global-footer__section-list">
							<li><a href="/workshop/">沙龙分享</a></li>
							<li><a href="/partner/">合作者</a></li>
							<li><a href="/developer/">开发者</a></li>
							<li><a href="/sitemap/">网站地图</a></li>
							<li><a href="/newsletter/subscribe/">邮件订阅</a></li>
						</ul>
					</div>
					<div className="global-footer__section closed col-sm-3">
						<div className="global-footer__section-title">获取帮助<i className="icon-chevron-down"></i></div>
						<ul className="global-footer__section-list">
							<li><a href="http://support.xmind.net/" target="_blank">支持中心</a></li>
							<li><a href="/faq/">常见问题</a></li>
							<li><a href="/contact/">联系我们</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div className="lang-row d-none d-sm-block"></div>
			<div className="copyright container text-center">
				<p>
					<a href=""></a>
					Copyright © 2020 Apple Inc. - 保留所有权利。<br/>
				</p>
				<p className="pdp-sml-body">
					京ICP备10214630号 
					<a href="https://www.apple.com.cn/businesslicense/" target="_blank">营业执照</a> 
					无线电发射设备销售备案编号11201910351200
				</p>
			</div>
		</footer>
	)
}

export default Footer
