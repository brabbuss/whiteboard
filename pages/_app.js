import buildClient from "../api/buildClient";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />;
}

MyApp.getInitialProps = async (appContext) => {
	console.log("appContext", appContext)
	const client = buildClient(appContext.ctx);
	let pageProps = {};
	//handle undefined
	if (appContext.Component.getInitialProps) {
		pageProps = await appContext.Component.getInitialProps(
			appContext.ctx,
			client
		);
	}

	return {
		pageProps,
	};
};

export default MyApp;
