import Link from 'next/link'
import style from './header.module.css'
import React, { useState } from 'react'

function Header() {
	const [flag, setFlag] = useState(false);

	return (
		<header className={`${style['global_header']} opaque`}>
			<div className="global-header__wrapper">
				<div className="global-header__large-screen position-relative d-lg-flex justify-content-between d-none w-100 h-100">
					<Link href='/'><a>Logo</a></Link>
					<div>
						<Link href='/'><a>首页</a></Link>
						<Link href='/'><a>首页</a></Link>
					</div>
				</div>
				<div className="global-header__small-screen position-relative d-lg-none d-flex justify-content-center w-100 h-100">
					<div onClick={() => setFlag(!flag)} className="global-header__menu-toggle">
						<span></span>
						<span></span>
						<span></span>
						<span className="btn btn-warning">按钮</span>
					</div>
					<Link href='/'><a>Logo</a></Link>
					<div className="global-header__account">i</div>
					<div style={flag ? {} : {display: 'none'}}>
						flag
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header;