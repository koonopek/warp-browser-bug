export async function buildWarp() {
    const { WarpFactory } = await import('warp-contracts');

    const warp = WarpFactory
        .forMainnet();


    return { warp }
}