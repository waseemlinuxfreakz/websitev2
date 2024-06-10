import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import { Address, Cell, Sender, SenderArguments } from "@ton/core";
import { useAppDispatch, useAppSelector } from "./storage";
import { setBridgeFromHash } from "../store/bridgeSlice";
// import { Address } from "@ton/core";

async function fetchHash(_hash: string) {
  let hash = "";

  const _res = await fetch(
    new URL(
      `https://testnet.toncenter.com/api/index/getTransactionByInMessageHash?msg_hash=${encodeURIComponent(
        _hash,
      )}`,
    ).toString(),
    {
      headers: {
        "x-api-key":
          "1b651340a347951cc8b9a102c406ab2a05226d59d6354aa009049d6fbbb17b0b",
      },
      method: "GET",
    },
  );
  const _data: any = await _res.json();

  if (_data.length) {
    const res = await fetch(
      new URL(
        `https://testnet.toncenter.com/api/index/getTransactionByInMessageHash?msg_hash=${encodeURIComponent(
          _data[0].out_msgs[0].hash,
        )}`,
      ).toString(),
      {
        headers: {
          "x-api-key":
            "1b651340a347951cc8b9a102c406ab2a05226d59d6354aa009049d6fbbb17b0b",
        },
        method: "GET",
      },
    );

    const data: any = await res.json();
    if (data.length) {
      hash = Buffer.from(data[0].hash, "base64").toString("hex");
    }
  }

  return hash;
}

export function useTonConnect(): {
  sender: Sender;
  connected: boolean;
  hash: string;
} {
  const [tonConnectUI] = useTonConnectUI();
  const address = useTonAddress();
  const dispatch = useAppDispatch();

  return {
    sender: {
      // @ts-ignore
      send: async (args: SenderArguments) => {
        const tx = await tonConnectUI.sendTransaction({
          messages: [
            {
              address: args.to.toString(),
              amount: args.value.toString(),
              payload: args.body?.toBoc().toString("base64"),
            },
          ],
          validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes for user to approve
        });
        const _hash = Cell.fromBoc(Buffer.from(tx.boc, "base64"))[0]
          .hash()
          .toString("base64");

        let retries = 6;

        while (retries >= 0) {
          const hash = await fetchHash(_hash);
          dispatch(setBridgeFromHash(hash));
          if (hash) break;
          await new Promise((e) => setTimeout(e, 6 - retries * 5000));
        }

        return 0;
      },
      address: address ? Address.parse(address) : undefined,
    },
    connected: tonConnectUI.connected,
  };
}
