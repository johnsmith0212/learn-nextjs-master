import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEthers, useContractFunction } from "@usedapp/core";
import { useState, useEffect } from "react";
import { ethers } from "ethers";
import { abi } from "../constants/abi";

export default function Home() {
	const { activateBrowserWallet, account } = useEthers();
	const [hasMetamask, setHasMetamask] = useState(false);

	useEffect(() => {
		if (typeof window.ethereum !== "undefined") {
			setHasMetamask(true);
		}
	});

	async function connect() {
		await activateBrowserWallet();
	}
	const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
	const contract = new ethers.Contract(contractAddress, abi);

	const { send, state } = useContractFunction(contract, "store", {
		transactionName: "store",
	});

	useEffect(() => {
		console.log(`State: ${state.status}`);
	}, [state]);

	return (
		<div>
			{hasMetamask ? (
				account ? (
					"Connected! "
				) : (
					<button onClick={() => connect()}>Connect</button>
				)
			) : (
				"Please install metamask"
			)}

			{account ? <button onClick={() => send(42)}>Execute</button> : ""}
		</div>
	);
}
