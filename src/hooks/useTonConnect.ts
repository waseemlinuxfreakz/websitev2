import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";
import { Address, Cell, Sender, SenderArguments } from "@ton/core";
import { useAppDispatch, useAppSelector } from "./storage";
import { setBridgeFromHash } from "../store/bridgeSlice";

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
        const hash = Cell.fromBoc(Buffer.from(tx.boc, "base64"))[0]
          .hash()
          .toString("hex");
        dispatch(setBridgeFromHash(hash));
        console.log({ hash });
        return hash;
      },
      address: address ? Address.parse(address) : undefined,
    },
    connected: tonConnectUI.connected,
  };
}
