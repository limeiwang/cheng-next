import Link from 'next/link'
function Header() {
	return (
		<header className="global-header opaque">
			<div className="global-header__wrapper">
				<div className="global-header__large-screen position-relative d-lg-flex justify-content-between d-none w-100 h-100">
					<Link href='/'><a>Logo</a></Link>
					<div>
						<Link href='/'><a>首页</a></Link>
						<Link href='/'><a>首页</a></Link>
					</div>
				</div>
				<div className="global-header__small-screen position-relative d-lg-none d-flex justify-content-center w-100 h-100">
					<div className="global-header__menu-toggle">
						<span></span>
						<span></span>
						<span></span>
					</div>
					<Link href='/'><a>Logo</a></Link>
					<div className="global-header__account">i</div>
				</div>
			</div>
		</header>
	)
}

export default Header;