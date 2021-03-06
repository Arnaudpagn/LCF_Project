export default function Tutorial() {
  return (
    <div className="flex justify-center">
      <div className="px-4" style={{ maxWidth: "1600px" }}>
        <h1 className="py-10 px-20 text-3xl">How does this website work ?</h1>

        <p className="text-justify">
          This website is a small project built in the context of an application
          to{" "}
          <a
            href="https://www.lecryptofellowship.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            LeCryptoFellowship
          </a>
          .
          <br />
          <br />
          This is an NFT Marketplace for pictures of your cats.
          <br />
          <br />
          This NFT Marketplace is hosted on the Polygon Mumbai Testnet (see{" "}
          <a
            href="https://docs.polygon.technology/docs/develop/network-details/network/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            here
          </a>{" "}
          for network details )
          <br />
          <br />
          In order to connect and use this website, please follow the steps
          below :
        </p>
        <br />
        <ol className="list-decimal list-inside text-justify space-y-4">
          <li>
            Install{" "}
            <a
              href="https://metamask.io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              Metamask
            </a>
          </li>
          <li>
            Connect to the{" "}
            <a
              href="https://docs.polygon.technology/docs/develop/network-details/network/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              Mumbai testnet
            </a>
          </li>
          <li>
            Get some test MATIC{" "}
            <a
              href="https://faucet.polygon.technology/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              here
            </a>
          </li>
          <li>
            Connect to the website and start uploading and buying cat pictures
            as NFTs
          </li>
        </ol>
        <br />
        <br />
        <p className="text-justify text-sm">
          <i>
            For reasons not under our control, the current MaxFee and
            MaxPriorityFee are quite high on the Mumbai testnet so we have
            overriden those values to be 50 GWEI each in our transactions
          </i>
        </p>
        <br />
        <br />
        <p className="text-justify">
          Credits :{" "}
          <b>
            Nader Dabit (
            <a
              href="https://www.youtube.com/c/naderdabit"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600"
            >
              youtube channel
            </a>
            )
          </b>
        </p>
      </div>
    </div>
  );
}
