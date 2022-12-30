export const brokenId = "JJWA6-hW7feoZb5hiy5G-7HT-el9GTcz3MWz5-A5V-4";
export const workingId = "xIJy5h0v5rlsdYI_xwhILo9a9EbU1K98pcjz-I1ahPU";

export async function getTestContract(warp, contractTxId) {
    const { jwk } = await warp.generateWallet();
    const contract = warp.contract(contractTxId)
        .setEvaluationOptions({ useKVStorage: true })
        .connect(jwk)


    return contract;
}

