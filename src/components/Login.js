import React from 'react';
import PropTypes from 'prop-types';

const Login = () => (
	<nav className="login">
		<h2>Inventory Login</h2>
		<p> Sign in to manage your store's inventory </p>
		<button 
			className='github'
			onClick={()=>this.props.authenticate("Github")}
		>
		Log in With GitHub
		</button>
		<button 
			className='twitter'
			onClick={()=>this.props.authenticate("Twitter")}
		>
		Log in With Twitter (broken)
		</button>
		<button 
			className='facebook'
			onClick={()=>this.props.authenticate("Facebook")}
		>
		Log in With Facebook
		</button>
	</nav>
)

Login.propTypes = {
	authenticate: PropTypes.func.isRequired
}

export default Login;